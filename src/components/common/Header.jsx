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
import Search from "./Search";
const Header = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [showModal, setShowModal] = useState(false);
  const [showMyInfo, setShowMyInfo] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const memberId = localStorage.getItem("member_id");
    if (token && memberId) {
      setIsLogin({
        isLogin: true,
        memberId: memberId,
      });
    }
  }, [setIsLogin]);

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
      await authApi.logout(isLogin.memberId);
      // console.log(data);
      localStorage.removeItem("token");
      localStorage.removeItem("member_id");
      localStorage.removeItem("access_token");
      localStorage.clear();
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
        <LinkStyle to="/">
          <img
            src="https://user-images.githubusercontent.com/75570030/232900117-c6bc308b-24b6-4769-b8b4-50f1a2ac7bd6.jpeg"
            alt="logo"
          />
        </LinkStyle>
      </div>
      <HeaderRight>
        <Search />
        {isLogin.isLogin ? (
          <>
            <CustomBtn onClick={goEditPage}>새 글 작성</CustomBtn>
            <InfoRound
              src="https://placeimg.com/200/200/people"
              onClick={toggleMyInfo}
            ></InfoRound>
            {showMyInfo && (
              <InfoMenuWrapper>
                <div>
                  <p onClick={goMyPage}>마이페이지</p>
                  <p onClick={goSettingPage}>설정</p>
                  <p onClick={logoutBtn}>로그아웃</p>
                </div>
              </InfoMenuWrapper>
            )}
          </>
        ) : (
          <CustomBtn onClick={() => setShowModal(true)}>Login</CustomBtn>
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
  background-color: #f5f6fa;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #e5e5e5;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const HeaderRight = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  > P {
    margin: 20px;
    font-size: 20px;
    font-weight: 600;
  }
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: #212529;
  font-size: 20px;
  font-weight: 600;
  position: relative;
  > img {
    position: absolute;
    top: -30px;
    width: 150px;
    height: 60px;
    object-fit: cover;
  }
`;

const CustomBtn = styled.button`
  height: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  border-radius: 1rem;
  outline: none;
  font-weight: bold;
  word-break: keep-all;
  background: #f8f9fa;
  border: 1px solid #212529;
  color: #212529;
  transition: all 0.125s ease-in 0s;
  cursor: pointer;
  &:hover {
    background: #212529;
    color: #f8f9fa;
  }
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
  position: relative;
  margin-top: 1rem;

  > div {
    position: absolute;
    top: 20px;
    left: -30px;
    z-index: 5;
    width: 12rem;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
    @media (max-width: 1248px) {
      left: -100px;
    }
    @media (max-width: 768px) {
      left: -170px;
    }
    > p {
      padding: 1rem 2rem;
      font-size: 0.875rem;
      cursor: pointer;
      &:hover {
        background: #f8f9fa;
        color: #212529;
        font-weight: bold;
        transition: all 0.125s ease-in 0s;
        border-radius: 0.25rem;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
      }
    }
  }
`;
