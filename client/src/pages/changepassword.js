import React, { useState } from 'react';
import Button from '@mui/material/Button';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { useNavigate } from 'react-router';
function Changepassword(props) {
    const url ="https://memoriesspotapi.onrender.com";
    const history= useNavigate();
    const [err,setErr]=useState("");
    const [userPassword,setUserPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [flag,setFlag]=useState("password");
    const [cflag,setcFlag]=useState("password");
    const [key,setKey]=useState(false);
    const [ckey,setcKey]=useState(false);
    function handleSubmit(){
        if(userPassword===confirmPassword){
            axios.put(`${url}/change/{email}`);
            window.alert("Password changed login in again");
            history.push("/login");
        }

    }
    return (
        <> 
        <div>
            <form>
            <div><label htmlFor="password">Enter new password:</label><br></br>
                <input id="password"
                type={flag}
                name="userPassword"
                placeholder="Enter your password"
                value={userPassword}
                onChange={(event)=>setUserPassword(event.target.value)}></input><VisibilityOffIcon></VisibilityOffIcon><br />
                </div> <div><label for="password">Confirm Password:</label><br></br>
                <input id="password"
                type={cflag}
                name="userPassword"
                placeholder="Enter your password"
                value={confirmPassword}
                onChange={(event)=>setConfirmPassword(event.target.value)}></input>
                <VisibilityOffIcon></VisibilityOffIcon><br />
                </div>
                <div>
                <Button className='but-reg' variant="contained" style={{backgroundColor:'#b9a6e7',color:"wheat",fontSize:"20px"}} onClick={handleSubmit}>Register</Button>
                </div>
            </form>
        </div>
            
        </>
    );
}

export default Changepassword;