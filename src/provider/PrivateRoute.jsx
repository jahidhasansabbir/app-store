import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const {user} = use(AuthContext)
  const location = useLocation()


  if (!user) return <Navigate state={location?.pathname} to="/login"></Navigate>;
  else {
    return children;
  }
};

export default PrivateRoute;
