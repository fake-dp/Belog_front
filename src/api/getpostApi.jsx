import axios from "axios";
import { imginstance } from "./instance";
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
};

export default getPost;
