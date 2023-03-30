import React, { useState } from 'react';
import axios from 'axios';
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
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            //const uri="http://localhost:4000/api/logindata";
            await axios.post("http://localhost:4000/api/logindata",loginData).then((response)=>{
//console.log(error.data);
            if(response.data){
                window.alert("Logged in successfully");
                history("/home");
               }
           });} 
           catch(error){
            if(error.response.data.message==='Users not Found'){
                window.alert("Please register before login");
                history("/");
            }
            else{
                window.alert(error.response.data.message);
            }
                
       console.log(error.response.data);
        }
        setLoginData({
           userEmail:"",
             userPassword:""
         })
        
    }
    
    return (
    
            <>
        <form>
            <label htmlFor="email">Email:</label>
            <input type="email"
            name='userEmail'
            placeholder='Enter the email'
            onChange={handleChange}
            value={loginData.userEmail}></input><br />
            <label for="password">Password:</label>
            <input type="password"
            name="userPassword"
            placeholder="Enter the password"
            onChange={handleChange}
            value={loginData.userPassword}></input><br></br>
             <Button variant="contained" style={{backgroundColor:'#3ff260'}} onClick={handleSubmit}>
           Login
             </Button>
        </form>
        </>
    );
}

export default Login;