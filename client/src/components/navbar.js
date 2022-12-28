import React from 'react';
import './nav.css';
function Navbar(props) {
    return (
        <>
        <div className='nav-main'>
         <div className='nav-left'>BlogSpot</div>
         <div className='nav-right'>
            <li>New Blog</li>
            <li>Notification</li>
            <li>User Name</li>
            <li>Sign Out</li>
         </div>
        </div>
        </>
    );
}

export default Navbar;
