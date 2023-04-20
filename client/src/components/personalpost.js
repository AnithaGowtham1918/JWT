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
function PersonalPost(props) {
    const [colors,setColorValue]=useState("white");
    const [key,setKey] =useState(0);
    const [ke,setKe]=useState(false);
    const handleLike=()=>{
     setKe(!ke);
     if(ke){
        setColorValue("red");
         }
         else{
            setColorValue("white");
         }
    }
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
      
           {props.personal.map((data,index)=>{ 
               return <div className='personalblog-main'>
                <div className='personalblog-top'>
                    <div className='personalbtop-left'>
                        
                     <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"  style={{width:80,height:80,marginRight:20}}/>
                     <div className='personalbtop-name'>
                     <div><h2>{data.postUserName}</h2></div>
                     <div>{new Date(data.createdAt).toDateString()}</div>
                     </div>
                     </div>
                    <div style={{display:"flex"}}>
                       <Button style={{color:"#1e114a"}} onClick={()=>handleDelete(data._id)}><DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon></Button>
                       <Link to={`/postupdate/${data._id}`}><Button style={{color:"#1e114a"}}><ModeEditOutlineOutlinedIcon></ModeEditOutlineOutlinedIcon></Button></Link>
                    </div>
                </div>
                <Image image={data.image}></Image>  
              <div className='personalblog-content'key={index} >
                  {data.place}
                 <Link to={`/single/${data._id}`}><Button>click to view in detial</Button></Link> 
              </div>                     
              <div className='personalblog-comments'>
                  <Button onClick={handleLike}><FavoriteIcon  style={{fill:`${colors}`}}></FavoriteIcon></Button>
              </div>
              <div>Created time:{new Date(data.visitedDate).toDateString()}</div>
              <div>{new Date(data.visitedDate).getTime()}</div>
              <div>Created Month:{monthNames[new Date(data.visitedDate).getMonth()]}</div>
              </div> 
              
           })
            
           }
        
       
        </>
    );
}

export default PersonalPost;