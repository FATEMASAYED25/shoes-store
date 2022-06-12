
import axios from 'axios'
import { useLocation ,Link } from 'react-router-dom'
import React, { useState ,useEffect } from 'react'
import { Container,Col,Row, Button } from 'react-bootstrap'


const ShoppingCart = () => {
    
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
<Row className='my-4'>
<Col xs={12} md={4} >

    <div style={{border:" 1px rgba(0, 0, 0, 0.111) solid ", textAlign:"center" }}>
 <h4>the summary of your order</h4>
 <p>the total price : {product.price}</p>
 <p>the delivery time within two dayes</p>
 <p>the total goods are : </p>
 <p>delivery is free</p>
 <Button className="my-2" variant="primary" >order now </Button>


    </div>
</Col>
<Col xs={12} md={8}>

the list of products that the user add to shopping card must goes here 
</Col>

</Row>



</Container>
  )
}

export default ShoppingCart;
