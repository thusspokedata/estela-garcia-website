import { Link } from "react-router-dom";

function PhotoCard({ gallery }) {
    const { title, imageUrl, _id } = gallery

    


    return (
        <div>
            <Link to={`/photos/${_id}`} >
                    <img src={imageUrl} alt={imageUrl} height='200' width='290' style={{objectFit:'cover'}}/>
                    <p>{title}</p>
            </Link >
        </div>



    );
}

export default PhotoCard;