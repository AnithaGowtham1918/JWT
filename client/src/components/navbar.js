import React from 'react';
import './nav.css';
import Drop from './dropdown.js';
import Button from '@mui/material/Button';
import { Link, useParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

function Navbar(props) {
    return (
        <>
        
        <div className='nav-main'>
         <div className='nav-left'><Link to={`/home`} style={{textDecoration:'none'}}><Button style={{color:'white'}}><span style={{color:'red',marginTop:'-40px'}}><h1>M</h1></span>emories<span style={{color:'red'}}><h1>S</h1></span>pot</Button></Link></div>
         <div className='nav-right'>
            <li><Button href={`/addblog`} style={{color:'white'}} onClick=''>Compose Blog</Button></li>
            <li><Button href="#text-buttons" style={{color:'white'}}>Notification</Button></li>
            <li><Button href="" style={{color:'white'}}>LogOUT</Button></li>
         </div>
         <div className='nav-end' style={{width:"30%"}}>
        <Link  to="/profile" style={{textDecoration:"none"}}> <Drop></Drop></Link>
         </div>
        </div>
        </>
    );
}

export default Navbar;
