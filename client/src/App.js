import React from 'react';
import Home from './pages/home';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Addblog from './pages/addblog';
import Login from './pages/login';
import Register from './pages/register';
import SingleBlog from './components/singleBlog';
import Profile from './pages/profile';
import Postupdate from './pages/postupdate';
function App(props) {
  return (
    <>
    <div className='app-main'>
      <Router>
        <Routes>
          <Route path='/' element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/home/:id" element={<Home></Home>}></Route>
          <Route path="/addblog" element={<Addblog></Addblog>}></Route>
          <Route path='/single' element={<SingleBlog></SingleBlog>}></Route>
          <Route path='/profile/:id' element={<Profile></Profile>}></Route>
          <Route path="/postupdate/:id" element={<Postupdate></Postupdate>}></Route>
        </Routes>
      </Router>
      
       </div>
    </>
  );
}

export default App;