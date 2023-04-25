import React from "react";

import styled from "styled-components";

const MyInfoHeader = () => {
  return (
    <MyPageWrapper>
      <ContentsWrapper>
        <ImgStyle />
      </ContentsWrapper>
    </MyPageWrapper>
  );
};

export default MyInfoHeader;

const MyPageWrapper = styled.div`
  margin-top: 60px;
  background-color: #f1f3f5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgStyle = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  width: 100%;
  height: 100%;
  background-color: #f1f3f5;
  padding: 20px;
  box-sizing: border-box;
`;
