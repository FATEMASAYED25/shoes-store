
import React, { useState, useEffect } from 'react'
import { Container, Card, Button, Row, Carousel,} from "react-bootstrap"
import axios from 'axios'
const Products = (product) => {


  return (
   
      <React.Fragment>
   
   
      <Card key={product.id} style={{ width: '18rem' ,border:'none'}}>
        <Card.Img variant="top" src={product.url} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
         {product.id}
          </Card.Text>
          <Button variant="primary">buy now</Button>
        </Card.Body>
      </Card>
   

</React.Fragment>
  )
}

export default Products
