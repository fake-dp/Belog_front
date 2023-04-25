import React, { useState, useEffect, useRef } from "react";
import { PostListState } from "../../recoil/atom";
import MainListCard from "./MainListCard";
import { useRecoilState } from "recoil";
import * as S from "../../styles/mainpage/MainStyled";
import getPost from "../../api/getpostApi";

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import MainHeader from "./MainHeader";

const MainPostList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [postList, setPostList] = useRecoilState(PostListState);
  const [nextCursor, setNextCursor] = useState(-1);
  const intersectingRef = useRef(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data } = await getPost.getPostList(nextCursor);
      const { body } = data;
      // console.log("데이터 호출 확인용!", body);
      // console.log("postList", postList);
      setNextCursor(body.nextCursor.key);
      setPostList((prevData) => [...prevData, ...body.items]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoading && intersectingRef.current) {
          fetchData();
        }
      },
      { threshold: 0.5 }
    );

    if (intersectingRef.current) {
      observer.observe(intersectingRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isLoading]);

  return (
    <S.MainListWrapper>
      <MainHeader />
      <S.MainListFlexWrapper>
        <S.PostGridBox>
          {postList.map((post, idx) => (
            <div key={idx}>
              <MainListCard
                isLoading={isLoading}
                postId={post.postId}
                title={post.title}
                contents={post.contents}
                thumbNail={post.thumbNail}
                createdAt={post.createdAt}
                nickName={post.nickName}
                memberId={post.memberId}
                memberProfile={post.memberProfile}
              />
            </div>
          ))}
        </S.PostGridBox>
        <div ref={intersectingRef}>
          {/* <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box> */}
          {/* Lodding... */}
        </div>
      </S.MainListFlexWrapper>
    </S.MainListWrapper>
  );
};

export default MainPostList;
