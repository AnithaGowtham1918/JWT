import axios from 'axios';
import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function Login(props) {
    const history = useNavigate();
    const[loginData,setLoginData]=useState({
        userEmail:"",
        userPassword:"",
    });
    //const [userName,setUserData]=useState("");
  
    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setLoginData((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })
    };
    console.log(loginData);
    const handleSubmit=async (e)=>{
        e.preventDefault();
       await axios.get("http://localhost:4000/api/logindata",loginData).then(response=>{
        history('/home')
      }).catch(error=>{
        window.alert(error.message);
      })
    }
    
    return (
    
            <>
        <form>
            <label htmlFor="email">Email:</label>
            <input type="email"
            name='userEmail'
            placeholder='Enter the email'
            onChange={handleChange}></input><br />
            <label for="password">Password:</label>
            <input type="password"
            name="userPassword"
            placeholder="Enter the password"
            onChange={handleChange}></input><br></br>
             <Button variant="contained" style={{backgroundColor:'#3ff260'}} onClick={handleSubmit}>
           Login
             </Button>
        </form>
        </>
    );
}

export default Login;