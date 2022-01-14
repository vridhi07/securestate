import React from "react";
// import { getAuthToken } from "../Services/localStorage";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  // let token = getAuthToken();
  let token = localStorage.getItem("token");

  return token ? children : <Navigate to="/login" />;
}
export default PrivateRoute;
