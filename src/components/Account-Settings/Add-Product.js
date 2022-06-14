import { useState, useEffect } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { SiAddthis } from "react-icons/si";

const AddProduct = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <SiAddthis size="1.5rem" className="me-2" />
        Add Product
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="name">
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Product Name" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="price">
              <Form.Label column sm={2}>
                Price
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Product Price" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="quantity">
              <Form.Label column sm={2}>
                Quantity
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="number" placeholder="Product Quantity" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="category">
              <Form.Label column sm={2}>
                Category
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Product " />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="multipleImages">
              <Form.Label column sm={2}>
                Images
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="file" accept="image/*" multiple />
              </Col>
            </Form.Group>
          </Form>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Product Description"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddProduct;
