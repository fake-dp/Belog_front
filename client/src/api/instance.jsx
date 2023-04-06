import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("access_token");
  const memberId = localStorage.getItem("member_id");
  if (accessToken && config.headers) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
    config.headers["MemberId"] = memberId;
  }
  return config;
});
