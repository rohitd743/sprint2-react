import React from "react";
import { Carousel } from "react-bootstrap";

import first from "./../holder/1.jpg";
import second from "./../holder/2.jpg";
import third from "./../holder/3.jpg";
// import fourth from "./holder/4.jpg";
// import fifth from "./holder/5.jpg";
// import sixth from "./holder/6.jpg";
// import seventh from "./holder/7.jpg";
// import eightth from "./holder/8.jpg";

const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img className=" d-block h-50 w-100" src={first} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block  h-50 w-100" src={second} alt="Third slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block  h-50 w-100" src={third} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;
