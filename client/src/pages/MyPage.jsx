import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import mypageApi from "../api/mypageApi";
import styled from "styled-components";
const MyPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const testBtn = async () => {
      try {
        const { data } = await mypageApi.getMyPage();
        const { body } = data;
        const resultData = body;
        console.log("dd", resultData);
        setData(resultData);
      } catch (error) {
        console.log(error);
      }
    };
    testBtn();
  }, []);

  const deleteMemberBtn = async () => {
    try {
      const { data } = await mypageApi.deleteMember();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MyPageWrapper>
      <h1>MyPage</h1>
      <ContentsWrapper>
        <ImgStyle src={data?.profiles[0].path} />
        <p>이메일: {data?.email}</p>
        <p>닉네임: {data?.nickName}</p>
        <p>가입일: {data?.profiles[0].createdAt}</p>
        {/* 회원탈퇴 */}
        <button onClick={deleteMemberBtn}>회원탈퇴</button>
      </ContentsWrapper>
    </MyPageWrapper>
  );
};

export default MyPage;

const MyPageWrapper = styled.div`
  margin-top: 60px;
  background-color: #f1f3f5;
  height: 100vh;
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
