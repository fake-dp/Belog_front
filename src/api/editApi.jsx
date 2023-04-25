import { imginstance, instance } from "./instance";
const BASEURL = process.env.REACT_APP_SERVER;

const editApi = {
  uploadImg: async (formData) => {
    const { data } = await imginstance.post(
      `/post-service/api/v1/images/upload`,
      formData
    );
    return data;
  },
  createPost: async ({ title, contents, category, images }) => {
    const data = await instance.post(`${BASEURL}/post-service/api/v1/posts`, {
      title,
      contents,
      category,
      images,
    });
    return data;
  },
  deleteimg: async (url) => {
    const data = await instance.delete(
      `${BASEURL}/post-service/api/v1/images/remove`,
      url
    );
    return data;
  },
};

export default editApi;
