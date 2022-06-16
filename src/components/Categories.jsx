import { useState, useEffect } from "react";
import { Button, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { allCategories, allProducts } from "../api/API";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const getAllCategories = async () => {
    const res = await allCategories();
    setCategories(res);
  };

  const getAllProducts = async () => {
    const res = await allProducts();
    setProducts(res);
  };

  useEffect(() => {
    getAllCategories();
    getAllProducts();
  }, []);

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
    <>
      {categories.map((category) => (
        <Row key={category.id} className="category">
          <h2>{category.name}</h2>
          <Carousel responsive={responsive}>
            {products
              .filter((product) => product.category_id === category.id)
              .map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={`https://backende-commerc.herokuapp.com/${product.images[0].path}`}
                      alt="hello world"
                      className="card-img"
                    />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{product.price}$</Card.Text>
                      <Button variant="primary">buy now</Button>
                    </Card.Body>
                  </Card>
                </Link>
              ))}
          </Carousel>
        </Row>
      ))}
    </>
  );
};

export default Categories;
