import jwt_decode from "jwt-decode";

export const getAuthToken = () => {
  let token = localStorage.getItem("token");
  return token ? localStorage.getItem("token") : null;
};

export const getRole = () => {
  let token = getAuthToken();
  if (token) {
    const decode = jwt_decode(token);
    // console.log(decode?.user);
    return decode?.user.role;
  }
};
