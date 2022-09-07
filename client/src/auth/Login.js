import axios from "axios";
import React, { useState, useContext } from "react";
import { Button, Form, Container, Row, Modal } from "react-bootstrap";
import { AuthContext } from "../context/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, verifyStoredToken } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      email,
      password,
    };
    axios
      .post("/api/auth/login", requestBody)
      .then((response) => {
        const token = response.data.authToken;
        Swal.fire("You are logged in");
        storeToken(token);
        // console.log(token)
        verifyStoredToken().then(() => {
          navigate("/");
        });
      })
      .catch((err) => {
        const errorDescription = err.response.data.message;
        setErrorMessage(errorDescription);
      });
    setPassword("");
    setEmail("");
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="formular fw-bold fs-4">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                className="mt-1"
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                className="mt-3"
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Modal.Footer>
              <Button
                variant="dark text-white col-6 mx-auto border-0 rounded-pill"
                type="submit"
                onClick={handleClose}
              >
                Login
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
      {errorMessage && <h5>{errorMessage}</h5>}
    </>
  );
}

export default Login;
