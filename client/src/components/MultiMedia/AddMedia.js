import { useState } from "react";
import React from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Form, Button, Modal, Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";

function AddMedia(props) {
    const [title, setTitle] = useState("");
    const [youTubeSrc, setYouTubeSrc] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const requestBody = { title, youTubeSrc }

        axios.post("/api/medias", requestBody)
            .then((response) => {
                if (response) {
                    Swal.fire({
                        icon: "success",
                        title: "Your media has been saved!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
                setTitle('')
                setYouTubeSrc('')
                props.refreshPhotos();
            })
    };

    return (
        <>
            <Helmet>
                <title>Add Media</title>
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
                            <Form.Label>YouTube Link</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="paste the YouTube link here"
                                name="title"
                                value={youTubeSrc}
                                id=""
                                onChange={(e) => setYouTubeSrc(e.target.value)}
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
export default AddMedia;
