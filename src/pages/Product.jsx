import React from 'react'
import { Container,Col ,Row,Button,Card, Carousel} from 'react-bootstrap'
import { useLocation ,Link } from 'react-router-dom'
import { useState ,useEffect } from 'react'
import { FaStar,FaHome } from "react-icons/fa";
import { FcApproval , FcInTransit,FcHome,FcUndo} from "react-icons/fc";

import axios from 'axios'

const Product = () => {

const location=useLocation()
const id= location.pathname.split("/")[2];

const [product, setProduct] = useState({});

useEffect(() => {
  axios
    .get("https://backende-commerc.herokuapp.com/api/products/" + id)
    .then((res) => {
     setProduct(res.data);
     
    })
    .catch((err) => {
      alert("there is no product")
    });
}, [id]);


  return (
  <Container>


                
                <Row style={{
            margin: "auto",
            padding:"20px",
            justifyContent:"center",
            alignItems:"center"
          }}>
              <Col xs={12} md={4}  > 


            <Carousel fade>
            {product.images?.map(img => (
            <Carousel.Item className="d-block w-60 h-60" key={img.id}>
            <img className="d-block w-100" alt="home images" src={`https://backende-commerc.herokuapp.com/${img.path}`} />
             </Carousel.Item>

                  ))}
                  
               </Carousel>
               </Col>
              <Col xs={12} md={4} className="py-4">
              <h1>{product.name}</h1>
              <h4>description:{product.description}</h4>
              <h5>quantity: {product.quantity}</h5>
              <div     style={{
                 
                 backgroundColor: "green",
                  textAlign:"center",
                  width:"110px",
                  padding:"0px 1px ",
                  fontSize:"12px",
                  fontWeight:"bold",
                  letterSpacing:"1px",
                }}>
              <p style={{color: "white"}} > Rating is : {product.rating} <FaStar color='white'/> </p>

              </div>
              <p>after the visitor pressing on the  add to shoppingcart the website order from the visitor to registrate  on the website </p>
              <Link to={`/ShoppingCart/${product.id}`}><Button className="my-2" variant="primary">add to shopping card</Button></Link>
              </Col>
              <Col className='product-description' xs={12} md={4}>
              <p> <FcUndo/> you can return the product if it has any issues </p>
              <p><FcApproval/> product has one year garentee </p>
              <p> <FcHome/> the buyer is shoes store </p>
              <p><FcInTransit/> delivery in 2 days</p>
              
              </Col>
              </Row>
       
   

  </Container>
  )
}

export default Product;
