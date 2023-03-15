import { instance } from "./instance";
const mypageApi = {
  getMyPage: async () => {
    const data = await instance.get("/member-service/api/v1/members/my-page");
    return data;
  },
  deleteMember: async () => {
    const data = await instance.delete("/member-service/api/v1/members");
    return data;
  },
};

export default mypageApi;
