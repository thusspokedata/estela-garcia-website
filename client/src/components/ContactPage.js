import React from "react";
import { Form, Button, Modal, Container, Row } from "react-bootstrap";

function ContactPage() {
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
              id=""
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              placeholder="Subject"
              name="subject"
              id=""
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Write a message</Form.Label>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>
          <Modal.Footer>
            <Button
              variant="dark text-white col-6 mx-auto"
              type="submit"
              //   onClick={handleClose}
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
