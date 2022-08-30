import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import NavBar from "./components/Navbar";
import ContactPage from "./components/ContactPage";
import GalleryPage from "./pages/GalleryPage.js";
import Footer from "./components/Footer";
import Login from "./auth/Login";
import EditGalleryPhoto from "./components/EditGalleryPhoto"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photos" element={<GalleryPage />} />
        <Route path="/photos/edit/:photoId" element={<EditGalleryPhoto />} />           
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
