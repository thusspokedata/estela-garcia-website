import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import { RiDeleteBinLine } from "react-icons/ri"
import { TbCloudUpload } from "react-icons/tb"
import { Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

function EditGalleryPhotoPage() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { photoId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/admin/photos/${photoId}`)
      .then((response) => {
        const onePhoto = response.data;
        setTitle(onePhoto.title);
        setImageUrl(onePhoto.imageUrl);
      })
      .catch((error) => console.log(error));
  }, [photoId]);


  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title };
    axios
      .put(`/api/admin/photos/${photoId}`, requestBody)
      .then((response) => {
        if (response) {
          Swal.fire({
            icon: "success",
            title: "Your change is saved!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/admin/photos");
      });
  };

  const deletePhoto = () => {

    axios
      .delete(`/api/admin/photos/${photoId}`)
      .then((response) => {
        if (response) {
          Swal.fire({
            icon: "success",
            title: "Your photo is deleted!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/admin/photos");
      })
      .catch((err) => console.log(err));
  };

  const iconStyle = { color: "white", fontSize: "1.5em" }

  return (
    <>
      <Helmet>
        <title>Edit Gallery</title>
      </Helmet>
      <Container className="d-flex justify-content-center mt-3 align-items-center EditGalleryPhotoPage-md">
        <Row className="col-12 col-sm-12 col-lg-6 m-auto">
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title of the Photo</Form.Label>
              <Form.Control type="text" placeholder={title} onChange={(e) => setTitle(e.target.value)} />
              <Form.Text className="text-muted">
                You could leave it empty, if you don't want to add title of the photo.
              </Form.Text>
            </Form.Group>
            <Button variant="dark text-white col-12 mx-auto mb-sm-3 mb-5" type="submit" >
              <TbCloudUpload style={iconStyle} />&nbsp;&nbsp;&nbsp;Update Title
            </Button>

            <Button variant="danger text-white col-12 col-lg-6 mx-auto" type="submit" onClick={deletePhoto}>
              <RiDeleteBinLine style={iconStyle} />&nbsp;&nbsp;&nbsp;Delete Photo
            </Button>

          </Form>
        </Row>
      </Container>
    </>
  );
}

export default EditGalleryPhotoPage;