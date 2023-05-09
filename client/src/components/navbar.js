import React from 'react';
import './nav.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Link, useNavigate} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { LogOut } from '../store/action/user';
function Navbar(props) {
    const  PF = "https://memoriesspotapi.onrender.com/images/";
    const history = useNavigate();
    const dispatch =useDispatch();
    const handleLogOut=()=>{
        dispatch(LogOut());
        history("/login");
    }
    const userData= useSelector((data)=>
data.loginuser.user,
)

    return (
        <>
        
        <div className='nav-main'>
         <div className='nav-left'><Link to={`/home`} style={{textDecoration:'none'}}><Button style={{color:'white'}}><span style={{color:'red',marginTop:'-40px'}}><h1>M</h1></span>emories<span style={{color:'red'}}><h1>S</h1></span>pot</Button></Link></div>
         <div className='nav-right'>
            <li><Button href="/home" style={{color:'white'}}>Home</Button></li>
            <li><Button href={`/addblog`} style={{color:'white'}} onClick=''>Compose Blog</Button></li>
            <li><Button href="" style={{color:'white'}} onClick={handleLogOut}>LogOUT</Button></li>
         </div>
         <div className='nav-end' style={{width:"20%"}}>
          {!userData.profilePicture && <div className='avatar'><Link to="/profile"><Avatar sx={{ width: 60, height: 60 }}></Avatar></Link></div>}
           {userData.profilePicture && <div className='avatar'><Link to="/profile"><Avatar sx={{ width: 60, height: 60 }} src={PF+userData.profilePicture}></Avatar></Link></div>}
            <div className='user'> <Link to ="/profile"><Button style={{color:'white',marginLeft:"20px"}}>{userData.userName}</Button></Link></div>
         </div>
        </div>
        </>
    );
}

export default Navbar;
