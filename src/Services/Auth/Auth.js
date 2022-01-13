import axios from "axios";
import { baseURL, CONFIG } from "../CONFIG";
const axiosAuth = axios.create({
  baseURL: baseURL,
});

const loginCall = (data) => {
  return axiosAuth.post(CONFIG.login, data);
};
