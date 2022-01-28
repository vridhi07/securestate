import axios from "axios";
import { CONFIG } from "./CONFIG";
import { getAuthToken } from "./localStorage";

export default function fireAjax(method, URL, headers, data) {
  const url = CONFIG.baseURL + URL;
  let config = {};
  if (headers != undefined && headers != "") {
    config = {
      headers,
    };
  } else {
    config = {
      header: {
        "Content-Type": "application/json",
      },
    };
  }
  if (method === "GET") {
    return axios.get(url, config);
  } else if (method === "POST") {
    return axios.post(url, data, config);
  } else if (method === "PUT") {
    return axios.put(url, data, config);
  } else if (method === "DELETE") {
    return axios.delete(url, data, config);
  }
}

export const axiosCall = (method, url, data, headers) => {
  let URL = CONFIG.baseURL + url;
  if (method === "GET") {
    return axios.get(URL, headers);
  }
  if (method === "POST") {
    return axios.post(URL, data, headers);
  }
  if (method === "PUT") {
    return axios.put(URL, data, headers);
  }
  if (method === "DELETE") {
    return axios.delete(URL, headers);
  }
};
