import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import Carousel from 'react-bootstrap/Carousel';



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
        <div className='GalleryOnePhotoPage-landing'> 
          <p>{photo.title}</p>
          <img src={photo.imageUrl} alt={photo.imageUrl} />
        </div>
      )}
    </>
    // <>
    //   {photo && (
    //     <Carousel>
    //       <Carousel.Item>
    //         <img className="d-block w-100" src={photo.imageUrl} alt={photo.imageUrl} />

    //         <Carousel.Caption>
    //           <p>{photo.title}</p>
    //         </Carousel.Caption>
    //       </Carousel.Item>
    //     </Carousel>
    //   )}
    // </>
  );
}

export default GalleryOnePhotoPage;