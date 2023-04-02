import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { PostListState } from "../recoil/atom";
import MainPostList from "../components/mainpage/MainPostList";
import MainScrollTop from "../hook/MainScrollTop";
import { LayoutMargin } from "../styles/common/LayoutMarginStyled";
import useDebounce from "../hook/useDebounce";

const MainPage = () => {
  const [postList, setPostList] = useRecoilState(PostListState);
  const [isLoading, setIsLoading] = useState(false);
  const [nextCursor, setNextCursor] = useState(-1);
  const debouncedNextCursor = useDebounce(nextCursor, 200);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
      ) {
        fetchDataAndAppend();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [debouncedNextCursor]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `http://3.39.159.26:8080/post-service/api/v1/posts?key=${nextCursor}`
      );
      const { body } = data;
      setPostList(body.items);
      setNextCursor(body.nextCursor.key);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const fetchDataAndAppend = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `http://3.39.159.26:8080/post-service/api/v1/posts?key=${debouncedNextCursor}`
      );
      const { body } = data;
      setPostList((prevData) => [...prevData, ...body.items]);
      setNextCursor(body.nextCursor.key);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LayoutMargin>
      {/* <MainHeader /> */}
      <MainPostList isLoading={isLoading} />

      <MainScrollTop />
    </LayoutMargin>
  );
};

export default MainPage;
