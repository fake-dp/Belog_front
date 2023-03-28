import React from "react";
import { useEffect, useState } from "react";
import getPost from "../api/getpostApi";
import styled from "styled-components";
import MainHeader from "../components/mainpage/MainHeader";
import MainPostList from "../components/mainpage/MainPostList";
import { useRecoilState } from "recoil";
import { PostListState } from "../recoil/atom";
import { LayoutMargin } from "../styles/common/LayoutMarginStyled";
import { AiOutlineArrowUp } from "react-icons/ai";

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
        // console.log(isLoding);
      } catch (error) {
        console.log(error);
      }
    };
    getPostList();
  }, []);

  const [isScroll, setIsScroll] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 100) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ScrollToTop = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #f5f5f5;
    border: none;
    outline: none;
    cursor: pointer;
    display: ${isScroll ? "block" : "none"};
    svg {
      font-size: 30px;
      color: #000;
    }
  `;

  return (
    <LayoutMargin>
      <MainHeader />
      <MainPostList isLoding={isLoding} />
      <ScrollToTop onClick={onClick}>
        <AiOutlineArrowUp />
      </ScrollToTop>
    </LayoutMargin>
  );
};

export default MainPage;
