import React from 'react';
import Navbar from '../components/navbar';
import Blog from '../components/blog';
 

function Home(props) {
       
    return (
        <>
            <Navbar></Navbar>
            <Blog></Blog>
        </>
    );
}

export default Home;