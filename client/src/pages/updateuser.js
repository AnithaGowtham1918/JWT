import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState } from 'react';
import "./updateuser.css";
import { Avatar } from '@mui/material';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { useDispatch } from 'react-redux';
import { addUpdateData } from '../store/action/user';
function Update(props) {
   const  PF = "https://memoriesspotapi.onrender.com/images/";
   const url ="https://memoriesspotapi.onrender.com";
   const dispatch = useDispatch();
   const [file,setFile]=useState(null);
    const [values,setValues] =useState({
        userName:"",
        userEmail:"",
        profilePicture:null,
    });
    console.log(values);
    const addCustomer=(data)=>{
        const userName=data.userName;
        const userEmail=data.userEmail;
        const profilePicture=data.profilePicture;
         setValues(()=>{
            return {
               userName,
               userEmail,
               profilePicture,
            }
        })
      
    }
    useEffect(()=>{
        const data=async()=>{
             await axios.get(`${url}/user/${props.id}`).then(res=>{
                addCustomer(res.data);
                console.log(res.data);
             }).catch(error=>{
                console.log(error);
             });
          
           }
           data();
           
       
    },[])
        
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(file){
            const datas = new FormData();
            const fileName = Date.now() +file.name;
            datas.append("name",fileName);
           datas.append("file",file);
            values.profilePicture=fileName;
        
        try {
           await  axios.post(`${url}/upload`,datas);
           console.log(datas);
        } catch (error) {
          console.log(error);  
        }
        try {
            await axios.put(`${url}/blog/profilePic/${props.id}`,values);
        } catch (error) {
            console.log(error);
        }};
        const data={
            userName:values.userName,
        userEmail:values.userEmail,
        profilePicture:values.profilePicture,
        _id:props.id,
        }
       try{
        await axios.put(`${url}/user/${props.id}`,values);
        dispatch(addUpdateData(data));
       }
       catch(error){
        console.log(error);
       }
       window.alert("Updated successfully");

    }
    return (
        <>
         <div className='form-updateuser'>
        <form className='form-updatemain'> 
            <div className='update-pic'>
            {values.profilePicture && !file && <div><Avatar className="update-avatar" src={PF+values.profilePicture}></Avatar>
           <label htmlFor="img"><ModeEditOutlineOutlinedIcon></ModeEditOutlineOutlinedIcon></label>
            <input id="img" type='file' name="profilePicture"
           onChange={(e)=>setFile(e.target.files[0])} style={{display:"none"}}></input>
           </div>} 
           {!values.profilePicture && !file &&<Avatar className="update-avatar" style={{fontSize:"100px"}}><label htmlFor='img'>+</label><input id="img" type='file' name="profilePicture" style={{display:"none"}}
           onChange={(e)=>setFile(e.target.files[0])}
           ></input></Avatar>}
           {file && <Avatar className="update-avatar" src={URL.createObjectURL(file)}></Avatar>} 
           {file && <div className='after-file'><label htmlFor='img'><ModeEditOutlineOutlinedIcon></ModeEditOutlineOutlinedIcon></label>
           <input id="img" type='file' name="profilePicture"
           onChange={(e)=>setFile(e.target.files[0])} style={{display:"none"}}></input>
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
         {/* <div><span style={{display:"flex",flexDirection:"column"}}>New password:</span>
         <TextField 
          className='update-textfield'id="outlined-basic" label="" variant="outlined" value={values.userPassword}
          onChange={(e)=>{
            setValues({...values,userPassword:e.target.value})
          }} />
         </div> */}
      <div className='button-up'>
      <Button style={{backgroundColor:"#2b2240",color:"wheat"}} variant="contained" onClick={handleSubmit}>Update</Button>
        </div>
        </form>
        </div>  
            
        </>
    );
}

export default Update;