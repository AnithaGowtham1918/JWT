import React from 'react';
import './mainlogo.css';
function MainLogo(props) {
    return (
        <>
            <div className='main-logo'>
            <div className="main-in" style={{color:"white"}}><span style={{color:'red',marginTop:'-15px'}}><h1>M</h1></span>emories<span style={{color:'red',marginTop:'30px'}}><h1>S</h1></span>pot</div>
            <div className='main-wel'>Welcome....</div>
            <div  className="main-sign" style={{position:"relative",top:"28%",left:"30%",fontSize:"30px",color:"white"}}>SIGN IN TO EXPLORE</div>
            </div>
            
        </>
    );
}

export default MainLogo;