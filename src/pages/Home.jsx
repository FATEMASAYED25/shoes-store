import React, { useState } from "react";
import { Container, Row, Carousel, Col } from "react-bootstrap";
import img1 from "../images/1.png";
import img2 from "../images/7.png";
import img3 from "../images/3.png";
import img4 from "../images/8.gif";
import img5 from "../images/adidas brand.png";
import img6 from "../images/nike brand.png";
import img7 from "../images/sketcher brand.png";
import img8 from "../images/puma prand.png";
import Categories from "../components/Categories"
const Home = () => {
  const BrandsImages = [img5, img6, img7, img8, img5, img6, img7, img8];
  const SliderImages = [img1, img2, img3, img4];

  return (
    <React.Fragment>
      <Carousel fade>
        {SliderImages.map((image, index) => (
          <Carousel.Item interval={1000} className="d-block w-60 h-60" key={index}>
            <img className="d-block w-100" alt="home images" src={image} />
          </Carousel.Item>
        ))}
      </Carousel>

      <Container>
        <Row
          style={{
            margin: "100px",
            textAlign: "center",
            alignItems: "center",
            fontSize: "50px",
          }}
        >
          <p>FIND YOUR PERFECT SHOES FOR YOU AND YOUR FAMILY </p>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className="slider-trace-brand">
            {BrandsImages.map((image, key) => (
              <img
                className="d-block w-100 "
                alt="brands images"
                src={image}
                key={key}
              />
            ))}
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Categories />
      </Container>
    </React.Fragment>
  );
};

export default Home;
