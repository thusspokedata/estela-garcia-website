import axios from "axios";
import React, { useState, useEffect } from 'react'
import { Container } from "react-bootstrap";
// import PhotoCard from "./PhotoCard"
// import UploadPhotos from "./UploadPhotos"
// import { Link } from "react-router-dom";
import Modal from "./Modal";


function DisplayPhotos(props) {
    const [photos, setPhotos] = useState([]);
    const getAllPhotos = () => {
        axios
            .get(`/api/photos`)
            .then((response) => setPhotos(response.data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getAllPhotos();
    }, []);

    const [clickedImg, setClickedImg] = useState(null);
    const [clickedImgTitle, setClickedImgTitle] = useState(null);

    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClick = (gallery, index) => {
        // console.log('點擊了')  ok
        setCurrentIndex(index);
        setClickedImg(gallery.imageUrl);
        setClickedImgTitle(gallery.title);

        // console.log(gallery.imageUrl)  ok
        // console.log(index)  ok

    };
    const handelRotationRight = () => {
        // console.log('往右的箭頭？？？？') ok

        const totalLength = photos.length;

        // console.log(totalLength) ok

        if (currentIndex + 1 >= totalLength) {
            // console.log('目前的index')
            setCurrentIndex(0);
            // console.log(setCurrentIndex(0)) undefined
            const newUrl = photos[0].imageUrl;
            const newTitle = photos[0].title;

            console.log('photos[0]是什麼',photos[0])
            setClickedImg(newUrl);
            setClickedImgTitle(newTitle);

            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = photos.filter((item) => {
            return photos.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].imageUrl;
        const newItemTitle = newUrl[0].title;

        setClickedImg(newItem);
        setClickedImgTitle(newItemTitle);

        setCurrentIndex(newIndex);
    };

    const handelRotationLeft = () => {
        const totalLength = photos.length;

        if (currentIndex === 0) {
          setCurrentIndex(totalLength - 1);
          const newUrl = photos[totalLength - 1].imageUrl;
          const newTitle = photos[totalLength - 1].title;

          setClickedImg(newUrl);
          setClickedImgTitle(newTitle);

          return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = photos.filter((item) => {
          return photos.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].imageUrl;
        const newItemTitle = newUrl[0].title;

        setClickedImg(newItem);
        setClickedImgTitle(newItemTitle);

        setCurrentIndex(newIndex);
      };
    




    return (
        <>
            {/* <UploadPhotos refreshPhotos={getAllPhotos} /> */}

            <Container className='row p-5 m-auto g-3 px-lg-5'>
                {photos?.map((gallery, index) => <div className='col-xl-3 col-lg-4 col-md-6 col-12' key={gallery._id}>
                    {/* <PhotoCard key={gallery._id} gallery={gallery} /> */}
                    {/* <Link to={`/photos/${gallery._id}`} > */}
                    <img src={gallery.imageUrl} alt={gallery.imageUrl} height='200' width='290' style={{ objectFit: 'cover' }} onClick={() => handleClick(gallery, index)} />
                    <h2>{gallery.title}</h2>
                    {/* </Link > */}
                </div>)}
            </Container>


            {clickedImg && <Modal clickedImg={clickedImg} clickedImgTitle={clickedImgTitle} handelRotationRight={handelRotationRight} handelRotationLeft={handelRotationLeft} setClickedImg={setClickedImg}/>}

        </>
    )


}

export default DisplayPhotos;