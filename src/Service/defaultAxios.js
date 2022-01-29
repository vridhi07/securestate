import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
const defaultAxios = () => {
  axios.interceptors.request.use((request) => {
    const token = localStorage.getItem("token");
    request.headers.authorization = `Bearer ${token}`;

    return request;
  });
};
export const response = () => {
  axios.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      // console.log(response);
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      console.log(error.response.status);
      return Promise.reject(error);
    }
  );
};
export default defaultAxios;
