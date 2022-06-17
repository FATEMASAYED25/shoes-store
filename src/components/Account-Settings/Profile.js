import { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { getUserById, updateUserInfo } from "../../api/API";

const Profile = () => {
  const [user, setUser] = useState({});

  const getUserData = async (id) => {
    const userData = await getUserById(id);
    console.log(userData);
    setUser(userData);
  };

  const updateUserData = async (id) => {
    const res = await updateUserInfo(id);
    setUser(res);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('token'))
    console.log(user)
    getUserData(user.id)
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
            <Form.Control type="text" placeholder={user.first_name} value={user.first_name} />
          </Form.Group>

          <Form.Group as={Col} sm={6} className="mb-3" controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder={user.last_name} value={user.last_name}  />
          </Form.Group>

          <Form.Group as={Col} sm={6} className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder={user.email} value={user.email}  />
          </Form.Group>

          <Form.Group as={Col} sm={6} className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder={user.username} value={user.username}  />
          </Form.Group>

          <Form.Group as={Col} sm={6} className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder={user.address} value={user.address}  />
          </Form.Group>

          <Form.Group as={Col} sm={6} className="mb-3" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder={user.city} value={user.city}  />
          </Form.Group>

          <Form.Group as={Col} sm={6} className="mb-3" controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel" placeholder={user.phone} value={user.phone}  />
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
