import React from 'react'
import { Container,Col ,Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { useState ,useEffect } from 'react'
import axios from 'axios'

const Product = () => {

const location=useLocation()
const Id= location.pathname.split("/")[2];
console.log(Id);

const [products, setProducts] = useState([]);

useEffect(() => {
  axios
    .get("http://localhost:3000/api")
    .then((res) => {
      setProducts(res.data.products);
     
    })
    .catch((err) => {
      console.error(err);
    });
}, []);

console.log(products);

  return (
  <Container>

{products.filter( product => product.id === Id)
              .map(product => (
                
                <Row key={product.id}>
              <Col>hellloooo{product.name}</Col>
              <Col>moijijio{product.description}</Col>
              <Col>mkovmipanri{product.name}</Col>
              </Row>
              ))}
   

  </Container>
  )
}

export default Product;