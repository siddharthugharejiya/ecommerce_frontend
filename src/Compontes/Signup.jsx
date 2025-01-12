import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Signup = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    secretkey: "",
    role: ""
  });

  const navigate = useNavigate();

  const change = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!state.role) {
      alert("Please select a valid role.");
      return;
    }
    try {
      const res = await axios.post("http://localhost:9596/form", state);
      console.log(res.data);
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <Form
        className="p-4"
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
          <Form.Select
            name="role"
            value={state.role}
            onChange={change}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </Form.Select>
        </Form.Group>

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

        <Button variant="success" type="submit" className="w-100">
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
