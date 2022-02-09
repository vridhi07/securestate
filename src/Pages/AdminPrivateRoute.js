import React from "react";
import { Navigate } from "react-router-dom";
import { getAuthToken } from "../Service/localStorage";
import * as Roles from "../constantData/Roles";
import store from "../Redux/Store";
function AdminPrivateRoute({ children }) {
  const { getState } = store;

  const state = getState();

  let token = getAuthToken();

  // let role = getRole();
  let role = state?.user?.userDetails?.role;
  if (
    (token && role === Roles.admin) ||
    role === Roles.superAdmin ||
    role === Roles.hacker
  ) {
    return children;
  } else {
    return <Navigate to="/dashboard" />;
  }
}
export default AdminPrivateRoute;
