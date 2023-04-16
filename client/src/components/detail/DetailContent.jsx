import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { MarkdownState } from "../../recoil/atom";
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
const DetailHeader = ({ detail }) => {
  console.log(detail?.contents);
  const markdown = useRecoilValue(MarkdownState);
  console.log("markdown", markdown);

  return (
    <DetailHeaderWrapper>
      <DetailTitle>{detail?.title}</DetailTitle>
      <DetailProfile>
        <img src={detail?.profile} alt="profileImage" />
        <div>
          <p>{detail?.nickName}</p>
          <span>{detail?.createdAt}</span>
        </div>
      </DetailProfile>
      <CategoryText>{detail?.category}</CategoryText>
      <MarkLine></MarkLine>
      <Viewer initialValue={markdown} />
    </DetailHeaderWrapper>
  );
};

export default DetailHeader;

export const DetailHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 5rem; */
  /* background-color: red; */
  width: 768px;
  margin: 5rem auto 0px;
  padding-top: 2rem;
  /* medie 쿼리  */
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const MarkLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e9ecef;
  margin-bottom: 2rem;
`;

export const DetailTitle = styled.h1`
  line-height: 1.5;
  letter-spacing: -0.004em;
  margin-top: 0px;
  font-weight: 800;
  color: #212529;
  margin-bottom: 3rem;
  word-break: keep-all;
  transition: color 0.125s ease-in 0s;
  font-size: 2.25rem;
`;

export const DetailProfile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  > img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-right: 0.5rem;
  }
  > div {
    display: flex;
    flex-direction: column;
    > p {
      line-height: 1.5;
      color: #212529;
      font-size: 1rem;
      font-weight: 600;
    }
    > span {
      color: #495057;

      font-size: 0.875rem;
    }
  }
`;

export const CategoryText = styled.p`
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.875rem;
  background: #f8f9fa;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2rem;
  border-radius: 1rem;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 0.875rem;
  color: #12b886;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
`;
