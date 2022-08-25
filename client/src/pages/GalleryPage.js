import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GalleryCard from "./../components/GalleryCard";
import { Nav, Navbar, Container, Card } from "react-bootstrap";




function GalleryPage() {
  const navigate = useNavigate();

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
        axios.post('/api/upload-photos', requestBody)
          .then((response) => {
            navigate("/upload-photos");
          })
          .catch((error) => {
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription);
          })
      })
      .catch(err => console.log(err))
  }


  //display photos
  const [photos, setPhotos] = useState([]);
  const getAllPhotos = () => {
    axios
      .get(`http://localhost:5005/api/upload-photos`)
      .then((response) => setPhotos(response.data))
      .catch((error) => console.log(error));

  };

  useEffect(() => {
    getAllPhotos();
  }, []);




  return (
    <div>
      <form className='p-3' onSubmit={handleSignupSubmit}>

        <div className='p-2'>
          <label className='col-lg-2 col-md-3 col-12'>Photo title (optional):</label>
          <input className='col-lg-5 col-md-5 col-12' type="text" name="title" value={title} onChange={handleTitle} />
        </div>
        <div className='p-2 gallery-upload-function'>
          <input type="file" onChange={(e) => setImageSelected(e.target.files[0])} />
          <button className='col-lg-1 col-md-2 col-3' type='submit'>UPLOAD</button>
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
      <Container className='row p-5 m-auto g-3 px-lg-5'>

        {photos?.map((gallery) => <div className='col-lg-3 col-md-6 col-12'> <GalleryCard key={gallery._id} gallery={gallery} /></div>)}
      </Container>

    </div>

  )
}
export default GalleryPage;