import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import NavBar from "./components/Navbar";
import ContactPage from "./components/ContactPage";
import GalleryPage from "./pages/GalleryPage.js";
import GalleryOnePhotoPage from "./pages/GalleryOnePhotoPage.js";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photos" element={<GalleryPage />} />
        <Route path="/photos/:photoId" element={<GalleryOnePhotoPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
