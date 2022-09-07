import axios from "axios";
import React, { useState, useEffect } from 'react'
import { Container } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { Helmet } from "react-helmet";
import { OnePhotoCard, AddMedia } from "../index"

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

            {/* <AddMedia refreshPhotos={getAllMedias} /> */}
            <AddMedia />

            <Container className='row m-auto g-3 px-lg-5' style={{ paddingTop: '6vh' }}>
                {/* {isLoggedIn && medias?.map((media) => { <div className='col-xl-3 col-lg-4 col-md-6 col-12' key={media._id}>{media.youTubeSrc}</div>})} */}

                {isLoggedIn && medias?.map(function (media) {

                    // let a = 3

                    // let targetStr = media.youTubeSrc
                    // let regEx = /watch\?v\=/
                    // targetStr.replace(regEx, 'embed/')
                    // targetStr[0].replace('watch?v=', 'embed/')

                //   console.log(media.slice(0, 5))

                    // 'embed/' = 'watch?v='
                    // console.log(response.data.multiMedia.youTubeSrc);


                    return <div className='col-xl-3 col-lg-4 col-md-6 col-12' key={media._id}>{media}</div>
                })}

            </Container>
        </>
    )
}

export default DisplayMediaAdmin;