import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import { RiDeleteBinLine } from "react-icons/ri"
import { GrUpdate } from "react-icons/gr"


function EditGalleryPhoto(props) {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { photoId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/photos/${photoId}`)
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
      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit"><GrUpdate />&nbsp;Update Title</button>
      </form>

      <img src={imageUrl} alt={imageUrl} height='200' width='290' style={{ objectFit: 'cover' }} />


      <button onClick={deletePhoto} style={{ display: 'flex', alignItems: 'center' }}><RiDeleteBinLine />&nbsp;Delete Photo</button>
    </div>
  );
}

export default EditGalleryPhoto;