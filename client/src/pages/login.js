import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from "react-redux";
import { LoginFailure, LoginStart, LoginSuccess} from "../store/action/user";
import './login.css';
function Login(props) {
    const url ="https://memoriesspotapi.onrender.com";
    const history = useNavigate();
    const dispatch = useDispatch();
    const[loginData,setLoginData]=useState({
        userEmail:"",
        userPassword:"",
    });
    let passwordError="";
    console.log(passwordError);
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
            await axios.post(`${url}/api/logindata`,loginData).then((response)=>{
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
            else if(error.response.data.message==="wrong password"){
                //passwordError=error.response.data.message;
                window.alert(error.response.data.message);
                setLoginData({userPassword:""});
               // history("/changepassword");
            }  
       console.log(error.response.data);
        }
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
           <label htmlFor="password">Password:</label>
            <input type="password"
            name="userPassword"
            placeholder="Enter the password"
            onChange={handleChange}
            value={loginData.userPassword}></input>
           </div>
             <Button className='login-button' variant="contained" style={{backgroundColor:'#2b2240',color:"wheat"}} type="submit">
           Login
             </Button>
            
             </div>
             {/* <Button variant="contained" style={{backgroundColor:'#2b2240',color:"wheat",position:"relative",left:"35%"}}>
           Forget Password?
             </Button> */}
             <div className='lo-reg'>
                <div>Not an user?</div>
                <div><Link to="/"><button style={{backgroundColor:"#2b2240",color:"wheat"}}>Register</button></Link></div>
             </div>
        </form>
        </div>
    );
}

export default Login;