import { useState } from "react";
import axios from "axios";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { SiAddthis } from "react-icons/si";

const AddProduct3 = () => {
  const [show, setShow] = useState(false);
  const [file, setFile] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    category_id: "",
    price: "",
    quantity: "",
    description: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((prevProduct) => {
      return {
        ...prevProduct,
        [name]: value,
      };
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("token"));
    let formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("quantity", product.quantity);
    formData.append("category_id", product.category_id);
    formData.append("description", product.description);
    for (let i = 0; i < file.length; i++) {
      formData.append("images", file[i]);
    }
  
    axios
      .post("https://backende-commerc.herokuapp.com/api/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        return res;
      });
    setProduct({
      name: "",
      category_id: "",
      images: "",
      price: "",
      quantity: "",
      description: "",
    });
    setShow(false);
  }
  return (
    <>
      <Button className="main-btn" onClick={handleShow}>
        <SiAddthis size="1.5rem" className="me-2" />
        Add Product
      </Button>
      <Modal show={show}>
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
                <Form.Control
                  value={product.name}
                  type="text"
                  placeholder="Product Name"
                  name="name"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="price">
              <Form.Label column sm={2}>
                Price
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Product Price"
                  name="price"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="quantity">
              <Form.Label column sm={2}>
                Quantity
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="number"
                  placeholder="Product Quantity"
                  name="quantity"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="category">
              <Form.Label column sm={2}>
                Category
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="number"
                  placeholder="category No"
                  name="category_id"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="multipleImages">
              <Form.Label column sm={2}>
                Images
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="file"
                  accept="image/*"
                  multiple
                  name="images"
                  onChange={(e) => setFile(e.target.files)}
                />
              </Col>
            </Form.Group>
          </Form>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Product Description"
              name="description"
              onChange={handleChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button className="main-btn" onClick={onSubmit}>
            Add
          </Button>
          <Button className="secondary-btn" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddProduct3;
