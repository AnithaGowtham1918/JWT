import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './image.css';import 'bootstrap/dist/css/bootstrap.css';
//import { requirePropFactory } from '@mui/material';
function PreviewImage(props) {
  console.log(props.imgdata);
  
  return (
    <>
   <div style={{width:"60%"}}  className='image-main'>   
      <Carousel>
      { props.imgdata.map((file,index)=>
       <Carousel.Item key={index} activeIndex={index}>
         <img
           className="d-block w-100 image-wi"   
           src={URL.createObjectURL(file)}
           alt="no"
         />
       </Carousel.Item>)}
       </Carousel></div>
     
   
</>
  );
}

export default PreviewImage;