import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function GalleryOnePhotoPage(props) {
  const [photo, setPhoto] = useState(null);
  const { photoId } = useParams();
  const getPhoto = () => {
    axios
      .get(`http://localhost:5005/api/photos/${photoId}`)
      .then((response) => {
        // const onePhoto = response.data;
        setPhoto(response.data);
        // console?.log(response.data)
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPhoto();
  }, []);

  return (
    <>
    

      {photo && (
        <>
          <p>{photo.title}</p>
          <img src={photo.imageUrl} alt={photo.imageUrl} />
        </>
      )}

    </>
  );
}

export default GalleryOnePhotoPage;