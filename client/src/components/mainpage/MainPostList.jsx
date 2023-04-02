import React from "react";
import { useRecoilValue } from "recoil";
import { PostListState } from "../../recoil/atom";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import MainListCard from "./MainListCard";
import * as S from "../../styles/mainpage/MainStyled";
const MainPostList = ({ isLoading }) => {
  const postList = useRecoilValue(PostListState);
  //   console.log("postList", postList);

  return (
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
  );
};

export default MainPostList;
