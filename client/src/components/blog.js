import React from 'react';
import './blog.css';
import Avatar from '@mui/material/Avatar';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Button from '@mui/material/Button';
//import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
//import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from './image';
function Blog(props) {
    return (
        <>
        <div className='blog-main'>
        <div className='blog-top'>
            <div className='btop-left'>
             <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"  style={{width:80,height:80,marginRight:20}}/>
             <h2>UserNAme</h2>
             </div>
            <div>
               <Button style={{color:"#1e114a"}}> <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon></Button>
            </div>
        </div>
         
            <Image></Image>            
            <div className='blog-content'>
                Blog content
            </div>                     
            <div className='blog-comments'>
                <li><FavoriteBorderOutlinedIcon /></li>
            </div>
            <div>Created time</div>
        
        </div>
        </>
    );
}

export default Blog;