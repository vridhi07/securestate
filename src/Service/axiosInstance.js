import axios from "axios";
import { baseURL } from "./CONFIG";
import { getAuthToken } from "./localStorage";
let token = getAuthToken();

let headers = {};
if (token) {
  headers.Authorization = `Bearer ${token}`;
}

const AxiosInstance = axios.create({
  baseURL: baseURL,
  headers,
});

export default AxiosInstance;
