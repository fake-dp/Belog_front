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
          <ImgStyle src={info?.profiles[0].path} />
          <label htmlFor="fileInput">이미지 업로드</label>
          <FileInput type="file" accept="image/*" />
          <button>이미지 제거</button>
          <button>소개글 수정</button>
        </SettingHeaderWrapper>
        <EditInfoWrapper>
          <h1>{info?.nickName}</h1>
          <p>안녕하세요! 뭐뭐 입니다. 소개글입니다.</p>
        </EditInfoWrapper>
      </ContentsWrapper>
    </MyPageWrapper>
  );
};

export default SettingHeader;

export const MyPageWrapper = styled.div`
  margin-top: 60px;
  /* background-color: #f1f3f5; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  width: 700px;
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

export const EditInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  > h1 {
    font-size: 30px;
    font-weight: 700;
  }
  > p {
    margin-top: 20px;
    font-size: 16px;
    font-weight: 400;
  }
`;
