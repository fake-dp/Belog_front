import React from "react";
import styled from "styled-components";
import { useRef } from "react";

const SettingHeader = ({ info }) => {
  const fileInput = useRef();

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  console.log("info", info);

  return (
    <MyPageWrapper>
      <ContentsWrapper>
        <SettingHeaderWrapper>
          <ImgStyle src="https://placeimg.com/200/200/people" />
          <label htmlFor="fileInput">이미지 변경</label>
          <FileInput type="file" accept="image/*" />
          <button>이미지 제거</button>
        </SettingHeaderWrapper>
        <div>
          <h1>{info?.nickName}</h1>
          <p>소개글입니다.</p>
        </div>
      </ContentsWrapper>
    </MyPageWrapper>
  );
};

export default SettingHeader;

export const MyPageWrapper = styled.div`
  margin-top: 60px;
  background-color: #f1f3f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SettingHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const ImgStyle = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export const FileInput = styled.input`
  display: none;
`;
