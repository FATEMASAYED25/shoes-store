import React, { useState, useEffect } from "react";
import { Container, Card, Button, Row, Carousel, Col } from "react-bootstrap";
import axios from "axios";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("can't fetch data");
      });
  }, []);
  return (
    <React.Fragment>
      <Row>
        {products.map((product) => (
          <Col sm={6} md={4} lg={3} key={product.id}>
            <Card style={{ border: "none" }}>
              <Card.Img variant="top" src={product.url} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.id}</Card.Text>
                <Button variant="primary">buy now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default Products;
