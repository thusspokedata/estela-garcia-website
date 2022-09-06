import axios from "axios";
import React, { useState } from 'react'
import { Form, Button, Modal, Container, Row } from "react-bootstrap";
import { TbUpload } from "react-icons/tb"

function UploadPhotos(props) {
    const [imageSelected, setImageSelected] = useState('')
    const [title, setTitle] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
    const handleTitle = (e) => setTitle(e.target.value);

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append("file", imageSelected)
        data.append("upload_preset", "estela-garcia-website")
        data.append("cloud_name", "dsy2gebem")
        fetch("https://api.cloudinary.com/v1_1/dsy2gebem/image/upload", {
            method: "post",
            body: data
        })
            .then(response => response.json())
            .then(data => {
                const requestBody = { title, imageUrl: data.url };
                axios.post('/api/photos', requestBody)
                    .then((response) => {
                        alert('Your photo is successfully uploaded!')
                        setImageSelected('')
                        setTitle('')
                        props.refreshPhotos();
                    })
                    .catch((error) => {
                        const errorDescription = error.response.data.message;
                        setErrorMessage(errorDescription);
                    })
            })
            .catch(err => console.log(err))
    }

    return (

        <Container className="d-flex justify-content-center mt-3">
            <Row className="col-12 col-sm-12 col-lg-6">
                <Form onSubmit={handleSignupSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Photo Title (optional):</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Discribe the photo..."
                            name="title"
                            value={title}
                            onChange={handleTitle}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="file" placeholder="Choose your file..." onChange={(e) => setImageSelected(e.target.files[0])}/>
                    </Form.Group>
                
                    <Modal.Footer>
                        <Button variant="dark text-white col-12 mx-auto" type="submit">
                           <TbUpload/>&nbsp;&nbsp;&nbsp;Upload
                        </Button>
                    </Modal.Footer>
                </Form>
            </Row>
        </Container>

    );
}

export default UploadPhotos;