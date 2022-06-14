import { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { userById, updateUser } from "../../API";

const Profile = () => {
  const [token, setToken] = useState([]);
  const [user, setUser] = useState([]);

  const getUserData = async () => {
    const userData = await userById(1);
    console.log(userData);
    setToken(userData.token);
  };

  const updateUserData = async () => {
    const res = await updateUser();
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
        <h4>General Info</h4>
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
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group as={Col} sm={6} className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Col>
            <Button className="main-btn" type="submit">
              Update
            </Button>
          </Col>
        </Form>
      </section>
    </>
  );
};

export default Profile;
