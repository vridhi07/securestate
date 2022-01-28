import axios from "axios";
import { CONFIG } from "./CONFIG";
import { getAuthToken } from "./localStorage";
// let token = getAuthToken();
// console.log(token);
let token = getAuthToken();

let headers = {};
if (token) {
  headers.Authorization = `Bearer ${token}`;
}

const AxiosInstance = axios.create({
  baseURL: CONFIG.baseURL,
  headers,
});

// AxiosInstance.defaults.headers.common[
//   "Authorization"
// ] = `Bearer ${localStorage.getItem("token")}`;

// console.log(AxiosInstance);
export default AxiosInstance;
