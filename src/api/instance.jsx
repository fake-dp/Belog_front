import axios from "axios";

// basic axios instance
export const instance = axios.create({
  baseURL: "http://3.39.159.26:8080",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("access_token");
  const memberId = localStorage.getItem("member_id");
  const refreshToken = localStorage.getItem("refresh_token");
  if (accessToken && config.headers) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
    config.headers["MemberId"] = memberId;
    config.headers["refreshtoken"] = refreshToken;
  }

  return config;
});

instance.interceptors.response.use(
  (response) => {
    // console.log(response, "@@@response@@@");
    return response;
  },
  async (error) => {
    console.log("error", error);
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refresh_token");
      console.log(refreshToken, "refreshToken");
      const memberId = localStorage.getItem("member_id");
      const accessToken = localStorage.getItem("access_token");
      const response = await axios.post(
        `${"http://3.39.159.26:8080"}/auth-service/refresh-token`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            MemberId: memberId,
            RefreshToken: refreshToken,
          },
        }
      );
      console.log(response, "response");
      const newAccessToken = response.data.body.accessToken;
      localStorage.setItem("access_token", newAccessToken);

      originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
      originalRequest.headers["MemberId"] = memberId;
      originalRequest.headers["refreshtoken"] = refreshToken;
      return instance(originalRequest);
    }
    return Promise.reject(error);
  }
);

// img axios instance
export const imginstance = axios.create({
  baseURL: "http://3.39.159.26:8080",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
  },
});

imginstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("access_token");
  const memberId = localStorage.getItem("member_id");
  const refreshToken = localStorage.getItem("refresh_token");
  if (accessToken && config.headers) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
    config.headers["MemberId"] = memberId;
    config.headers["refreshtoken"] = refreshToken;
  }
  return config;
});

imginstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log("error", error);
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refresh_token");
      const memberId = localStorage.getItem("member_id");
      const accessToken = localStorage.getItem("access_token");
      const response = await axios.post(
        `${"http://3.39.159.26:8080"}/auth-service/refresh-token`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            MemberId: memberId,
            RefreshToken: refreshToken,
          },
        }
      );
      console.log(response, "response");
      const newAccessToken = response.data.body.accessToken;
      localStorage.setItem("access_token", newAccessToken);

      originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
      originalRequest.headers["MemberId"] = memberId;
      originalRequest.headers["refreshtoken"] = refreshToken;
      return imginstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

// import axios from "axios";

// const baseConfig = {
//   baseURL: "http://3.39.159.26:8080",
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
//       `${"http://3.39.159.26:8080"}/auth-service/refresh-token`,
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
