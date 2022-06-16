import { useState, useEffect } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import AddProduct from "./Add-Product";
import { allProducts, deleteProduct } from "../../api/API";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const res = await allProducts();
    setProducts(res);
  };

  useEffect(() => {
    getAllProducts();

  }, [products]);

  return (
    <>
      <header>
        <h3>Products</h3>
        <p>Manage your products. View, Edit or Delete your products</p>
      </header>
      <section className="box">
        <Row className="justify-content-between align-items-center">
          <Col xs="auto">
            <h4>All Products</h4>
          </Col>
          <Col xs="auto">
            <AddProduct />
          </Col>
        </Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <NavLink to="/Account/Products">
                      <AiFillEdit size="1.5rem" className="me-3" />
                    </NavLink>
                    <NavLink to="/Account/Products">
                      <AiFillDelete size="1.5rem" onClick={() => deleteProduct(product.id)} />
                    </NavLink>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </section>
    </>
  );
};

export default Products;
