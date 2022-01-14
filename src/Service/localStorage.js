export const getAuthToken = () => {
  let token = localStorage.getItem("token");
  return token ? localStorage.getItem("token") : null;
};
