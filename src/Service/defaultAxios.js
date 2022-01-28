import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
const defaultAxios = () => {
  axios.interceptors.request.use((request) => {
    const token = localStorage.getItem("token");
    request.headers.authorization = `Bearer ${token}`;

    return request;
  });
};

export default defaultAxios;
