import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Swal from "sweetalert2";

const Signup = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    secretkey: "",
    role: "",
  });

  const navigate = useNavigate();

  const change = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!state.role) {
      Swal.fire("Error", "Please select a valid role.", "error"); 
      return;
    }
    try {
      const res = await axios.post("https://ecommerce-backend-zlrs.onrender.com/form", state);
      console.log(res.data)
      console.log(res);
      
      Swal.fire("Success", "Account created successfully!", "success")
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
      Swal.fire("Error", "Something went wrong. Please try again.", "error"); 
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <Form
        className="shadow p-5 d-flex flex-column justify-content-center"
        style={{ width: "90%", maxWidth: "500px" }}
        onSubmit={submit}
      >
        <Row className="justify-content-center align-items-center mb-4">
          <Col xs={6}>
            <img src="./image/logo.png" alt="Logo" className="img-fluid" />
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter username"
            value={state.username}
            onChange={change}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={state.email}
            onChange={change}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            value={state.password}
            onChange={change}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Role</Form.Label>
          <div className="d-flex">
            <Form.Check
              type="radio"
              label="Admin"
              name="role"
              value="admin"
              checked={state.role === "admin"}
              onChange={change}
            />
            <Form.Check
              type="radio"
              label="User"
              name="role"
              value="user"
              className="ms-3"
              checked={state.role === "user"}
              onChange={change}
            />
          </div>
        </Form.Group>

        {state.role === "admin" && (
          <Form.Group className="mb-3">
            <Form.Label>Secret Key</Form.Label>
            <Form.Control
              type="text"
              name="secretkey"
              placeholder="Enter secret key"
              value={state.secretkey}
              onChange={change}
            />
          </Form.Group>
        )}

        <Button variant="dark" type="submit" className="w-50">
          Submit
        </Button>

        <Row className="mt-3">
          <Col className="d-flex justify-content-end">
            <Button variant="link" onClick={() => navigate("/login")}>
              Already have an account? Login
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Signup;
