import axios from "axios";
import { instance } from "./instance";

const BASEURL = "http://3.34.53.11:8080";

const authApi = {
  login: async ({ email, password }) => {
    const data = axios.post(`${BASEURL}/auth-service/login`, {
      email,
      password,
    });
    return data;
  },
  register: async ({ email, password, nickName }) => {
    const data = axios.post(`${BASEURL}/member-service/api/v1/members`, {
      email,
      password,
      nickName,
    });
    return data;
  },
  logout: async ({ memberId }) => {
    const data = instance.post(`${BASEURL}/auth-service/logout`, { memberId });
    return data;
  },

  emailCheck: () => {
    return instance.post(
      `${BASEURL}/member-service/api/v1/members/check/email`
    );
  },
  nickNameCheck: () => {
    return instance.post(
      `${BASEURL}/member-service/api/v1/members/check/nickname`
    );
  },
};

export default authApi;
