import React from 'react';
import Navbar from '../components/navbar';
function Addblog(props) {
    return (
        <>
<Navbar></Navbar>

          <form>
            <input type="text" name="place"></input>
            <input type="date" name='visitedDate'></input>
            <input type="file" name="images"></input>
            <button type="submit">Upload</button>
            </form>  
        </>
    );
}

export default Addblog;