import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function OneMediaCard({ media }) {
    const { _id, title, youTubeSrc } = media
    const [url, setUrl] = useState('')
    const getUrl = (theYouTubeUrl) => {
        return theYouTubeUrl.replace('watch?v=', 'embed/')
    }
    useState(() => {
        setUrl(getUrl(youTubeSrc))
    }, [youTubeSrc])

    return (
        <Container>
            <Link to={`/medias/${_id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <h1 className="mt-5" style={{ padding: '6px', fontFamily: 'Caveat' }}>{title}</h1>
                <div className="ratio ratio-16x9 mb-5">
                    <iframe
                        src={url}
                        title="YouTube video player"
                        frameborder="0"
                        allowfullscreen>
                    </iframe>
                </div>
            </Link >
        </Container >
    );
}

export default OneMediaCard;