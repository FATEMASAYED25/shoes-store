
import React from "react";
import { useCart } from "react-use-cart";
import { Container, Col, Row, Button } from 'react-bootstrap'
import { FaPlusSquare, FaMinusSquare, FaTrashAlt } from 'react-icons/fa';





function Cart() {
  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();
  console.log(items);
  if (isEmpty) return <h3 style={{ color: 'brown', textAlign: "center", margin: "4%" }}> Hmm! Make an order or more and com back to us</h3>;


  var Price = items.map((item) => Number(item.quantity) * Number(item.price));
  var totalProductPrice = Price.reduce((x, y) => x + y);
  var quantity = items.map((item) => Number(item.quantity));
  var totalQuantity = quantity.reduce((x, y) => x + y);
  return (


    <Container>

      <Row className='my-4' style={{display:"flex",alignItems:"center"}}>
        <>


          <Col xs={12} md={8}>


            {items.map((item) => (


              <Row key={item.id} style={{ backgroundColor: "white", textAlign: "center", display: "flex", alignItems: "center", margin: "1%", color: "black" }}>
                <Col xs={12} md={2}>
                  <img src={`https://backende-commerc.herokuapp.com/${item.images[0].path}`} />
                </Col>
                <Col xs={12} md={6} style={{ textAlign: "center" }}>
                  <h1>  {item.quantity}  {item.name}</h1> <br />
                  <h4>
                    {item.description}
                  </h4>


                </Col>
                <Col xs={12} md={4} >
                  <p>total price</p>
                  <p>{item.quantity * Number(item.price)}</p>
                  <div style={{ display: "flex", border: "1px solid black", justifyContent: "space-between", }}>


                    <button 
                      onClick={() => updateItemQuantity(item.id, item.quantity - 1 )}
                    >
                      <FaMinusSquare />
                    </button>
                    <span>{item.quantity}</span>
                    <button style={{}}
                      onClick={() => updateItemQuantity(item.id, item.quantity + 1 )}
                    >

                      <FaPlusSquare />
                    </button>


                  </div>
                  <button onClick={() => removeItem(item.id)} style={{ marginTop: "10%" }}  ><FaTrashAlt /></button>

                </Col>

              </Row>
            ))}

          </Col>
          <Col xs={12} md={4} >

            <div style={{ border: " 1px rgba(0, 0, 0, 0.111) solid ", boxShadow:" 0 5px  5px #004aad", textAlign: "center", backgroundColor:"8080802e",fontWeight:"bold" }}>
              <h4>the summary of your order</h4>
              <p>the total price : {totalProductPrice}</p>
              <p>the delivery time within two dayes</p>
              <p>the total goods are :{totalQuantity} </p>
              <p>delivery is free</p>
              <Button className="my-2" variant="primary" >order now </Button>


            </div>

          </Col>
        </>
      </Row>
    </Container>
  );
}



export default Cart