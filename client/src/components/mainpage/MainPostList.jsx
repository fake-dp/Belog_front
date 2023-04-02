import React from "react";
import { useRecoilValue } from "recoil";
import { PostListState } from "../../recoil/atom";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import MainListCard from "./MainListCard";

const MainPostList = ({ isLoading }) => {
  const postList = useRecoilValue(PostListState);
  console.log("postList", postList);

  return (
    <PostGridBox>
      {postList.map((post) => (
        <div key={post.postId}>
          <MainListCard
            isLoading={isLoading}
            postId={post.postId}
            title={post.title}
            contents={post.contents}
            thumbNail={post.thumbNail}
            createdAt={post.createdAt}
            nickName={post.nickName}
            memberProfile={post.memberProfile}
          />
        </div>
      ))}
    </PostGridBox>
  );
};

export default MainPostList;

export const PostGridBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
