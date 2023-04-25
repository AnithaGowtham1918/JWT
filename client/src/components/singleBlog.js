import React, { useEffect, useState } from 'react';
import Image from './image';
import Navbar from './navbar';
import axios from 'axios';
import { useParams } from 'react-router';
function SingleBlog(props) {
    let {id}=useParams();
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
    var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
    return (
        <>
       <Navbar></Navbar>
        <div className='single-top'>
            <div>Posted By:{value.postUserName}</div>
            <div>Posted At:{new Date(value.createdAt).toDateString()}</div>
            <div>Loction:{value.place}</div>
            <div>Visted during:{monthNames[new Date(value.visitedDate).getMonth()]}</div>
            {value.likes && <div>Number of likes: {value.likes.length}</div>} 
        </div>
        <div className='single-Middle'>
            <Image image={value.image}></Image>
        </div>
        <div className='single-Bottom'>
            <h3>Description About the post:</h3>
            <p>{value.desc}</p>
            </div>
             
            
        </>
    );
}

export default SingleBlog;