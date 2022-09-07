import axios from "axios";
import React, { useState, useEffect } from 'react'
import { Container } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { Helmet } from "react-helmet";
import { OnePhotoCard,UploadPhotos,PhotoLightBox } from "../index"



function DisplayPhotos(props) {
    const { isLoggedIn } = useContext(AuthContext);

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
        setCurrentIndex(index);
        setClickedImg(gallery.imageUrl);
        setClickedImgTitle(gallery.title);
    };
    const handelRotationRight = () => {
        const totalLength = photos.length;
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = photos[0].imageUrl;
            const newTitle = photos[0].title;
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
            <Helmet>
                <title>Estela García | Gallery</title>
            </Helmet>

            {isLoggedIn && (<UploadPhotos refreshPhotos={getAllPhotos} />)}
            <Container className='row m-auto g-3 px-lg-5' style={{ paddingTop: '6vh' }}>
                {isLoggedIn && photos?.map((gallery, index) => <div className='col-xl-3 col-lg-4 col-md-6 col-12' key={gallery._id}>
                    <OnePhotoCard key={gallery._id} gallery={gallery} />
                </div>)}
            </Container>


            <Container className='row m-auto g-3 px-lg-5' style={{ paddingTop: '1vh' }}>
                {!isLoggedIn && photos?.map((gallery, index) => <div className='col-xl-3 col-lg-4 col-md-6 col-12' key={gallery._id}>
                    <img src={gallery.imageUrl} alt={gallery.imageUrl} height='200' width='290' style={{ objectFit: 'cover' }} onClick={() => handleClick(gallery, index)} />
                </div>)}
            </Container>
            {!isLoggedIn && clickedImg && <PhotoLightBox clickedImg={clickedImg} clickedImgTitle={clickedImgTitle} handelRotationRight={handelRotationRight} handelRotationLeft={handelRotationLeft} setClickedImg={setClickedImg} />}
        </>
    )
}

export default DisplayPhotos;