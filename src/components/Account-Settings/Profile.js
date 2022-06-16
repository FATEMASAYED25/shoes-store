import { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { getUserById, updateUserInfo } from "../../api/API";

const Profile = () => {
  const [token, setToken] = useState([]);
  const [user, setUser] = useState([]);

  const getUserData = async () => {
    const userData = await getUserById(1);
    console.log(userData);
    setToken(userData.token);
  };

  const updateUserData = async () => {
    const res = await updateUserInfo();
    setUser(res);
  };

  useEffect(() => {
    // setToken(localStorage.getItem("token"));
    // getUserData();
    // if (!token) {
    //   console.log("if");
    //   // history.push( "/login" );
    // } else {
    //   console.log("else");
    // }
    // updateUserData();
  }, []);

  return (
    <>
      <header>
        <h3>Profile</h3>
        <p>
          Manage your details, view your tier status and change your password
        </p>
      </header>
      <section className="box">
        <h4 className="mb-3">General Info</h4>
        <Form as={Row} id="update-user-details">
          <Form.Group as={Col} sm={6} className="mb-3" controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>

          <Form.Group as={Col} sm={6} className="mb-3" controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>

          <Form.Group as={Col} sm={6} className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} sm={6} className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" />
          </Form.Group>

          <Form.Group as={Col} sm={6} className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Address" />
          </Form.Group>

          <Form.Group as={Col} sm={6} className="mb-3" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" />
          </Form.Group>

          <Form.Group as={Col} sm={6} className="mb-3" controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel" placeholder="Phone" />
          </Form.Group>

          <Row>
            <Col>
              <Button className="main-btn" type="submit">
                Update
              </Button>
            </Col>
          </Row>
        </Form>
      </section>
    </>
  );
};

export default Profile;
