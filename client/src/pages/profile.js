import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Navbar from '../components/navbar';
import { useDispatch,useSelector } from 'react-redux';
import {personalBlog} from '../store/action/newblog.js';
//import { Link } from 'react-router-dom';
import './profile.css';
import PersonalPost from '../components/personalpost';

function Profile(props) {
    const dispatch=useDispatch();
    const userData= useSelector((data)=>
    data.loginuser.user,
    );
    const blog= useSelector((data)=>
    data.blogdata.blog,
   );
   console.log(blog);
   const post = blog.filter((data,index)=>{
    return data.postUserName===userData.userName;
   });
   console.log(post);
    return (
        <>
        <Navbar></Navbar>
         <div className='profile-main'>
            <div className='profile-top'>
            <Avatar sx={{ width: 150, height: 150 }}>M</Avatar>
            <div className='profile-val'> 
            <div style={{paddingRight:"30px",paddingTop:"30px"}}><h2>{userData.userName}</h2></div></div>
           
         </div>
            
      <Button className="button-update" style={{backgroundColor:"#e4eff0",color:"black"}} variant="contained">Update</Button>
        <hr></hr>
        <div style={{display:"flex",alignItems:"center",flexWrap:"wrap"}}><PersonalPost personal={post}></PersonalPost></div>
        </div>
        </>
    );
}

export default Profile;