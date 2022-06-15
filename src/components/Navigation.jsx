import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { Navbar, Container, Nav, Form, FormControl, Button, Row, Col ,Image} from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa';
import { MdOutlineManageAccounts } from "react-icons/md";
import img4 from "../images/4.png";
import {useCart} from "react-use-cart";
const Navigation = () => {
  const {items}= useCart()
  return (
    <React.Fragment>
      <Container fluid >
        <Row className="d-flex justify-content-end align-items-center">

          <Col   md={1} xs={3} className="mx-2 " >
            <Link to="/home">
             <Image 
              src={img4} 
              className="img-fluid"
              alt="fourth" 
              />
              </Link>
              </Col>
          <Col md={5} lg={6} xs={4}>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            </Col>
          <Col className="d-flex justify-content-around" >
          
           <Link  style={{ color: 'black'}} to="/Cart"><FaShoppingCart size="27px" /> {items.length} </Link>
           <NavLink to="/Account">
              <MdOutlineManageAccounts size="1.5em" /> My Account
            </NavLink>
           <Button className="mx-2" variant="outline-success">sign up </Button>
           </Col>

        </Row>
      </Container>
      <Navbar expand="lg" style={{ background: "rgb(148 108 221)" }}>
        <Container>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/About">about us</NavLink>
              <NavLink to="/Services">services</NavLink>
              <NavLink to="/Help">Help</NavLink>
              <NavLink to="/Contact">Contact</NavLink>
              <NavLink to="/News">News</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  
      </React.Fragment>
  );
}

export default Navigation;
