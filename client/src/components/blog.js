import React, { useEffect, useState } from 'react';
import './blog.css';
import Avatar from '@mui/material/Avatar';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Image from './image';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import {addBlog} from '../store/action/newblog.js';
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';
function Blog(props) {
    const [key,setKey]=useState(0);
    const dispatch=useDispatch();
    const blog=useSelector((data)=>
        data.blogdata.blog,
        );
    console.log(blog);
    const userData = useSelector((state)=>
        state.loginuser.user,
    );
    console.log({userData:userData.userName});
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
    return (
        <>
      
           {blog.map((data,index)=>{ 
               return <div className='blog-main'>
                <div className='blog-top'>
                    <div className='btop-left'>
                        
                     <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"  style={{width:80,height:80,marginRight:20}}/>
                     <h2>userName</h2>
                     </div>
                    <div style={{display:"flex"}}>
                       <Button style={{color:"#1e114a"}} onClick={()=>handleDelete(data._id)}><DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon></Button>
                       <Link to={`/postupdate/${data._id}`}><Button style={{color:"#1e114a"}}><ModeEditOutlineOutlinedIcon></ModeEditOutlineOutlinedIcon></Button></Link>
                    </div>
                </div>
                <p>{index+1}</p>
                <Image></Image>  
              <div className='blog-content'key={index} >
                  {data.place}
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32</p>
                 <Link to="/single"><Button>click to view in detial</Button></Link> 
              </div>                     
              <div className='blog-comments'>
                  <li><FavoriteBorderOutlinedIcon /></li>
              </div>
              <div>Created time:{new Date(data.visitedDate).toDateString()}</div>
              </div> 
              
           })
            
           }
        
       
        </>
    );
}

export default Blog;