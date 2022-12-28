import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './image.css';import 'bootstrap/dist/css/bootstrap.css';
//import { requirePropFactory } from '@mui/material';
function Image() {
  return (
    <div className='image-main'>   
     <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F258109%2Fpexels-photo-258109.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-pixabay-258109.jpg%26fm%3Djpg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fscenery%2F&tbnid=ZHqN5-TCMy0_cM&vet=12ahUKEwjBxqf2jZz8AhXaLbcAHfYuBS0QMygBegUIARDrAQ..i&docid=9CUnCQ55dyyreM&w=5105&h=2871&q=scenary%20images&ved=2ahUKEwjBxqf2jZz8AhXaLbcAHfYuBS0QMygBegUIARDrAQ"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <im
          className="d-block w-100"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F258109%2Fpexels-photo-258109.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-pixabay-258109.jpg%26fm%3Djpg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fscenery%2F&tbnid=ZHqN5-TCMy0_cM&vet=12ahUKEwjBxqf2jZz8AhXaLbcAHfYuBS0QMygBegUIARDrAQ..i&docid=9CUnCQ55dyyreM&w=5105&h=2871&q=scenary%20images&ved=2ahUKEwjBxqf2jZz8AhXaLbcAHfYuBS0QMygBegUIARDrAQ"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></div>

  );
}

export default Image;