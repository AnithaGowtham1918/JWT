import React, { useEffect, useState } from 'react';
import './personalpost.css';
import Avatar from '@mui/material/Avatar';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Image from './image';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import {personalBlog} from '../store/action/newblog.js';
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
function PersonalPost(props) {
    const [colors,setColorValue]=useState("white");
    const [key,setKey] =useState(0);
    const [ke,setKe]=useState(false);
   const handleDelete =async(id)=>
    {
        window.alert("do you really want to delete");
      await axios.delete(`http://localhost:4000/blog/deleteblog/${id}`);
       setKey(key=>key+1);

    }
    useEffect(()=>{

    },[key]);
    var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
    return (
        <>
      
           {props.personal.map((data,index)=>{ 
               return <div className='personalblog-main'>
                <div className='personalblog-top'>
                    <div className='personalbtop-left'>
                        
                     <Avatar className="per-avatar" alt="Cindy Baker" src="/static/images/avatar/3.jpg"  style={{width:80,height:80,marginRight:20}}/>
                     <div className='personalbtop-name'>
                     <div><h2>{data.postUserName}</h2></div>
                     <div>{new Date(data.createdAt).toDateString()}</div>
                     </div>
                     </div>
                     <div style={{display:"flex"}} className='blog-button'>
                      {data.postUserName===props.userData.userName && <Button style={{color:"#1e114a"}} onClick={()=>handleDelete(data._id)}><DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon></Button>}
                      
                    {data.postUserName===props.userData.userName && <Link to={`/postupdate/${data._id}`}><Button style={{color:"#1e114a"}}><ModeEditOutlineOutlinedIcon></ModeEditOutlineOutlinedIcon></Button></Link>}
    
                    </div>
                </div>
                <Image image={data.image}></Image>  
                <div className='blog-content'key={index} >
              <Link style={{textDecoration:"none",color:"#1e114a",display:"flex"}} to={`/single/${data._id}`}><FmdGoodRoundedIcon style={{width:"50",height:"50"}}></FmdGoodRoundedIcon><h2>{data.place}</h2></Link>
              </div>                     
              <div className='personalblog-comments'>
                  {data.likes.length>0 && <div>{data.likes.length}likes</div>}
              </div>
              </div> 
              
           })
            
           }
        
       
        </>
    );
}

export default PersonalPost;