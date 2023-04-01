import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import Blog from '../components/blog';
import { useSelector } from 'react-redux';

function Home(props) {
       
    return (
        <>
            <Navbar></Navbar>
            <Blog></Blog>
        </>
    );
}

export default Home;