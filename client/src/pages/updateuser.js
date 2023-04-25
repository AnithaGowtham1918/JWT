import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./updateuser.css";
import { Avatar } from '@mui/material';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
function Update(props) {
   let {id}=useParams();
   const  PF = "http://localhost:4000/images/";
   const [file,setFile]=useState(null);
    const [values,setValues] =useState({
        userName:"",
        userEmail:"",
        profilePicture:null,
        userPassword:"",
    });
    console.log(values);
    const addCustomer=(data)=>{
        const userName=data.userName;
        const userEmail=data.userEmail;
        const userPassword=data.userPassword;
        const profilePicture=data.profilePicture;
        
         setValues(()=>{
            return {
               userName,
               userEmail,
               profilePicture,
               userPassword,
               
            }
        })
      
    }
    useEffect(()=>{
        const data=async()=>{
            const response= await axios.get(`http://localhost:4000/user/${id}`);
           console.log(response.data);
           addCustomer(response.data);}
           data();
           
       
    },[])
        
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(file){
            const data = new FormData();
            const fileName = Date.now() +file.name;
            data.append("name",fileName);
            data.append("file",file);
            values.profilePicture=fileName;
        }
        axios.put(`http://localhost:4000/user/${id}`,values)
        setValues({
                userName:"",
               userEmail:"",
               profilePicture:null,
               userPassword:"",
   
           })

    }
    return (
        <>
         <div className='form-updateuser'>
        <form className='form-updatemain'> 
            <div className='update-pic'>
            {values.profilePicture && <Avatar className="update-avatar" src={PF+values.profilePicture}></Avatar> } 
           {!values.profilePicture && !file &&<Avatar className="update-avatar" style={{fontSize:"100px"}}><label htmlFor='img'>+</label><input id="img" type='file' name="profilePicture" style={{display:"none"}}
           onChange={(e)=>setFile(e.target.files[0])}
           value={values.profilePicture}></input></Avatar>}
           {file && <Avatar className="update-avatar" src={URL.createObjectURL(file)}></Avatar>} 
           {file && <div className='after-file'><label htmlFor='img'><ModeEditOutlineOutlinedIcon></ModeEditOutlineOutlinedIcon></label>
           <input id="img" type='file' name="profilePicture"
           onChange={(e)=>setFile(e.target.files[0])}
           value={values.profilePicture} style={{display:"none"}}></input>
           <button  className="button-default" onClick={(e)=>setFile(null)}>Default</button></div>}
            </div>
            <div style={{display:"flex",flexDirection:"column"}}><span>Name:</span>
         <TextField id="outlined-basic" 
         className='update-textfield'
         label="" 
         variant="outlined"
        value={values.userName}
        onChange={(e)=>{
            setValues({...values,userName:e.target.value})}}/>
         </div>
         <div><span style={{display:"flex",flexDirection:"column"}}>Email:</span>
         <TextField 
          className='update-textfield'id="outlined-basic" label="" variant="outlined" value={values.userEmail}
          onChange={(e)=>{
            setValues({...values,userEmail:e.target.value})
          }} />
         </div>
      <div className='button-up'>
      <Button style={{backgroundColor:"#2b2240",color:"wheat"}} variant="contained" onClick={handleSubmit}>Update</Button>
        </div>
        </form>
        </div>  
            
        </>
    );
}

export default Update;