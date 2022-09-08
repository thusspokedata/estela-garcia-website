import { Link } from "react-router-dom";


function OnePhotoCard({ gallery }) {
    const { _id, title, imageUrl } = gallery

    return (
        <div >
            <Link to={`/admin/photos/${_id}`} style={{textDecoration:'none',color:'black' }}>
                    <img src={imageUrl}  alt={imageUrl} height='200' width='290' style={{ objectFit: 'cover' }}/>
                    <p style={{padding:'6px' }}>{title}</p>
            </Link >
        </div >
    );
}

export default OnePhotoCard;