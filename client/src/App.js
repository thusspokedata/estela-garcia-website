import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import NavBar from "./components/Navbar";
import ContactPage from "./components/ContactPage";
// import GalleryPage from "./components/GalleryPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/gallery" element={<GalleryPage />} /> */}

        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
