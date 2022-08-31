// import UploadPhotos from "./../components/UploadPhotos";
import DisplayPhotos from "./../components/DisplayPhotos";
import { useContext } from "react";
import { AuthContext } from "./../context/auth";

function GalleryPage() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>

      {/* {isLoggedIn && (<UploadPhotos />)} */}
      {/* {!isLoggedIn && (<UploadPhotos />)} */}


      {!isLoggedIn && (<DisplayPhotos />)}

    </div>

  )
}
export default GalleryPage;