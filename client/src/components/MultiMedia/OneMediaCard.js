import { useState } from "react";
// import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

// import { AuthContext } from "../../context/auth";
// import { useContext } from "react";
// import { BiEdit } from "react-icons/bi"
// import Button from 'react-bootstrap/Button';

// import OneEditBtnCard from "./OneEditBtnCard"

function OneMediaCard({ media }) {
    // const { isLoggedIn } = useContext(AuthContext);

    const { _id, title, youTubeSrc } = media
    const [url, setUrl] = useState('')
    const getUrl = (theYouTubeUrl) => {
        return theYouTubeUrl.replace('watch?v=', 'embed/')
    }
    useState(() => {
        setUrl(getUrl(youTubeSrc))
    }, [youTubeSrc])

    // const iconStyle = { color: "white", fontSize: "1.5em" }


    return (
        <Container>

            {/* <div className="OneMediaCard-edit-link"> */}
            <div>
                <h1 className="mt-5" style={{ padding: '6px', fontFamily: 'Caveat' }}>{title}</h1>
            </div>


            <div className="ratio ratio-16x9 mb-5">
                <iframe
                    src={url}
                    title="YouTube video player"
                    frameBorder="0"
                    allowFullScreen>
                </iframe>
            </div>
        </Container >
    );
}

export default OneMediaCard;