import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";



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
 

  return (
    <div>
      <form className='Signup-9' onSubmit={handleSignupSubmit}>

        <div className='container-inner'>
          <label>Title :</label>
          <input type="text" name="title" value={title} onChange={handleTitle} />
        </div>

        <input type="file" onChange={(e) => setImageSelected(e.target.files[0])} />
        <button type='submit'>PLEASE UPLOAD</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>


    </div>

  )
}
export default GalleryPage;