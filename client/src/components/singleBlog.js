import React, { useEffect, useState } from 'react';
import Image from './image';
import Navbar from './navbar';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import "./singleBlog.css";
function SingleBlog(props) {
    let {id}=useParams();
    const history = useNavigate();
    const userData= useSelector((data)=>
    data.loginuser.user,
    );
    const [value,setValue]=useState([]);
    const [key,setKey] = useState(0);
    console.log(value);
    console.log(id);
    useEffect(()=>{
        const data =async()=>{
            try{
                const response = await axios.get(`http://localhost:4000/blog/${id}`);
                setValue(response.data);
                console.log(response.data);
            }
            catch(error){
                console.log(error)
                    
                }
            }
        data();
    },[id]);
    const handleDelete=async(id)=>{
        window.alert("Do you really want to delete?");
        await axios.delete(`http://localhost:4000/blog/deleteblog/${id}`);
        history("/home");

    }

    var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
    return (
        <>
       <Navbar></Navbar>
        <div className='single-top'>
            <div className='single-right'>
            <div>Posted By:<span>{value.postUserName}</span></div>
            <div>Loction:<span>{value.place}</span></div>
            <div>Visted during:<span>{monthNames[new Date(value.visitedDate).getMonth()]}</span></div>
            {value.likes && <div>Number of likes:<span> {value.likes.length}</span></div>} 
            </div>
            <div className='single-left'>
            {value.postUserName===userData.userName && 
            <Button style={{color:"#1e114a"}} onClick={()=>handleDelete(value._id)}>
                <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon></Button>}
                      
         {value.postUserName===userData.userName && 
         <Link to={`/postupdate/${value._id}`}><Button style={{color:"#1e114a"}}>
        <ModeEditOutlineOutlinedIcon></ModeEditOutlineOutlinedIcon></Button></Link>}
            </div>
        </div>
        <div className='single-Middle'>
            <Image image={value.image}></Image>
        </div>
        <div className='single-Bottom'>
            <div><h3>Description About the post:</h3></div>
            <div><p>{value.desc}</p></div>
            </div>
             
            
        </>
    );
}

export default SingleBlog;