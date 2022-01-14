import axios from "axios";
import { baseURL } from "./CONFIG";
import { getAuthToken } from "./localStorage";
const Axios = axios.create({
  baseURL: baseURL,
});
let token = localStorage.getItem("token");

export const AxiosCalls = (method, url) => {
  const config = {
    method: method,
    url: url,
    headers: { Authorization: `Bearer ${token}` },
  };
  return Axios(config);
};
