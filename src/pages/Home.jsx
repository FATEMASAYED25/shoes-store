import React, { useState, useEffect } from 'react'
import { Container, Card, Button, Row, Carousel,} from "react-bootstrap"
import axios from 'axios'
import img1 from "../images/1.png";
import img2 from "../images/7.png";
import img3 from "../images/3.png";
import img8 from "../images/8.gif";
const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {

    axios.get("http://localhost:3000/products").then((res) => {
      setProducts(res.data)
    }).catch(err => {
      console.log("can't fetch data");
    })

  }, [])


  return (
<React.Fragment>
  
<Carousel style={{ width: '100vw' ,height:"110vh" }}>
        <Carousel.Item >
          <img
          
            className="d-block w-100"
            src={img8}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={img2}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />

        </Carousel.Item>
      </Carousel>


      <Container>
    <Row style={{ margin:'100px', textAlign:'center' ,alignItems:'center', fontSize:'50px'}}>
      <p>FIND YOUR PERFECT SHOES 
      FOR YOU AND YOUR FAMILY </p>
      
    
    </Row>


      </Container>


  
 
      <Row >
      <div className="slider" >
      <div className="slider-trace">
      
        {products.map(product =>
        <div className="slide">
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
          </div>
        )}
        </div>
        </div>
      </Row>
  
    </React.Fragment>
  )
}

export default Home
