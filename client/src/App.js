import React from 'react';
import Home from './pages/home';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Addblog from './pages/addblog';
function App(props) {
  return (
    <>
    <div className='app-main'>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/addblog" element={<Addblog></Addblog>}></Route>
        </Routes>
      </Router>
      
       </div>
    </>
  );
}

export default App;