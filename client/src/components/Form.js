import React from "react";
import { Formik } from "formik";
import { Button, Form } from "react-bootstrap";
import { postData } from "../helper/PostData";
import "./Form.style.css";
import * as Yup from "yup";
import Logo from "../logo/logo.png";

const addUser = Yup.object({
  firstName: Yup.string().min(2, "Too Short!").max(20, "Too Long!").required("First name is a required"),
  lastName: Yup.string().min(2, "Too Short!").max(20, "Too Long!").required("Last name is a required"),
  phone: Yup.number().min(100000000, "Min 10 chars").required("Phone is a required"),
});

const FormComp = () => (
  <div className="form-wrapper" >
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phone: "",
      }}
      validationSchema={addUser}
      onSubmit={(values) => {
        postData("/api/users/addUser", values)
          .then(() => {
            alert("Added user");
          })
          .catch((err) => {
            alert("Error");
          });
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form onSubmit={handleSubmit}>
          <img src={Logo} alt="logo" className="image" />
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              value={values.firstName}
              onChange={handleChange}
              name="firstName"
              isValid={touched.firstName && !errors.firstName}
            />
            <Form.Control.Feedback type="valid">
              Looks Good
            </Form.Control.Feedback>
            <Form.Control.Feedback type="inValid" className="invalid">
              {errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastName"
              type="text"
              value={values.lastName}
              onChange={handleChange}
              isValid={touched.lastName && !errors.lastName}
              required
            />
            <Form.Control.Feedback>Looks Good</Form.Control.Feedback>
            <Form.Control.Feedback type="inValid" className="invalid">
              {errors.lastName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="number"
              value={values.phone}
              onChange={handleChange}
              name="phone"
              isValid={touched.phone && !errors.phone}
              required
            />
            <Form.Control.Feedback type="valid">
              Looks Good
            </Form.Control.Feedback>
            <Form.Control.Feedback type="inValid" className="invalid">
              {errors.phone}
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit">
            Add User
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default FormComp;
