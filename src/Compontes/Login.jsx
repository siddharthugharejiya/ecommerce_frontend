import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Swal from 'sweetalert2';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:9596/login`, state);
      const { token } = response.data;
      const decoded = jwtDecode(token);

      localStorage.setItem("Token", token);
      localStorage.setItem("login", true);
      localStorage.setItem("UserId", decoded.userId);
      localStorage.setItem("UserRole", decoded.userRole);

      const userRole = decoded.userRole;
      if (userRole === "admin") {
        navigate("/add");
      } else if (userRole === "user") {
        navigate("/");
      }

      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: 'You have successfully logged in.',
        confirmButtonText: 'Proceed',
      });

    } catch (error) {
      console.error("Login failed", error);
      Swal.fire({
        icon: 'error',
        title: 'Login Failed!',
        text: 'Please check your credentials and try again.',
        confirmButtonText: 'Retry',
      });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{height:"75vh"}}>
      <Form
        className="border border-1 p-4 p-md-5 shadow"
        style={{ width: "90%", maxWidth: "500px" }}
        onSubmit={handleSubmit}
      >
        <Row className="justify-content-center align-items-center">
          <Col xs={6} className="mb-4 d-flex justify-content-center align-items-center">
            <img src="./image/logo.png" alt="Logo" className="img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="mb-3 text-center">
            <Form.Label>Email</Form.Label>
            <div className='d-flex justify-content-center align-items-center'>
            <Form.Control
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
            </div>
           
          </Col>
          <Col xs={12} className="mb-3 text-center">
            <Form.Label>Password</Form.Label>
            <div className='d-flex justify-content-center align-items-center'>

            <Form.Control
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              placeholder="Enter password"
              />
              </div>
          </Col>
        </Row>
        <div className='d-flex justify-content-center align-items-center'>

        <Button
          className="btn btn-dark w-75"
          type="submit"
          >
          Submit
        </Button>
          </div>
      </Form>
    </div>
  );
};

export default Login;
