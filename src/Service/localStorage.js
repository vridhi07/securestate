import jwt_decode from "jwt-decode";

export const getAuthToken = () => {
  let token = localStorage.getItem("token");
  return token ? localStorage.getItem("token") : null;
};

export const getRole = () => {
  let token = getAuthToken();
  const decode = jwt_decode(token);
  return decode?.role;
};
