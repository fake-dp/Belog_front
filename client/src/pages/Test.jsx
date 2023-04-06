import useIntersect from "./hook/useIntersection";
import styled from "styled-components";
import { useState, useEffect } from "react";

const App = () => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [ref, intersecting] = useIntersect({ threshold: 0.5 });

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}`
      );
      const data = await response.json();
      setPosts((prevPosts) => [...prevPosts, ...data]);
    };

    if (intersecting) {
      fetchPosts();
    }
  }, [intersecting, page]);

  return (
    <DivStyled>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
      <div ref={ref}>Loading...</div>
    </DivStyled>
  );
};

export default App;
