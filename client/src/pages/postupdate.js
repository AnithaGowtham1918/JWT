import React, { useEffect, useState } from 'react';
import Image from '../components/image';
import Navbar from '../components/navbar';
import axios from 'axios';
import { useParams } from 'react-router';
import './postupdate.css';
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { useNavigate } from 'react-router';
function Postupdate(props) {
    const PF= "http://localhost:4000/images/";
const history=useNavigate();
    const [flag,setFlag]=useState(false);
    const {id}= useParams();
    const [key,setKey]=useState(1);
    const [file,setFile]=useState(null);
    console.log(file);
    const[values,setValues]=useState({
        place:"",
        visitedDate:"",
        userId:"",
        image:null,
        desc:""
    });
    const date =new Date(values.visitedDate).toLocaleDateString();
     const Fetch=async()=>{
        const res= await axios.get(`http://localhost:4000/blog/${id}`);
        console.log(res);
        setValues(res.data);
     }
     console.log(values);
    useEffect(()=>{
        Fetch();
    },[id,key])
    const userData= useSelector((data)=>
data.loginuser.user,
);
 const handleSubmit=async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:4000/blog/${values._id}`,values).then((res)=>{
        setValues(res.data);
        window.alert("updated successfully");
        history("/home");
        
    })
    setKey(old=>old+1);
 }
console.log(userData)
    return (
        <>
    <Navbar></Navbar>
    <form className='postup-main'>
        <div>
       {!file &&<img className='postup-img'  src={PF+values.image} alt='to upload'></img>} 
        {file &&<img className='postup-img'  src={URL.createObjectURL(file)} alt='to upload'></img>}
           <div>
            <label htmlFor='img'><AddCircleOutlineIcon className='postup-addIcon' style={{fontSize:"50px",cursor:"pointer"}}></AddCircleOutlineIcon>Add Image</label>
            <input id="img" type="file"  name="upload_images"  style={{display:'none'}} onChange={(e)=>setFile(e.target.files[0])}></input><br />
           </div>
        </div>
            <div className='postup-div'>
               <div><label>Place:</label></div> 
           <div> <TextField id="standard-basic" variant="standard" name="place" value={values.place} autoFocus={true}
           onChange={(e)=>setValues({...values,place:e.target.value})} /></div>
            </div>
            <div>
            <label>Description:</label>
           <TextField
          id="standard-multiline-static"
          multiline
          rows={4}
          variant="standard"
          name='desc'
          value={values.desc}
          style={{width:"60%"}}
          onChange={(e)=>setValues({...values,desc:e.target.value})}
        />
           </div>
             <div>
                <label htmlFor='from' style={{paddingBottom:'10px'}}>Visited during:</label>
                <div><input id='from' type="text" name='visitedDate' value={date} style={{width:"20%"}}></input>
                <Button style={{color:"#1e114a"}} onClick={()=>setFlag(!flag)}><ModeEditOutlineOutlinedIcon></ModeEditOutlineOutlinedIcon></Button></div>
               {flag &&<div style={{display:"flex",flexDirection:"column"}}><label style={{paddingBottom:"10px"}}>New Visited Date:</label><input id='from' type="date" name='visitedDate'onChange={(e)=>setValues({...values,visitedDate:e.target.value})} value={values.visitedDate} style={{width:"20%"}}></input>
               </div> }
    
             </div>
             <div >
             <button className = "postup-button" type="submit" onClick={handleSubmit}>Update</button>
             </div>
            </form>  
        </>
    );
}

export default Postupdate;