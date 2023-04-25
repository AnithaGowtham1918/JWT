import React, { useState } from 'react';
import './register.css';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Image from '../Images/memory.jpg';
import MainLogo from '../components/mainlogo';
import TextField from '@mui/material/TextField';
import { Avatar } from '@mui/material';
function Register(props) {
    const [file,setFile]=useState(null);
    const history = useNavigate();
    const [userData,setUserData]=useState({
        userName:"",
        userEmail:"",
        profilePicture:null,
        userPassword:"",
    });
    const [err,setError]=useState("")
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
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(file){
            console.log(file.name);
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name",fileName);
            data.append("file",file);
            userData.profilePicture=fileName;
            try {
                axios.post("http://localhost:4000/upload",data)
            } catch (error) {
              console.log(error);  
            }
    
        }
        try{
            const uri="http://localhost:4000/api/registerdata"
          const response= await axios.post(uri,userData);
          console.log(response.data);
          history("/login");
        }
        catch(error){
            console.log(error.response.data.message)
             setError(error.response.data.message);
        }
        setUserData({
            userName:"",
            userEmail:"",
            profilePicture:null,
            userPassword:"",
        })
            
        }
    
    return (
        <div className="register-main">
            <div className='register-flex'>
            <MainLogo ></MainLogo>
            <form className='form-reg'>
            {file && <Avatar className='register-image'  src={URL.createObjectURL(file)} alt=' to upload'></Avatar>}
                <div className="form-in">
                    <div>
                <label for="name">Name:</label><br></br>
                <input id="name"
                type="text"
                name="userName"
                placeholder="Enter your name"
                value={userData.userName}
                onChange={handleChange}></input><br />
                {err}
                </div>
                <div>
                 <label for="email">Email:</label><br></br>
                <input id="email"
                type="text"
                name="userEmail"
                placeholder="Enter your email"
                value={userData.userEmail}
                onChange={handleChange}></input><br />
                </div>
                <div>                 <label for="password">Password:</label><br></br>
                <input id="password"
                type="text"
                name="userPassword"
                placeholder="Enter your password"
                value={userData.userPassword}
                onChange={handleChange}></input><br />
                </div>
                <div>
            <label htmlFor="img">Add Image</label>
            <input id="img" type="file"  name="profilePicture" onChange={(e)=>setFile(e.target.files[0])} value={userData.profilePicture} style={{display:'none'}}></input><br />
           </div>
                <Button className='but-reg' variant="contained" style={{backgroundColor:'#b9a6e7',color:"wheat",fontSize:"20px"}} onClick={handleSubmit}>Register</Button>
                <div className='button-log'>Already have an account?
                <Button variant='contained' style={{backgroundColor:'#b9a6e7',marginLeft:"1px"}}><a href='/login' style={{textDecoration:"none",color:"wheat",fontSize:"20px"}}>Login</a></Button></div>
                </div>
            </form>
            </div>
          
        </div>
    );
}

export default Register;