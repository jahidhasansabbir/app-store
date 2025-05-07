import React, { use } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const {user} = use(AuthContext)
  

  if (!user) return <Navigate to="/login"></Navigate>;
  else {
    return children;
  }
};

export default PrivateRoute;
