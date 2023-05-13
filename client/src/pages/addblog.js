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
  const url ="https://memoriesspotapi.onrender.com";
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
    const[file,setFile]= useState(null);
    const handleFile=(e)=>{
       // const img=e.target.files[0];
        setFile(
          e.target.files[0]
        );
      }
        
        
    console.log(file);
  async function  handleSubmit(event){
    event.preventDefault();
    //const imgarr=[];
    // if(file.length>1){
    //     const data = new FormData();
    //    for(let i=0;i<file.length;i++){
    //    const fileName = Date.now()+file[i].name;
    //    data.append("file",file[i]);
    //     data.append("name",fileName);
    //     imgarr.push(fileName);
    //      }
    //      try {
    //       console.log(data.body);
    //         await axios.post("http://localhost:4000/uploadmultiple",data)
    //      } catch (error) {
    //        console.log(error);  
    //      }
    //      values.image=imgarr;
    // }
    // else{
        const singledata= new FormData();
        const singlefileName = Date.now()+file.name;
        console.log(singlefileName);
         singledata.append("name",singlefileName);
         singledata.append("file",file);
         try {
          //const uri="http://localhost:4000";
           await axios.post(`${url}/upload`,singledata);
         } catch ({error}) {
            console.log(error);
         }
         values.image[0]=singlefileName;
   // }
     values.userId=userData._id;
     console.log(values);
    
    try{
         await axios.post(`${url}/blog/postblog`,values).then(window.alert("posted successfully"));
     }
     catch(error){
                 console.log(error);
             }
         setValues({
            place:"",
            visitedDate:"",
             desc:"",
             image:[]
    });
    setFile(null);
};
   
    return (
        <>
<Navbar></Navbar>
            {file &&<PreviewImage imgdata={file}></PreviewImage>}
          <form className='up-main' method='post'>
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
            <label htmlFor='file'><AddCircleOutlineIcon className='up-addIcon' style={{fontSize:"50px",cursor:"pointer"}}></AddCircleOutlineIcon>Add Image</label>
            <input id="file" type="file"  name="file" onChange={handleFile} style={{display:'none'}} value={values.image}></input><br />
            {file && <TextField id="standard-basic" variant="standard"  value={file.name}/>}
           </div>
           
          
            <button type="submit" className = "up-button" onClick={handleSubmit}>Upload</button>
            </form>  
        </>
    );
}

export default Addblog;