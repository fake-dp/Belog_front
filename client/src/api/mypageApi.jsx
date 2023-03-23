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
  editInfo: async ({ nickName }) => {
    const result = await instance.patch(
      "/member-service/api/v1/members/edit-info",
      { nickName }
    );
    return result;
  },
  editPassword: async ({ password }) => {
    const result = await instance.patch(
      "/member-service/api/v1/members/edit-password",
      { password }
    );
    return result;
  },
};

export default mypageApi;
