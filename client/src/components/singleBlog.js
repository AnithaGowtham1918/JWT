import React, { useEffect, useState } from 'react';
import Image from './image';
import Navbar from './navbar';
import axios from 'axios';
import { useParams } from 'react-router';
function SingleBlog(props) {
    let {id}=useParams();
    const [value,setValue]=useState([]);
    console.log(value);
    useEffect(()=>{
        const data =async()=>{
            const response = await axios.get(`http://localhost:4000/blog/${id}`);
            setValue(response.data);
        }
        data();
    },[id]);
    var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
    return (
        <>
    <Navbar></Navbar>
        <div className='single-top'>
            <div>Posted By:{value.userName}</div>
            <div>Posted At:{new Date(value.createdAt).toDateString}</div>
            <div>Loction:{value.place}</div>
            <div>Visted during:{monthNames[new Date(value.visitedDate).getMonth()]}</div>
        </div>
        <div className='single-Middle'>
            <Image></Image>
        </div>
        <div className='single-Bottom'>
            <h3>Description About the place:</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                 recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            
        </>
    );
}

export default SingleBlog;