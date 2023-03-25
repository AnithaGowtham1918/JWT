import React, { useEffect } from 'react';
import './blog.css';
import Avatar from '@mui/material/Avatar';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Button from '@mui/material/Button';
//import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
//import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from './image';
import {addBlog} from '../store/action/newblog.js';
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';
function Blog(props) {
    const dispatch=useDispatch();
    const blog=useSelector((data)=>
        data.blog,
        );
        //console.log(blog);
    useEffect(()=>{
        axios.get("http://localhost:4000/blog/addBlog").then((res,err)=>{
            try {
                dispatch(addBlog(res.data));
            } catch (err) {
                console.log(err.message);
            }
        })
    },[])
    return (
        <>
      
           {blog.map((data,index)=>{ 
               return <div className='blog-main'>
                <div className='blog-top'>
                    <div className='btop-left'>
                        
                     <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"  style={{width:80,height:80,marginRight:20}}/>
                     <h2>UserNAme</h2>
                     </div>
                    <div>
                       <Button style={{color:"#1e114a"}}> <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon></Button>
                    </div>
                </div>
                <p>{index+1}</p>
                <Image></Image>  
              <div className='blog-content'key={index} >
                  {data.place}
              </div>                     
              <div className='blog-comments'>
                  <li><FavoriteBorderOutlinedIcon /></li>
              </div>
              <div>Created time</div>
              </div> 
              
           })
            
           }
        
       
        </>
    );
}

export default Blog;