import React, { useState } from 'react';
import Navbar from '../components/navbar';
function Addblog(props) {
    const[values,setValues]=useState({
        place:"",
        visitedDate:"",
        images:[]
    });
    console.log(values);
    function handleValues(event){
        const name=event.target.name;
        const value=event.target.value;
        setValues((prev)=>{
            return{
            ...prev,
        [name]:value}
        })
    }
  function handleSubmit(event){
       // const name=event.target.name;
       //// const value=event.target.value;
    event.preventDefault();
       // setData(prev=>{
         //   return{...prev,
         //   [name]: value}
      //  })
   };
   // console.log(data)
    return (
        <>
<Navbar></Navbar>

          <form>
            <input type="text" name="place" onChange={handleValues}></input>
            <input type="date" name='visitedDate'onChange={handleValues}></input>
            <input type="file" name="images"onChange={handleValues}></input>
            <button type="submit" onClick={handleSubmit}>Upload</button>
            </form>  
        </>
    );
}

export default Addblog;