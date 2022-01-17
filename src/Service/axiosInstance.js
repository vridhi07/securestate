import axios from "axios";
import { baseURL } from "./CONFIG";
import { getAuthToken } from "./localStorage";
let token = localStorage.getItem("token");
let headers = {};
if (token) {
  headers.Authorization = `Bearer ${token}`;
}

const AxiosInstance = axios.create({
  baseURL: baseURL,
  headers,
});

export default AxiosInstance;
