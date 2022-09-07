import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import {
  HomePage,
  GalleryPage,
  AddGalleryPage,
  EditGalleryPhotoPage,
  MultiMediaPage,
  AddMultiMediaPage,
  Concerts,
} from "./pages";
import {
  NavBar,
  ContactPage,
  AddConcert,
  Footer,
  ProtectedRoute,
} from "./components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photos" element={<GalleryPage />} />
        <Route path="/photos/:photoId" element={<EditGalleryPhotoPage />} />
        <Route path="/medias" element={<MultiMediaPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/concerts" element={<Concerts />} />
        <Route
          path="/admin/photos"
          element={
            <ProtectedRoute redirectTo="/">
              <AddGalleryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/medias"
          element={
            <ProtectedRoute redirectTo="/">
              <AddMultiMediaPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/concerts/add-new"
          element={
            <ProtectedRoute redirectTo="/">
              <AddConcert />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
