import React, { useState } from 'react';
import './register.css';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Register(props) {
    const history = useNavigate();
    const [userData,setUserData]=useState({
        userName:"",
        userEmail:"",
        isAdmin:"",
        userPassword:"",
    });
    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setUserData((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }
    console.log(userData)
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:4000/api/registerdata",userData).then(res=>
        history('/login')).catch((error)=>{if(error){
            console.log(error);
        }});
        setUserData({
            userName:"",
            userEmail:"",
            userMobile:"",
            userPassword:"",
        })
            
        }
    
    return (
        <>
            <form className='form-reg'>
                <div className='form-in'>
                <label for="name">Name:</label><br></br>
                <input id="name"
                type="text"
                name="userName"
                placeholder="Enter your name"
                value={userData.userName}
                onChange={handleChange}></input><br />
                 <label for="email">Email:</label><br></br>
                <input id="email"
                type="text"
                name="userEmail"
                placeholder="Enter your email"
                value={userData.userEmail}
                onChange={handleChange}></input><br />
                 <label for="password">Password:</label><br></br>
                <input id="password"
                type="text"
                name="userPassword"
                placeholder="Enter your password"
                value={userData.userPassword}
                onChange={handleChange}></input><br />
                 <label for="name">isAdmin</label><br></br>
                <input id="name"
                type="checkbox"
                name="isAdmin"
                value={userData.isAdmin}
                onChange={handleChange}></input><br />
                <Button variant="contained" style={{backgroundColor:'#3ff260'}} onClick={handleSubmit}>Register</Button>
                <div><h4>Already have an account?</h4>
                <Button variant='contained' style={{backgroundColor:'#3ff260'}}><a href='/login'>Login</a></Button></div>
                </div>
            </form>
        </>
    );
}

export default Register;