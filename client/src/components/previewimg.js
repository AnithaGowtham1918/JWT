import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './image.css';import 'bootstrap/dist/css/bootstrap.css';
//import { requirePropFactory } from '@mui/material';
function PreviewImage(props) {
  console.log(props.imgdata);
 
  return (
    <>
 {props.imgdata &&<div style={{width:"60%"}}  className='image-main'>   
      <Carousel>
       <Carousel.Item>
         <img
           className="d-block w-100 image-wi"   
           src={URL.createObjectURL(props.imgdata)}
           alt="no"
         />
       </Carousel.Item>
       </Carousel></div>}
     
   
</>
  );
}

export default PreviewImage;