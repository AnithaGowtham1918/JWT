import React from 'react';
import './nav.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Dropdown from 'react-bootstrap/Dropdown';

function Navbar(props) {
    return (
        <>
        <div className='nav-main'>
         <div className='nav-left'><h1 style={{color:'red',marginTop:'-40px'}}>M</h1>emories<h1 style={{color:'red'}}>S</h1>pot</div>
         <div className='nav-right'>
            <li>New Blog</li>
            <li>Notification</li>
            <li><Stack direction="row" spacing={2}>Anitha   
             <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" /><Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <MoreVertIcon />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> 
             </Stack> </li>
         </div>
        </div>
        </>
    );
}

export default Navbar;
