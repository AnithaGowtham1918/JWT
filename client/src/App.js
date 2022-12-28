import React from 'react';
import Navbar from './components/navbar';
import Blog from './components/blog';
import './App.css';
function App(props) {
  return (
    <>
    <div className='app-main'>
      <Navbar></Navbar>
      <Blog></Blog>
      <Blog></Blog></div>
    </>
  );
}

export default App;