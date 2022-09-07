import axios from "axios";
import React, { useState, useEffect } from 'react'
import { Container } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { Helmet } from "react-helmet";
import { OnePhotoCard, UploadPhotos } from "../index"

function DisplayPhotosAdmin(props) {
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

    return (
        <>
            <Helmet>
                <title>Edit My Gallery</title>
            </Helmet>

            <UploadPhotos refreshPhotos={getAllPhotos} />
            <Container className='row m-auto g-3 px-lg-5' style={{ paddingTop: '6vh' }}>
                {isLoggedIn && photos?.map((gallery) => <div className='col-xl-3 col-lg-4 col-md-6 col-12' key={gallery._id}>
                    <OnePhotoCard key={gallery._id} gallery={gallery} />
                </div>)}
            </Container>
        </>
    )
}

export default DisplayPhotosAdmin;