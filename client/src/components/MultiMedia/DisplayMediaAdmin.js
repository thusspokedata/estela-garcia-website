import axios from "axios";
import React, { useState, useEffect } from 'react'
import { Container } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { Helmet } from "react-helmet";
import { OneMediaCard, AddMedia } from "../index"

function DisplayMediaAdmin(props) {
    const { isLoggedIn } = useContext(AuthContext);
    const [medias, setMedias] = useState([]);
    const getAllMedias = () => {
        axios
            .get(`/api/medias`)
            .then((response) => setMedias(response.data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getAllMedias();
    }, []);

    return (
        <>
            <Helmet>
                <title>Edit Multi-Media</title>
            </Helmet>
            <AddMedia refreshPhotos={getAllMedias}/>
            <Container className='row m-auto g-3 px-lg-5' style={{ paddingTop: '2vh',paddingBottom:"16vh" }}>
                {isLoggedIn && medias?.map((media) => <OneMediaCard key={media._id} media={media} />)}
            </Container>
        </>
    )
}

export default DisplayMediaAdmin;