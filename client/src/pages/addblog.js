import React, { useState } from 'react';
import Navbar from '../components/navbar';
import axios from "axios";
import '../components/blog.css';
import "./addblog.css";
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PreviewImage from '../components/previewimg';
function Addblog(props) {
const userData= useSelector((data)=>
data.loginuser.user,
)
console.log(userData)
const[values,setValues]=useState({
        place:"",
        visitedDate:"",
        userId:"",
        image:[],
        desc:""
    });

//console.log (file);
    function handleValues(event){
        const name=event.target.name;
        const value=event.target.value;
        setValues((prev)=>{
            return{
            ...prev,
        [name]:value,
        }
        })
    };
    const[file,setFile]= useState([]);
    const handleFile=(e)=>{
        const img=e.target.files[0];
        setFile((fileimg)=>{return[
            ...fileimg,
            img,]});
        
    }
    console.log(file);
  async function  handleSubmit(event){
    event.preventDefault();
    const imgarr=[];
    if(file){
        console.log(file[0].name);
        const data = new FormData();
        data.append("file",file);
        for(let i=0;i<file.length;i++){
        const fileName = Date.now() + file[i].name;
        console.log(fileName);
        data.append(`name${[i]}`,fileName);
        imgarr.push(fileName);
        console.log(imgarr);
          }
         try {
             axios.post("http://localhost:4000/uploadmultiple",data)
         } catch (error) {
           console.log(error);  
         }

    }
     values.image=imgarr;
     values.userId=userData._id;
     console.log(values);
    
    try{
         await axios.post("http://localhost:4000/blog/postblog",values).then(window.alert("posted successfully"));
     }
     catch(error){
                 console.log(error);
             }
         setValues({
            place:"",
            visitedDate:"",
         desc:""
    })
};
   
    return (
        <>
<Navbar></Navbar>
            {file &&<PreviewImage imgdata={file}></PreviewImage>}
          <form className='up-main'  encType="multipart/form-data" >
            <div>
            <TextField id="standard-basic" label="Place" variant="standard" name="place" onChange={handleValues} value={values.place} autoFocus={true} />
            </div>
            <div>
           <TextField
          id="standard-multiline-static"
          label="Experience"
          multiline
          rows={4}
          variant="standard"
          name='desc'
          onChange={handleValues}
          value={values.desc}
          style={{width:"80%"}}
        />
           </div>
           
             <div>
                <label htmlFor='from' style={{paddingBottom:'10px'}}>Visited during:</label>
                <input id='from' type="date" name='visitedDate'onChange={handleValues} value={values.visitedDate} style={{marginLeft:"10px"}}></input>
             </div>
           <div>
            <label htmlFor='img'><AddCircleOutlineIcon className='up-addIcon' style={{fontSize:"50px",cursor:"pointer"}}></AddCircleOutlineIcon>Add Image</label>
            <input id="img" type="file"  name="upload_images" onChange={handleFile} style={{display:'none'}} multiple></input><br />
            {file && <TextField id="standard-basic" variant="standard"  value={file.name}/>}
           </div>
          
            <button type="submit" className = "up-button" onClick={handleSubmit}>Upload</button>
            </form>  
        </>
    );
}

export default Addblog;