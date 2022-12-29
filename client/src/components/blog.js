import React from 'react';
import './blog.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
//import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
//import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from './image';
function Blog(props) {
    return (
        <>
        <div className='blog-main'>
        <div className='blog-top'>
            <div>
             <Stack direction="row" spacing={2}>
             <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" /><h1>UserNAme</h1>
             </Stack></div>
            <div>
                <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon>
            </div>
        </div>
            <div className='blog-content'>
                Blog content
            </div>
            <Image></Image>
            <div className='blog-comments'>
                <li><FavoriteBorderOutlinedIcon /></li>
            </div>
            <div>Created time</div>
        
        </div>
        </>
    );
}

export default Blog;