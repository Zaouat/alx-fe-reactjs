import React from "react";
import { Navigate } from "react-router-dom";

// Mock hook for authentication status
const useAuth = () => {
  // Logic to determine if the user is authenticated
  return { isAuthenticated: false };
};

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
