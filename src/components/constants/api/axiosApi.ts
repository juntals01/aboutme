import axios from "axios";

const axiosApi = axios.create({
  baseURL: process.env.API_URL || process.env.NEXT_PUBLIC_API_URL,
  timeout: 40000,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json; charset=utf-8",
  },
});

export default axiosApi;
