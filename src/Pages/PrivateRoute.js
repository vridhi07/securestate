import React from "react";
import { getAuthToken } from "../constantData/localStorage";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  let token = getAuthToken();

  return token ? children : <Navigate to="/login" />;
}
export default PrivateRoute;
