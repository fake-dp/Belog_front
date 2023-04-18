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
  const refreshToken = localStorage.getItem("refresh_token");
  if (accessToken && config.headers) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
    config.headers["MemberId"] = memberId;
    config.headers["RefreshToken"] = refreshToken;
  }
  return config;
});

imginstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("access_token");
  const memberId = localStorage.getItem("member_id");
  const refreshToken = localStorage.getItem("refresh_token");
  if (accessToken && config.headers) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
    config.headers["MemberId"] = memberId;
    config.headers["RefreshToken"] = refreshToken;
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
      const memberId = localStorage.getItem("member_id");
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER}/auth-service/refresh-token`,
        { refreshToken, memberId }
      );
      const accessToken = response.data.access_token;
      localStorage.setItem("access_token", accessToken);
      originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
      originalRequest.headers["MemberId"] = memberId;

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
      const memberId = localStorage.getItem("member_id");
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER}/auth-service/refresh-token`,
        { refreshToken, memberId }
      );
      const accessToken = response.data.access_token;
      localStorage.setItem("access_token", accessToken);
      originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
      originalRequest.headers["MemberId"] = memberId;
      return imginstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

// import axios from "axios";

// const baseConfig = {
//   baseURL: process.env.REACT_APP_SERVER,
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Content-Type": "application/json",
//   },
// };

// export const instance = axios.create(baseConfig);
// export const imginstance = axios.create(baseConfig);

// const setAuthHeaders = (config) => {
//   const accessToken = localStorage.getItem("access_token");
//   const memberId = localStorage.getItem("member_id");
//   if (accessToken && config.headers) {
//     config.headers["Authorization"] = `Bearer ${accessToken}`;
//     config.headers["MemberId"] = memberId;
//   }
//   return config;
// };

// instance.interceptors.request.use(setAuthHeaders);
// imginstance.interceptors.request.use(setAuthHeaders);

// const refreshAuthLogic = async (error, instance) => {
//   const originalRequest = error.config;
//   if (error.response.status === 401 && !originalRequest._retry) {
//     originalRequest._retry = true;
//     const refreshToken = localStorage.getItem("refresh_token");
//     const memberId = localStorage.getItem("member_id");
//     const response = await axios.post(
//       `${process.env.REACT_APP_SERVER}/auth-service/refresh-token`,
//       { refreshToken, memberId }
//     );
//     const accessToken = response.data.access_token;
//     localStorage.setItem("access_token", accessToken);
//     originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
//     originalRequest.headers["MemberId"] = memberId;
//     return instance(originalRequest);
//   }
//   return Promise.reject(error);
// };

// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => refreshAuthLogic(error, instance)
// );

// imginstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => refreshAuthLogic(error, imginstance)
// );

//////////////////
