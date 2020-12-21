import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Form.style.css";
import Logo from "../logo/logo.jpg";

function FormComp() {
  return (
    <Form className="form-wrapper">
      <img src={Logo} alt="logo" className="image"/>
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

      <Button variant="primary" type="submit" >
        Add User
      </Button>
    </Form>
  );
}

export default FormComp;
