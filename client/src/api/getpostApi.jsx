import axios from "axios";
import { postinstance } from "./instance";
const BASEURL = process.env.REACT_APP_SERVER;

const getPost = {
  getPostList: async (nextCursor) => {
    const data = await axios.get(
      `${BASEURL}/post-service/api/v1/posts?key=${nextCursor}`
    );
    return data;
  },
  getPostDetail: async (postId) => {
    const data = await axios.get(
      `${BASEURL}/post-service/api/v1/posts/${postId}`
    );
    return data;
  },
  createPost: async (title, contents, category, images) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("contents", contents);
    formData.append("category", category);
    if (images) {
      images.forEach((image) => formData.append("images", image));
    }

    const { data } = await postinstance.post(
      `/post-service/api/v1/posts`,
      formData
    );
    return data;
  },
};

export default getPost;
