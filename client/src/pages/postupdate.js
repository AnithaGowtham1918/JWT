import React, { useEffect } from 'react';
import Image from '../components/image';
import Navbar from '../components/navbar';
import axios from 'axios';
import { useParams } from 'react-router';
function Postupdate(props) {
    const {id}= useParams();
    //console.log(id);
     const Fetch=async()=>{
       
        const res= await axios.get(`http://localhost:4000/blog/${id}`);
        console.log(res);
     }
    useEffect(()=>{
        Fetch();
    },[id])
    return (
        <>
    <Navbar></Navbar>
        <div className='single-top'>
            <div>Posted By:</div>
            <div>Posted At:</div>
            <div>Loction:</div>
            <div>Visted during:</div>
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

export default Postupdate;