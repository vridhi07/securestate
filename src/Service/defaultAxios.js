import axios from "axios";
const Prod = process.env.REACT_APP_PROD;
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
// console.log(Prod);
const defaultAxios = () => {
  axios.interceptors.request.use((request) => {
    const token = localStorage.getItem("token");
    if (token) {
      request.headers.authorization = `Bearer ${token}`;
    }

    return request;
  });
  axios.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      if (Prod === "dev") {
        console.log(response);
      }
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      if (Prod === "dev") {
        console.log(error.response.status);
      }
      if (error.response.status === 403) {
        localStorage.removeItem("token");
        window.location.replace("/");
      }
      return Promise.reject(error);
    }
  );
};

// export const response = () => {};
export default defaultAxios;
