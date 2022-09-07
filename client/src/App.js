import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import { HomePage, GalleryPage, AddGalleryPage, EditGalleryPhotoPage, AddMultiMediaPage, Concerts } from "./pages";
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
        <Route
          path="/"
          element={
            <ProtectedRoute redirectTo="/">
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/photos"
          element={
            <ProtectedRoute redirectTo="/">
              <GalleryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-photos"
          element={
            <ProtectedRoute redirectTo="/">
              <AddGalleryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/photos/:photoId"
          element={
            <ProtectedRoute redirectTo="/">
              <EditGalleryPhotoPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/medias"
          element={
            <ProtectedRoute redirectTo="/">
              <AddMultiMediaPage />
            </ProtectedRoute>
          }
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/concerts" element={<Concerts />} />
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
