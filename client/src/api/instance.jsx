import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export const imginstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
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

imginstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("access_token");
  const memberId = localStorage.getItem("member_id");
  if (accessToken && config.headers) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
    config.headers["MemberId"] = memberId;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refresh_token");
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER}/auth-service/refresh-token`,
        { refreshToken }
      );
      const accessToken = response.data.access_token;
      localStorage.setItem("access_token", accessToken);
      return instance(originalRequest);
    }
    return Promise.reject(error);
  }
);

imginstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refresh_token");
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER}/auth-service/refresh-token`,
        { refreshToken }
      );
      const accessToken = response.data.access_token;
      localStorage.setItem("access_token", accessToken);
      return imginstance(originalRequest);
    }
    return Promise.reject(error);
  }
);
