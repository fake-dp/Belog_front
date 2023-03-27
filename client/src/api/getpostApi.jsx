import axios from "axios";

const BASEURL = "http://3.39.159.26:8080";

const getPost = {
  getPostList: async () => {
    const data = await axios.get(`${BASEURL}/post-service/api/v1/posts`);
    return data;
  },
};

export default getPost;
