import { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { getUserById, updateUserInfo } from "../../api/API";

const Profile = () => {
  const [user, setUser] = useState({});
  const token = JSON.parse(localStorage.getItem("token"))

  const getUserData = async (id) => {
    const userData = await getUserById(id);
    setUser(userData);
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    updateUserInfo(user).then(res => {
      if(res){
        window.location.reload(true);
      }
    })
  }

  useEffect(() => {
    getUserData(token.id)
  }, [token.id]);

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
            <Form.Control 
              type="text"
              placeholder="first_name"
              name="first_name"
              defaultValue={user.first_name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} sm={6} className="mb-3" controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="last_name"
              name="last_name"
              defaultValue={user.last_name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} sm={6} className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="email"
              name="email"
              defaultValue={user.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} sm={6} className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control 
              type="text"
              placeholder="username"
              name="username"
              defaultValue={user.username}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} sm={6} className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control 
              type="text"
              placeholder="address"
              name="address"
              defaultValue={user.address}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} sm={6} className="mb-3" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control 
              type="text"
              placeholder="city"
              name="city"
              defaultValue={user.city} 
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} sm={6} className="mb-3" controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control 
              type="tel" 
              placeholder="phone"
              name="phone"
              defaultValue={user.phone}
              onChange={handleChange} 
            />
          </Form.Group>

          <Row>
            <Col>
              <Button className="main-btn" type="submit" onClick={onSubmit}>
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
