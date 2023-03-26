import React from 'react';
import './nav.css';
import Drop from './dropdown.js';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


function Navbar(props) {
    return (
        <>
        <div className='nav-main'>
         <div className='nav-left'><Button style={{color:'white'}}><span style={{color:'red',marginTop:'-40px'}}><h1>M</h1></span>emories<span style={{color:'red'}}><h1>S</h1></span>pot</Button></div>
         <div className='nav-right'>
            <li><Button href="/addblog" style={{color:'white'}} onClick='/compose'>Compose Blog</Button></li>
            <li><Button href="#text-buttons" style={{color:'white'}}>Notification</Button></li>
         </div>
         <div className='nav-end' style={{width:"30%"}}>
         <Drop></Drop> 
         </div>
        </div>
        </>
    );
}

export default Navbar;
