import React from "react";
import { Navigate } from "react-router-dom";

function AdminPrivateRoute({ children }) {
  // let token = getAuthToken();
  let token = localStorage.getItem("Auth Token");
  let role = "Admin";
  if (token && role === "Admin") {
    return children;
  } else {
    return <Navigate to="/dashboard" />;
  }
}
export default AdminPrivateRoute;
