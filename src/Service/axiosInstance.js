import axios from "axios";
import { baseURL } from "./CONFIG";
import { getAuthToken } from "./localStorage";
// let token = getAuthToken();
// console.log(token);
let token = localStorage.getItem("token");

// let headers = {};
// if (token) {
//   headers.Authorization = `Bearer ${token}`;
// }

const AxiosInstance = axios.create({
  baseURL: baseURL,
});

AxiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

// console.log(AxiosInstance);
export default AxiosInstance;
