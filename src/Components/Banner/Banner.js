import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselImg"
          src="https://i.ibb.co/6Rx0xkv/pexels-carlo-martin-alcordo-2449665.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="carouselCaption">
          <h3>Quality is Our First Concern</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselImg"
          src="https://i.ibb.co/6mLHj4r/pexels-photomix-company-868110.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className="carouselCaption">
          <h3>Grab The Best Festive Offers!</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselImg"
          src="https://i.ibb.co/djVgv47/pexels-matheus-cenali-2733918.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="carouselCaption">
          <h3>Eat Fresh, Stay Heathy</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
