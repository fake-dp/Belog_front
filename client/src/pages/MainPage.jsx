import React from "react";
import { useEffect } from "react";
import getPost from "../api/getpostApi";
import styled from "styled-components";
import MainHeader from "../components/mainpage/MainHeader";
import MainPostList from "../components/mainpage/MainPostList";
import { useRecoilState } from "recoil";
import { PostListState } from "../recoil/atom";

const MainPage = () => {
  const [postList, setPostList] = useRecoilState(PostListState);

  useEffect(() => {
    const getPostList = async () => {
      try {
        const { data } = await getPost.getPostList();
        const { body } = data;
        setPostList(body.items);
      } catch (error) {
        console.log(error);
      }
    };
    getPostList();
  }, []);

  return (
    <Wrapper>
      <MainHeader />
      <MainPostList />
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  margin-top: 60px;
`;
