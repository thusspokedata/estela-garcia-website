import React, { useState } from "react";
import { Form, Button, Modal, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ContactPage() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestBody = {
      email: email,
      subject: subject,
      message: message,
    };
    console.log(message);
    axios
      .post("/api/email/send-email", requestBody)
      .then((response) => {
        navigate("/contact");
      })
      .catch((err) => {
        const errorDescription = err.response.data.message;
        setErrorMessage(errorDescription);
      });
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <Container>
      <Row className="col-10">
        <Form action="/api/email/send-email" method="post">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
              value={email}
              id=""
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              placeholder="Subject"
              name="subject"
              value={subject}
              id=""
              onChange={(e) => setSubject(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Write a message</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>
          <Modal.Footer>
            <Button
              variant="dark text-white col-6 mx-auto"
              type="submit"
              onClick={handleSubmit}
            >
              Send
            </Button>
          </Modal.Footer>
        </Form>
      </Row>
    </Container>
  );
}

export default ContactPage;
