import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './image.css';import 'bootstrap/dist/css/bootstrap.css';
//import { requirePropFactory } from '@mui/material';
function Image(props) {
  const  PF = "http://localhost:4000/images/";
  console.log(props.image);
  return (
    <>
   
      <div className='image-main'>   
      <Carousel>
     <Carousel.Item>
         <img
           className="d-block w-100 image-wi"
           src={PF + props.image}
           alt="no"
         />
       </Carousel.Item>
       </Carousel></div>
   
</>
  );
}

export default Image;