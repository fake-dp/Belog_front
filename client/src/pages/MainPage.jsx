import React from "react";
import { useEffect, useState } from "react";
import getPost from "../api/getpostApi";
import styled from "styled-components";
import MainHeader from "../components/mainpage/MainHeader";
import MainPostList from "../components/mainpage/MainPostList";
import { useRecoilState } from "recoil";
import { PostListState } from "../recoil/atom";
import { LayoutMargin } from "../styles/common/LayoutMarginStyled";
const MainPage = () => {
  const [postList, setPostList] = useRecoilState(PostListState);
  const [isLoding, setIsLoding] = useState(true);
  useEffect(() => {
    const getPostList = async () => {
      try {
        const { data } = await getPost.getPostList();
        const { body } = data;
        setPostList(body.items);
        setIsLoding(false);
      } catch (error) {
        console.log(error);
      }
    };
    getPostList();
  }, []);

  return (
    <LayoutMargin>
      <MainHeader />
      <MainPostList isLoding={isLoding} />
    </LayoutMargin>
  );
};

export default MainPage;
