import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { Navbar, Container, Nav, Form, FormControl, Button, Row, Col ,Image} from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa';
import img4 from "../images/4.png";
const Navigation = () => {
  return (
    <React.Fragment>
      <Container fluid >
        <Row className="d-flex justify-content-end align-items-center">

          <Col   md={1} xs={3} className="mx-2 " ><Link to="#">
             <Image 
              src={img4} 
              className="img-fluid"
            
              alt="fourth" 
              />
              </Link>
              </Col>
          <Col md={7} xs={4} >
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
          
           <Link  style={{ color: 'black'}} to="#"><FaShoppingCart size="27px" /> shopping card </Link>
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
              <NavLink to="/Admin">Admin</NavLink>
              <NavLink to="/Admin">Admin</NavLink>
              <NavLink to="/Admin">Admin</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  
      </React.Fragment>
  );
}

export default Navigation;