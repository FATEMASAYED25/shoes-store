import React from 'react'
import { Container,Col ,Row,Button} from 'react-bootstrap'
import { useLocation ,Link } from 'react-router-dom'
import { useState ,useEffect } from 'react'
import { FaStar,FaHome } from "react-icons/fa";
import { FcApproval , FcInTransit,FcHome,FcUndo} from "react-icons/fc";
import axios from 'axios'

const Product = () => {

const location=useLocation()
const id= location.pathname.split("/")[2];
console.log(id);

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

console.log(product);

  return (
  <Container>


                
                <Row style={{
            margin: "auto",
            padding:"20px",
            justifyContent:"center",
            alignItems:"center"
          }}>
              <Col xs={12} md={4}  > 
               <img
                className="d-block w-100"
                src="uploads/sport-shoes-men.jpeg"
                 alt="Third slide"
               /> 
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
              <Button className="my-2" variant="primary"><Link to={`/ShoppingCart/${product.id}`}></Link>add to shopping card</Button>
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