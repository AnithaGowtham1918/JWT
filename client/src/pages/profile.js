import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Navbar from '../components/navbar';
import { useDispatch,useSelector } from 'react-redux';
import {personalBlog} from '../store/action/newblog.js';
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import './profile.css';
import PersonalPost from '../components/personalpost';
import Update from './updateuser';
function Profile(props) {
    const PF ="http://localhost:4000/images/";
    const userData= useSelector((data)=>
    data.loginuser.user,
    );
    console.log(userData);
    const [post,setPost] = useState([]);
    console.log(post);
   useEffect(()=>{
    const fetch =async()=>{
     const response = await axios.get(`http://localhost:4000/blog/specific/${userData._id}`);
     setPost(response.data);
     console.log(response.data);
    }
    fetch();
   },[userData]);
   const [flag,setFlag]=useState(false);
    return (
        <>
        <Navbar></Navbar>
         <div className='profile-main'>
            <div className='profile-top'>
            {userData.profilePicture &&<Avatar sx={{ width: 150, height: 150 }} src ={PF +userData.profilePicture}>M</Avatar>}
        {!userData.profilePicture &&<Avatar sx={{ width: 150, height: 150 }}>M</Avatar>}
            <div className='profile-val'> 
            <div style={{paddingRight:"30px",paddingTop:"30px"}}><h2>{userData.userName}</h2></div></div>
           {post && <div>Number of posts {post.length}</div>} 
         </div>
            
     {!flag &&<Button className="button-update" style={{backgroundColor:"#e4eff0",color:"black"}} variant="contained" 
     onClick={()=>setFlag(!flag)}>Update</Button>}
     {flag && <Update id={userData._id}></Update>}
        <hr></hr>
        <div style={{display:"flex",alignItems:"center",flexWrap:"wrap"}}><PersonalPost personal ={post} userData={userData}></PersonalPost></div>
        </div>
        </>
    );
}

export default Profile;