import React, { useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Form, Button, Modal, Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";

function AddConcert() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [aboutEvent, setAboutEvent] = useState("");
  //   const [date, setDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "estela-eventos");
    data.append("cloud_name", "estela");
    fetch("https://api.cloudinary.com/v1_1/estela/image/upload", {
      method: "post",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        const requestBody = {
          title,
          imageUrl: data.url,
          aboutEvent,
          //   date,
        };
        axios.post("/api/concerts/add-new", requestBody).then((response) => {
          console.log(response);
          if (response) {
            Swal.fire({
              title: "The event was saved",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          }
        });
      })

      .catch((err) => {
        const errorDescription = err.response.data.message;
        setErrorMessage(errorDescription);
      });
    setTitle("");
    setImage("");
    setAboutEvent("");
    // setDate("");
  };
  return (
    <>
      <Helmet>
        <title>Add Concert</title>
      </Helmet>

      <Container className="d-flex justify-content-center mt-3">
        <Row className="col-12 col-sm-12 col-lg-6">
          <Form action="/api/concerts/add-new" method="post">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="title"
                name="title"
                value={title}
                id=""
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                placeholder="Subject"
                name="subject"
                value={aboutEvent}
                rows={4}
                id=""
                onChange={(e) => setAboutEvent(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              {/* <Form.Label>Subject</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              /> */}
              <label className="mt-3" htmlFor="pet-select">
                Image:
              </label>
              <Form.Control
                type="file"
                placeholder="Add an Image"
                autoFocus
                // value={image}
                className="mt-1"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Form.Group>
            <Modal.Footer>
              <Button
                variant="dark text-white col-12 mx-auto"
                type="submit"
                onClick={handleSubmit}
              >
                Send
              </Button>
            </Modal.Footer>
          </Form>
        </Row>
      </Container>
    </>
  );
}
export default AddConcert;
