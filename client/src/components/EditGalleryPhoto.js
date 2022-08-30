import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";


function EditGalleryPhoto(props) {
  const [title, setTitle] = useState("");
  
  const { photoId } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    axios
      .get(`/api/photos/${photoId}`)
      .then((response) => {
        const onePhoto = response.data;
        setTitle(onePhoto.title);
        // navigate(`/photos/`)

      })
      .catch((error) => console.log(error));
    
  }, [photoId]);
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title };

    axios
      .put(`/api/photos/${photoId}`, requestBody)
      .then((response) => {
        navigate("/photos");

      });
  };
  
  
  const deletePhoto = () => {
    
    axios
      .delete(`/api/photos/${photoId}`)
      .then(() => {
        navigate("/photos");
      })
      .catch((err) => console.log(err));
  };  

  
  return (
    <div>
      <h3>Edit the title</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        


        <button type="submit">Update Title</button>
      </form>

      <button onClick={deletePhoto}>Delete Photo</button>
    </div>
  );
}

export default EditGalleryPhoto;
