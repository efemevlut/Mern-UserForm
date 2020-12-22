import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import "./Form.style.css";
import Logo from "../logo/logo.png";
import { postData } from "../helper/PostData";

function FormComp() {

  const onSubmit = (e) => {

    e.preventDefault();
    const firstName = e.target.elements[0].value;
    const lastName = e.target.elements[1].value;
    const phone = e.target.elements[2].value;

    postData("/api/users/addUser", { firstName, lastName, phone })
      .then((data) => {
        alert("Added user");
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  return (
    <Form className="form-wrapper" onSubmit={onSubmit}>
      <img src={Logo} alt="logo" className="image" />
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          name="firstName"
          type="text"
          placeholder="Enter your first name"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          name="lastName"
          type="text"
          placeholder="Enter your last name"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Phone</Form.Label>
        <input
          name="phone"
          type="number"
          placeholder="Enter your phone number"
          required
          min
        />
        <Form.Control.Feedback type="invalid">
          Looks good!
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Add User
      </Button>
    </Form>
  );
}

export default FormComp;
