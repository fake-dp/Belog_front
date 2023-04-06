import axios from "axios";

const BASEURL = "http://3.39.159.26:8080";

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
