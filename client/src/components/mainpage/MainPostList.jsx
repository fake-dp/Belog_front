import React from "react";
import { useRecoilValue } from "recoil";
import { PostListState } from "../../recoil/atom";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import MainListCard from "./MainListCard";

const MainPostList = ({ isLoding }) => {
  const postList = useRecoilValue(PostListState);
  console.log("postList", postList);

  return (
    <PostGridBox>
      {postList.map((post) => (
        <MainListCard
          isLoding={isLoding}
          key={post.postId}
          postId={post.postId}
          title={post.title}
          contents={post.contents}
          thumbNail={post.thumbNail}
          createdAt={post.createdAt}
          nickName={post.nickName}
          memberProfile={post.memberProfile}
        />
      ))}
    </PostGridBox>
  );
};

export default MainPostList;

export const PostGridBox = styled.div`
  display: flex;
  justify-content: center;
  margin: -1rem;
  flex-wrap: wrap;
`;

export const PostListWrapper = styled.div`
  width: 20rem;
  background: #fff;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 32px 0px;
  }
`;

export const PostThumbNailWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%;
  overflow: hidden;
  border-radius: 4px 4px 0px 0px;
`;

export const PostThumbNail = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const ContentsWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  > h5 {
    font-size: 1rem;
    font-weight: 600;
    margin: 0px 0px 0.25rem;
    line-height: 1.5;
    word-break: break-word;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #212529;
  }
  > p {
    margin: 0px 0px 1.5rem;
    word-break: break-word;
    overflow-wrap: break-word;
    font-size: 0.875rem;
    line-height: 1.5;
    height: 3.9375rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #495057;
  }
`;

export const DateWrapper = styled.div`
  font-size: 0.75rem;
  line-height: 1.5;
  color: #868e96;
  padding: 1rem;
`;

export const UserNameWrapper = styled.div`
  padding: 0.625rem 1rem;
  border-top: 1px solid #f1f3f5;
  display: flex;
  font-size: 0.75rem;
  line-height: 1.5;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;
