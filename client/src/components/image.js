import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './image.css';import 'bootstrap/dist/css/bootstrap.css';
import image1 from '../Images/download (1).jpg';
import image2 from '../Images/download (2).jpg'
import image3 from '../Images/download.jpg'
//import { requirePropFactory } from '@mui/material';
function Image(props) {
  const  PF = "http://localhost:4000/images/";
  console.log(props.image);
  return (
    <>
   
      <div className='image-main'>   
      <Carousel>
     {props.image.map((img,index)=>
     <Carousel.Item>
         <img
           className="d-block w-100 image-wi"
           src={PF + img}
           alt="no"
         />
         <Carousel.Caption>
           <h3>First slide label</h3>
           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
         </Carousel.Caption>
       </Carousel.Item>)}
       </Carousel></div>
   
</>
  );
}

export default Image;