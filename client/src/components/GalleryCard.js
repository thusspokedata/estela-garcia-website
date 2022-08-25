import { Link } from "react-router-dom";

function GalleryCard({ gallery }) {
    const { title, imageUrl, _id } = gallery


    return (
        <>
            <Link to={`/upload-photos/${_id}`}  >
                    <img src={imageUrl} alt={imageUrl} height='200' width='290' style={{objectFit:'cover'}}/>
                    <p>{title}</p>
            </Link >
        </>



    );
}

export default GalleryCard;