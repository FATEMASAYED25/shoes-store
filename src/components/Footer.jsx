import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import { Form, Button, Row, Col } from 'react-bootstrap';

//getting the data from users and restore it in the app database
class Footer extends Component {
  state = {
     email: '' ,
     password:''
};
  submit = (e) => {
    e.preventDefault();
    this.setState({

    })

  }
  //change the 
  change = (e) => {
    //clone which means that spread an array or an opject into multiple elements using of ...spread operator 
    let state={...this.state}
   
    // changing the values of the state properities depends on the name value of the inputs
    state[e.target.name]=e.target.value
    this.setState(state);
  }
  render() {

    return (
      <div style={{ marginTop: '50px' }}>

        <Row className='p-4' style={{ background: "rgb(148 108 221)" }}>
          <Col xs={6} md={3}>
            <ul className='pt-4'>about us
              <li> <NavLink to="/">our stores adresses</NavLink></li>
              <li><NavLink to="/Services">our team</NavLink></li>
              <li><NavLink to="/Services">news</NavLink></li>
            </ul>
          </Col>

          <Col xs={6} md={3}>
            <ul className='pt-4'>products
              <li> <NavLink to="/">women shoes</NavLink></li>
              <li><NavLink to="/Services">men shoes</NavLink></li>
              <li><NavLink to="/SignUp">kids shoes</NavLink></li>
            </ul>
          </Col>

          <Col xs={6} md={3}>
            <ul className='pt-4'>get help
              <li> <NavLink to="/">contact us</NavLink></li>
              <li><NavLink to="/Services">returns</NavLink></li>
    
            </ul>
          </Col>
          <Col xs={6} md={3}>
            <Form onSubmit={this.submit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label >sign up</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.change} 
                  name='email'
                  />

              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label ></Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.change} 
                  name='password'
                  />
              </Form.Group>

              <Button className='mt-2' variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>

        </Row>

      </div>
    )
  }
}
export default Footer

