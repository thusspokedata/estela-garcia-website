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



function EditMultiMediaPage(props) {
  const [title, setTitle] = useState("");
  const [youTubeSrc, setYouTubeSrc] = useState("");
  const { mediaId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/admin/medias/${mediaId}`)
      .then((response) => {
        const oneMedia = response.data;
        setTitle(oneMedia.title);
        setYouTubeSrc(oneMedia.youTubeSrc);
      })
      .catch((error) => console.log(error));
  }, [mediaId]);


  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title };
    axios
      .put(`/api/admin/medias/${mediaId}`, requestBody)
      .then((response) => {
        if (response) {
          Swal.fire({
            icon: "success",
            title: "Your media title is changed!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/admin/medias");
      });
  };

  const deletePhoto = () => {

    axios
      .delete(`/api/admin/medias/${mediaId}`)
      .then((response) => {
        if (response) {
          Swal.fire({
            icon: "success",
            title: "Your media link is deleted!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/admin/medias");
      })
      .catch((err) => console.log(err));
  };

  const iconStyle = { color: "white", fontSize: "1.5em" }

  return (
    <>
      <Helmet>
        <title>Edit Muilt-Media</title>
      </Helmet>
      <Container className="d-flex justify-content-center mt-3 align-items-center EditGalleryPhotoPage-md">
        <Row className="col-12 col-sm-12 col-lg-6 m-auto">
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title of the Media</Form.Label>
              <Form.Control type="text" placeholder={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
            <Button variant="dark text-white col-12 mx-auto mb-sm-3 mb-5" type="submit" >
              <TbCloudUpload style={iconStyle} />&nbsp;&nbsp;&nbsp;Update Title
            </Button>

            <Button variant="danger text-white col-12 col-lg-6 mx-auto" type="submit" onClick={deletePhoto}>
              <RiDeleteBinLine style={iconStyle} />&nbsp;&nbsp;&nbsp;Delete Media
            </Button>

          </Form>
        </Row>
      </Container>
    </>
  );
}

export default EditMultiMediaPage;