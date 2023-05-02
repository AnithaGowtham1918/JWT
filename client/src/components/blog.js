import React, { useEffect, useState } from 'react';
import './blog.css';
import Avatar from '@mui/material/Avatar';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Image from './image';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import {addBlog, deleteBlog} from '../store/action/newblog.js';
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
function Blog(props) {
    const  PF = "http://localhost:4000/images/";
     var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
    const [key,setKey]=useState(0);
    const dispatch=useDispatch();
    const blog=useSelector((data)=>
        data.blogdata.blog,
        );
    console.log(blog);
    const userData= useSelector((data)=>
data.loginuser.user,
);
console.log(userData);
const id=userData._id;
    const handleLike=async(postId)=>{
        try{
            await axios.put(`http://localhost:4000/blog/addlike/${postId}`,{id});
            setKey(key=>key+1);
        }catch(error){

        }
       
    }
      const handleUnLike=async(postId)=>{
        try{
            await axios.put(`http://localhost:4000/blog/unlike/${postId}`,{id});
            setKey(key=>key+1);
        }catch(error){

        }
       
    }
    useEffect(()=>{
      const  fetch=async()=>{
            await axios.get("http://localhost:4000/blog/addBlog").then((res,err)=>{
                try {
                    dispatch(addBlog(res.data)); 
                } catch (err) {
                    console.log(err.message);
                }
            })
        }
        fetch();
     
    },
    [key,dispatch]);
   const handleDelete =async(id,index)=>
    {
        window.alert("do you really want to delete");
      await axios.delete(`http://localhost:4000/blog/deleteblog/${id}`);
      //dispatch(deleteBlog(id,index));
      setKey(key=>key+1);
    }
   
    return (
        <>
      
           {blog.map((data,index)=>{ 
               return <div className='blog-main'>
                <div className='blog-top'>
                    <div className='btop-left'>
                   {data.userProfilePic &&<Avatar className="blog-avatar" alt="Cindy Baker" src={PF+data.userProfilePic}  style={{width:80,height:80,marginRight:20}}/>}
                    {!data.userProfilePic &&<Avatar className="blog-avatar" alt="Cindy Baker" src="/static/images/avatar/3.jpg"  style={{width:80,height:80,marginRight:20}}/>}
                     <div className='btop-name'>
                     <div><h2>{data.postUserName}</h2></div>
                     <div>{new Date(data.createdAt).toDateString()}</div>
                     </div>
                     </div>
                    <div style={{display:"flex"}} className='blog-button'>
                      {data.postUserName===userData.userName && <Button style={{color:"#1e114a"}} onClick={()=>handleDelete(data._id,index)}><DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon></Button>}
                      
                    {data.postUserName===userData.userName && <Link to={`/postupdate/${data._id}`}><Button style={{color:"#1e114a"}}><ModeEditOutlineOutlinedIcon></ModeEditOutlineOutlinedIcon></Button></Link>}
    
                    </div>
                </div>
                <Image image={data.image}></Image>  
              <div className='blog-content'key={index} >
              <Link style={{textDecoration:"none",color:"#1e114a",display:"flex"}} to={`/single/${data._id}`}><FmdGoodRoundedIcon style={{width:"50",height:"50"}}></FmdGoodRoundedIcon><h2>{data.place}</h2></Link>
              <div>Visited during:{monthNames[new Date(data.visitedDate).getMonth()]}</div>
              </div>                     
              <div className='blog-comments'>
                  {data.likes.includes(userData._id)  ? <Button onClick={()=>handleUnLike(data._id)}><FavoriteRoundedIcon style={{fill:"red"}}></FavoriteRoundedIcon></Button> :<Button onClick={()=>handleLike(data._id)}><FavoriteBorderOutlinedIcon style={{color:"black"}}></FavoriteBorderOutlinedIcon></Button>}
                  {data.likes.length>0 && <div>{data.likes.length}likes</div>}
              </div>
              </div> 
              
           })
            
           }
        </>
    );
}

export default Blog;