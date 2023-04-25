import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from "react-redux";
import { LoginFailure, LoginStart, LoginSuccess, loginUser} from "../store/action/user";
import './login.css';
function Login(props) {
    const history = useNavigate();
    const dispatch = useDispatch();
    const[loginData,setLoginData]=useState({
        userEmail:"",
        userPassword:"",
    });
    const userData= useSelector((data)=>
    data.loginuser,
    )
    console.log(userData);
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
        dispatch(LoginStart());
        try{
            await axios.post("http://localhost:4000/api/logindata",loginData).then((response)=>{
                dispatch(LoginSuccess(response.data));
                console.log(response.data);
           if(response.data){
               window.alert("Logged in successfully");
               history(`/home`);
             }
           });} 
       catch(error){
        dispatch(LoginFailure());
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
         });
        }
    return (
    
            <div className='login-main'>
        <form className='login-form' onSubmit={handleSubmit}>
            <div className='login-in'>
            <div>
            <label htmlFor="email">Email:</label>
            <input type="email"
            name='userEmail'
            placeholder='Enter the email'
            onChange={handleChange}
            value={loginData.userEmail}></input>
            </div>
           <div>
           <label for="password">Password:</label>
            <input type="password"
            name="userPassword"
            placeholder="Enter the password"
            onChange={handleChange}
            value={loginData.userPassword}></input><br></br>
           </div>
             <Button className='login-button' variant="contained" style={{backgroundColor:'#2b2240',color:"wheat"}} type="submit">
           Login
             </Button>
             </div>
             <div className='lo-reg'>
                <div>Not an user?</div>
                <div><Link to="/"><button style={{backgroundColor:"#2b2240",color:"wheat"}}>Register</button></Link></div>
             </div>
        </form>
        </div>
    );
}

export default Login;