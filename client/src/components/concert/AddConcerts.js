import React, { useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Form, Button, Modal, Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";

function AddConcert() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [aboutEvent, setAboutEvent] = useState("");
  const [address, setAddress] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [date, setDate] = useState("");
  const [setErrorMessage] = useState("");

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
        console.log(`aqui deberia haber una date: ${date}`);
        const requestBody = {
          title,
          address,
          addressNumber,
          zipCode,
          city,
          imageUrl: data.url,
          publicId: data.public_id,
          aboutEvent,
          date,
        };
        axios.post("/api/concerts/add-new", requestBody).then((response) => {
          console.log(response);
          if (response) {
            Swal.fire({
              icon: "success",
              title: "The event has been saved",
              showConfirmButton: false,
              timer: 1000,
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
    setAddress("");
    setAddressNumber("");
    setCity("");
    setZipCode("");
    setDate("");
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
              <div className="row">
                <div className="col-12 col-sm-7">
                  <Form.Label>Concert Day</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="col-12 col-sm-5">
                  <label className="mt-1" htmlFor="pet-select">
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
                </div>
              </div>

              <div className="row">
                <div className="col-8">
                  <label
                    htmlFor="recipient-name"
                    className="col-form-label mt-2"
                  >
                    Address:
                  </label>
                  <Form.Control
                    type="text"
                    placeholder="address"
                    value={address}
                    className="mt-1 col-6"
                    name="address"
                    onChange={(e) => setAddress(e.target.value)}
                    autoFocus
                  />
                </div>
                <div className="col-4">
                  <label
                    htmlFor="recipient-name"
                    className="col-form-label mt-2"
                  >
                    Number:
                  </label>
                  <Form.Control
                    type="text"
                    placeholder="Number"
                    value={addressNumber}
                    name="addressNumber"
                    className="mt-1"
                    onChange={(e) => setAddressNumber(e.target.value)}
                    autoFocus
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label
                    htmlFor="recipient-name"
                    className="col-form-label mt-2"
                  >
                    Zip Code:
                  </label>
                  <Form.Control
                    type="text"
                    placeholder="Zip code"
                    value={zipCode}
                    name="zipCode"
                    className="mt-1"
                    onChange={(e) => setZipCode(e.target.value)}
                    autoFocus
                  />
                </div>
                <div className="col">
                  <label
                    htmlFor="recipient-name"
                    className="col-form-label mt-2"
                  >
                    City:
                  </label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    value={city}
                    className=""
                    name="city"
                    onChange={(e) => setCity(e.target.value)}
                    autoFocus
                  />
                </div>
              </div>
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
