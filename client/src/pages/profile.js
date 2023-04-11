import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Navbar from '../components/navbar';
//import { Link } from 'react-router-dom';
function Profile(props) {
   let {id}=useParams();
    const [values,setValues] =useState({
        Customer_name:"",
        Customer_email:""
    });
    console.log(values);
    const addCustomer=(data)=>{
        const Customer_name=data.userName;
        const Customer_email=data.userEmail;
         setValues(()=>{
            return {
               Customer_name,
               Customer_email,
            }
        })
      
    }
    useEffect(()=>{
        const data=async()=>{
            const response= await axios.get(`http://localhost:4000/user/${id}`);
           console.log(response.data);
           addCustomer(response.data);
        }
           data();
           
       
    },[])
        
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:5000/api/update/${id}`,values)
        setValues({
           Customer_name:"",
           Customer_age:"",
           Customer_address:"",
           Customer_aadharNo:"",
           Customer_mobileNo:""
   
           })

    }
    return (
        <>
        <Navbar></Navbar>
         <div className='form-main'>
         <Avatar sx={{ width: 100, height: 100 }}>M</Avatar>
        <form> 
            <div><span>Name:</span>
         <TextField id="outlined-basic" 
         label="" 
         variant="outlined"
        value={values.Customer_name}
        onChange={(e)=>{
            setValues({...values,Customer_name:e.target.value})}}/>
         </div>
         <div><span>Email:</span>
         <TextField id="outlined-basic" label="" variant="outlined" value={values.Customer_email}
          onChange={(e)=>{
            setValues({...values,Customer_email:e.target.value})
          }} />
         </div>
      <Button style={{backgroundColor:"#e4eff0",color:"black"}} variant="contained" onClick={handleSubmit}>Update</Button>
        </form>
        <hr></hr>
        </div>  
            
        </>
    );
}

export default Profile;