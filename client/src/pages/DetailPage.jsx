import React from "react";
import { LayoutMargin } from "../styles/common/LayoutMarginStyled";
import { useEffect, useState } from "react";
import getPost from "../api/getpostApi";
import DetailContent from "../components/detail/DetailContent";

import styled from "styled-components";
import { useRecoilState } from "recoil";
import { MarkdownState } from "../recoil/atom";
import { useParams } from "react-router-dom";
const DetailPage = () => {
  const [markdown, setMarkdown] = useRecoilState(MarkdownState);
  const [detail, setDetail] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getPostDetail = async () => {
      try {
        const { data } = await getPost.getPostDetail(id);
        const { body } = data;
        const resultData = body;
        setDetail(resultData);
        setMarkdown(resultData.contents);
      } catch (error) {
        console.log(error);
      }
    };
    getPostDetail();
  }, []);

  return (
    <LayoutMargin>
      <DetailWrapper>
        <DetailContent detail={detail} />
      </DetailWrapper>
    </LayoutMargin>
  );
};

export default DetailPage;

export const DetailWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* align-items: center; */
`;
