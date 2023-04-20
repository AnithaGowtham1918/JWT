import React, { useEffect, useState } from 'react';
import './blog.css';
import Avatar from '@mui/material/Avatar';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Image from './image';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import {addBlog} from '../store/action/newblog.js';
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
function Blog(props) {
    const [key,setKey]=useState(0);
    const dispatch=useDispatch();
    const blog=useSelector((data)=>
        data.blogdata.blog,
        );
    console.log(blog);
    const userData= useSelector((data)=>
data.loginuser.user,
)
    const [colors,setColorValue]=useState("white")
    const [ke,setKe]=useState(false);
    const handleLike=async()=>{
     setKe(!ke);
     if(ke){
        setColorValue("red");
         }
         else{
            setColorValue("white");
         }
        await axios.post("http://localhost/blog/addlike",userData._id);
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
   const handleDelete =async(id)=>
    {
        window.alert("do you really want to delete");
      await axios.delete(`http://localhost:4000/blog/deleteblog/${id}`);
       setKey(key=>key+1);

    }
    var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
    return (
        <>
      
           {blog.map((data,index)=>{ 
               return <div className='blog-main'>
                <div className='blog-top'>
                    <div className='btop-left'>
                        
                     <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"  style={{width:80,height:80,marginRight:20}}/>
                     <div className='btop-name'>
                     <div><h2>{data.postUserName}</h2></div>
                     <div>{new Date(data.createdAt).toDateString()}</div>
                     </div>
                     </div>
                    <div style={{display:"flex"}}>
                      {data.postUserName===userData.userName && <Button style={{color:"#1e114a"}} onClick={()=>handleDelete(data._id)}><DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon></Button>}
                      
                    {data.postUserName===userData.userName && <Link to={`/postupdate/${data._id}`}><Button style={{color:"#1e114a"}}><ModeEditOutlineOutlinedIcon></ModeEditOutlineOutlinedIcon></Button></Link>}
    
                    </div>
                </div>
                <Image image={data.image}></Image>  
              <div className='blog-content'key={index} >
              <Link to={`/single/${data._id}`}><h3>Place:{data.place}</h3></Link>
              </div>                     
              <div>Visited During:{monthNames[new Date(data.visitedDate).getMonth()]}</div>
              <div className='blog-comments'>
                  {!ke &&<Button onClick={handleLike}><FavoriteBorderOutlinedIcon style={{color:"black"}}></FavoriteBorderOutlinedIcon></Button>}
                  {ke &&<Button onClick={handleLike}><FavoriteRoundedIcon style={{fill:"red"}}></FavoriteRoundedIcon></Button>}
              </div>
              </div> 
              
           })
            
           }
        
       
        </>
    );
}

export default Blog;