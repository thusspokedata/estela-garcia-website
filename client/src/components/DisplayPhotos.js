import axios from "axios";
import React, { useState, useEffect } from 'react'
import { Container } from "react-bootstrap";
import PhotoCard from "./PhotoCard"
// import UploadPhotos from "./UploadPhotos"


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



    return (
        <>
            {/* <UploadPhotos refreshPhotos={getAllPhotos} /> */}

            <Container className='row p-5 m-auto g-3 px-lg-5'>
                {photos?.map((gallery) => <div className='col-lg-3 col-md-6 col-12' key={gallery._id}>
                    <PhotoCard key={gallery._id} gallery={gallery} /></div>)}
            </Container>
        </>
    )


}

export default DisplayPhotos;