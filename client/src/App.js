import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import { HomePage, GalleryPage, EditGalleryPhotoPage } from "./pages";
import { NavBar, ContactPage, AddConcert, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/photos" element={<GalleryPage />} />
        <Route path="/photos/:photoId" element={<EditGalleryPhotoPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/concerts/add-new" element={<AddConcert />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
