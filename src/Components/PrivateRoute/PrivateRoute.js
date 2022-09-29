import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../Firebase/firebase.init";

const PrivateRoute = ({ children }) => {
  let location = useLocation();
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <p>Loading.....</p>;
  }

  return user ? (
    children
  ) : (
    <Navigate to="/logIn" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
