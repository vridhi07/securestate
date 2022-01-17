import React from "react";
import { Navigate } from "react-router-dom";
import { getAuthToken, getRole } from "../Service/localStorage";
function AdminPrivateRoute({ children }) {
  let token = getAuthToken();
  let role = getRole();
  if (token && role === "admin") {
    return children;
  } else {
    return <Navigate to="/dashboard" />;
  }
}
export default AdminPrivateRoute;
