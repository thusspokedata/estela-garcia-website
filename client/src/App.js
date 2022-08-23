import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import NavBar from "./components/Navbar";
import ContactPage from "./components/ContactPage";
import GalleryPage from "./pages/GalleryPage.js";



function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload-photos" element={<GalleryPage />} />

        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
