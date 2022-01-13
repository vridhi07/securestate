export const getAuthToken = () => {
  let token = localStorage.getItem("Auth Token");
  return token ? localStorage.getItem("Auth Token") : null;
};
