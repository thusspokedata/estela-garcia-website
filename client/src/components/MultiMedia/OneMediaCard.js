import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import { AuthContext } from "../../context/auth";
import { useContext } from "react";
import { BiEdit } from "react-icons/bi"
import Button from 'react-bootstrap/Button';



function OneMediaCard({ media }) {
    const { isLoggedIn } = useContext(AuthContext);

    const { _id, title, youTubeSrc } = media
    const [url, setUrl] = useState('')
    const getUrl = (theYouTubeUrl) => {
        return theYouTubeUrl.replace('watch?v=', 'embed/')
    }
    useState(() => {
        setUrl(getUrl(youTubeSrc))
    }, [youTubeSrc])

    const iconStyle = { color: "white", fontSize: "1.5em" }


    return (
        <Container>

            <div className="OneMediaCard-edit-link">
                <div className="OneMediaCard-btn">
                    {isLoggedIn && <Link to={`/admin/medias/${_id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <Button variant="warning text-white mx-auto mb-sm-3 mb-5" type="link" >
                            <BiEdit style={iconStyle} />&nbsp;&nbsp;&nbsp;Edit
                        </Button>
                    </Link>}
                </div>

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