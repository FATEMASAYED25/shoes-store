import React, { useState, useEffect } from "react";
import { Row, Card, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//fetch the categories data and products data 
const Categories = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://backende-commerc.herokuapp.com/api/products")
      .then((res) => {
        setProducts(res.data);
      
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(products);
  const responsive = {
    extraLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1200 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 576 },
      items: 2,
    },
    smallScreen: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  };
  return (

  
    
    <React.Fragment>
        <Row  className="category">
        
          <Carousel responsive={responsive}>
            {products.map((product) => (
              
                <Link to={`/product/${product.id}`}>
                <Card key={product.id}>
                  {product.images.map(img => (
                  <Card.Img variant="top" src={`https://backende-commerc.herokuapp.com/${img.path}`} alt="hello world" />
                  ))}
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.id}</Card.Text>
                    <Button variant="primary">buy now</Button>
                  </Card.Body>
                </Card>
                </Link>
              ))}
          </Carousel>
        </Row>
    
    </React.Fragment>
    
  );
};

export default Categories;
