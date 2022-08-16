import React from "react";
import { getAuthToken } from "../Service/localStorage";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  let token = "fdgfd";

  return token ? children : <Navigate to="/" />;
}
export default PrivateRoute;
