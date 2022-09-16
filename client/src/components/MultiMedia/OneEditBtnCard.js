import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { useContext } from "react";
import { BiEdit } from "react-icons/bi"
import Button from 'react-bootstrap/Button';



function OneEditBtnCard({ media }) {
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
        <div className="OneMediaCard-btn">
            {isLoggedIn && <Link to={`/admin/medias/${_id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <Button variant="warning text-white mx-auto mb-sm-3 mb-5" type="link" >
                    <BiEdit style={iconStyle} />&nbsp;&nbsp;&nbsp;Edit
                </Button>
            </Link>}
        </div>
    );
}

export default OneEditBtnCard;