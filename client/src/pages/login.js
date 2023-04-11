import React, { useState } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch} from "react-redux";
import { loginUser} from "../store/action/user";
function Login(props) {
    const history = useNavigate();
    const dispatch = useDispatch();
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
            await axios.post("http://localhost:4000/api/logindata",loginData).then((response)=>{
                dispatch(loginUser(response.data));
                console.log(response.data);
            if(response.data){
                window.alert("Logged in successfully");
                history(`/home/${response.data._id}`);
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