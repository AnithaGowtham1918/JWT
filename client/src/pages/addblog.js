import React, { useState } from 'react';
import Navbar from '../components/navbar';
import axios from "axios";
import '../components/blog.css';
import "./addblog.css";
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
function Addblog(props) {
const userData= useSelector((data)=>
data.loginuser.user,
)
console.log(userData)
const[values,setValues]=useState({
        place:"",
        visitedDate:"",
        userId:"",
        image:null,
        desc:""
    });
const[file,setFile]= useState(null);
console.log (file);
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
  async function  handleSubmit(event){
    event.preventDefault();
    if(file){
        console.log(file.name);
        const data = new FormData();
        const fileName = Date.now() + file.name;
        data.append("name",fileName);
        data.append("file",file);
        values.image=fileName;
        try {
            axios.post("http://localhost:4000/upload",data)
        } catch (error) {
          console.log(error);  
        }

    }
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
        })};
   
    return (
        <>
<Navbar></Navbar>

          <form className='up-main'>
           {file && <img className='up-img' src={URL.createObjectURL(file)} alt=' to upload'></img>}
          
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
            <input id="img" type="file"  name="upload_images" onChange={(e)=>setFile(e.target.files[0])} value={values.image} style={{display:'none'}}></input><br />
            {file && <TextField id="standard-basic" variant="standard"  value={file.name}/>}
           </div>
          
            <button type="submit" className = "up-button" onClick={handleSubmit}>Upload</button>
            </form>  
        </>
    );
}

export default Addblog;