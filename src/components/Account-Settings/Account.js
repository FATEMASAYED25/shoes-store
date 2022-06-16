import { useState, useEffect } from "react";
import { Badge, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";
import { BsFillBagFill } from "react-icons/bs";
import Products from "./Products";
import Profile from "./Profile";
import { allProducts } from "../../api/API";
import { getCurrentUser, logout } from "../../api/auth";

const AccountSettings = () => {
  const [products, setProducts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);

  const getAllProducts = async () => {
    const res = await allProducts();
    setProducts(res);
  };
  const getUser = async () => {
    const res = await getCurrentUser();
    setCurrentUser(res)
  }
  useEffect(() => {
    getUser();
    getAllProducts();
  }, [products]);

  const logOut = () => {
    logout();
  };

  return (
    <Container className="account-settings">
      <Row>
        <Col xs={3} className="aside">
          <h2>Hello Sondos!</h2>
          <ListGroup>
            <ListGroup.Item>
              <NavLink to="/Account/Profile" className="ms-2 fw-bold">
                <RiAccountCircleFill size="1.5em" /> Profile
              </NavLink>
            </ListGroup.Item>
            {currentUser?.role === 'admin' && (
              <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-center"
            >
              <NavLink to="/Account/Products" className="ms-2 me-auto fw-bold">
                <BsFillBagFill size="1.5em" /> Products
              </NavLink>
              <Badge pill>{products.length}</Badge>
            </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
        <Col xs={9} className="content">
          <Routes>
         
            <Route path="Profile" element={<Profile />} />
            <Route path="Products" element={<Products />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default AccountSettings;
