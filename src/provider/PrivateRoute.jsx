import React from "react";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const user = true;

  if (!user) return <Navigate to="/my-profile"></Navigate>;
  else {
    return children;
  }
};

export default PrivateRoute;
