import React, { useState, useEffect } from "react";
import { Container, Card, Button, Row, Carousel, Col } from "react-bootstrap";
import axios from "axios";

const Categories = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api")
      .then((res) => {
        setProducts(res.data.products);
        setCategories(res.data.categories);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <React.Fragment>
      {categories.map((category) => (
        <Row key={category.id}>
          <h2>{category.name}</h2>
          {products
            .filter((product) => product.category_id === category.id)
            .map((product) => (
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
      ))}
    </React.Fragment>
  );
};

export default Categories;
