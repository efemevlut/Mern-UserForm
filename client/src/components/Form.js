import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Form.style.css";

function FormComp() {
  return (
    <Form className="form-wrapper">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your first name" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your last name" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" placeholder="Enter your phone number" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Add User
      </Button>
    </Form>
  );
}

export default FormComp;
