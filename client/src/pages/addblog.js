import React, { useState } from 'react';
import Navbar from '../components/navbar';
import axios from "axios";
import '../components/blog.css';
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
    event.preventDefault();
        axios.post("http://localhost:4000/blog/postblog",values).then((res,error)=>{
            try {
                console.log(res.data);
            } catch (error) {
                console.log(error);
            }});
        setValues({
            place:"",
            visitedDate:"",
            images:[]
        })};
   
    return (
        <>
<Navbar></Navbar>

          <form className='up-main'>
            <div>
                <label htmlFor='name'>Place:</label>
            <input id='name' type="text" name="place" onChange={handleValues} value={values.place} autoFocus={true}></input>
            </div>
             <div>
                <label htmlFor='from'>Visited from:</label>
                <input id='from' type="date" name='visitedDate'onChange={handleValues} value={values.visitedDate}></input>
             </div>
           <div>
            <label htmlFor='img'>Images:</label>
            <input id="img" type="file" name="images"onChange={handleValues} value={values.images}></input>
           </div>
           
            <button type="submit" onClick={handleSubmit}>Upload</button>
            </form>  
        </>
    );
}

export default Addblog;