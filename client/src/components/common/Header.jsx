import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthModal from "../auth/AuthModal";
import styled from "styled-components";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { loginState } from "../../recoil/atom";
import authApi from "../../api/authApi";
const Header = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setIsLogin({
  //       isLogin: true,
  //       memberId: localStorage.getItem("member_id"),
  //     });
  //   }
  // }, [isLogin]);
  // console.log(isLogin.memberId);
  const [showModal, setShowModal] = useState(false);
  const [showMyInfo, setShowMyInfo] = useState(false);

  const toggleMyInfo = () => {
    setShowMyInfo(!showMyInfo);
  };

  const navigate = useNavigate();

  const goEditPage = () => {
    navigate("/edit");
    setShowMyInfo(false);
  };

  const goMyPage = () => {
    navigate("/mypage");
    setShowMyInfo(false);
  };

  const goSettingPage = () => {
    navigate("/setting");
    setShowMyInfo(false);
  };

  const logoutBtn = async () => {
    try {
      const { data } = await authApi.logout(isLogin.memberId);
      console.log(data);
      localStorage.removeItem("token");
      localStorage.removeItem("member_id");
      localStorage.removeItem("access_token");
    } catch (error) {
      console.log(error);
    }

    setIsLogin({
      isLogin: false,
      memberId: null,
    });
    setShowMyInfo(false);
    navigate("/");
  };

  return (
    <HeaderWrapper>
      <div>
        <LinkStyle to="/">Winter Blog</LinkStyle>
      </div>
      <HeaderRight>
        {isLogin.isLogin ? (
          <>
            <WritePtag onClick={goEditPage}>글쓰기</WritePtag>
            <InfoRound
              src="https://placeimg.com/200/200/people"
              onClick={toggleMyInfo}
            ></InfoRound>
            {showMyInfo && (
              <InfoMenuWrapper>
                <p onClick={goMyPage}>마이페이지</p>
                <p onClick={goSettingPage}>설정</p>
                <p onClick={logoutBtn}>로그아웃</p>
              </InfoMenuWrapper>
            )}
          </>
        ) : (
          <p onClick={() => setShowModal(true)}>Login</p>
        )}
      </HeaderRight>
      {showModal && <AuthModal setShowModal={setShowModal} />}
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #2f3640;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: #fff;
  cursor: pointer;
`;

const HeaderRight = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* width: 200px; */
  position: relative;
  > P {
    margin: 20px;
    font-size: 20px;
    font-weight: 600;
  }
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`;

const WritePtag = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  /* font-size: 1rem; */
  border-radius: 1rem;
  border: none;
  outline: none;
  font-weight: bold;
  word-break: keep-all;
  background: #ff5252;
  color: #fff;
  /* transition: all 0.125s ease-in 0s; */
  cursor: pointer;
`;

const InfoRound = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ff793f;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

const InfoMenuWrapper = styled.div`
  position: absolute;
  top: 60px;
  padding: 10px;
  /* right: 50px; */
  left: 120px;
  width: 120px;
  height: 100px;
  background-color: #f7f1e3;
  /* border: 1px solid #fff; */
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* align-items: center; */
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  > P {
    font-size: 16px;
    font-weight: 600;
    color: #2c2c54;
    margin-block-start: 0em;
    margin-block-end: 0em;
    cursor: pointer;
    &:hover {
      color: #cd6133;
    }
  }
`;
