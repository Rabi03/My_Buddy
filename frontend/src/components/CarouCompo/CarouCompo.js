import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouCompo.css'
import home1 from '../../images/h1.jpg'
import home2 from '../../images/h2.jpg'
import music1 from '../../images/m1.jpg'
import music2 from '../../images/m2.jpg'
import music3 from '../../images/m3.jpg'
import news1 from '../../images/n1.jpg'
import news2 from '../../images/n2.jpg'

const CarouCompo = () => {
    return (
        <div>
             <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={home2}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={music1}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={news1}
          alt="Third slide"
        />

      
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default CarouCompo;
