import { Link } from "react-router-dom";

function PhotoCard({ gallery }) {
    const { title, imageUrl, _id } = gallery


    return (
        <>
            <Link to={`/photos/${_id}`}  >
                    <img src={imageUrl} alt={imageUrl} height='200' width='290' style={{objectFit:'cover'}}/>
                    <p>{title}</p>
            </Link >
        </>



    );
}

export default PhotoCard;