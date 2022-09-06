import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import { Navigate } from "react-router-dom";

import Spinner from "react-bootstrap/Spinner";

export default function ProtectedRoute({ children, redirectTo }) {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  if (isLoading)
    return (
      <Spinner animation="border" role="status" variant="info">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
}
