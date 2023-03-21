import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthModal from "../auth/AuthModal";
import styled from "styled-components";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { loginState } from "../../recoil/atom";

const Header = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin({
        isLogin: true,
        memberId: localStorage.getItem("member_id"),
      });
    }
  }, [isLogin]);

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const goEditPage = () => {
    navigate("/edit");
  };

  const logoutBtn = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("member_id");
    localStorage.removeItem("access_token");
    setIsLogin({
      isLogin: false,
      memberId: null,
    });
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
            <LinkStyle to="/mypage">MyPage</LinkStyle>
            <p onClick={logoutBtn}>Logout</p>
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
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  cursor: pointer;
`;

const HeaderRight = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* width: 200px; */
  > P {
    margin: 20px;
    font-size: 20px;
    font-weight: 600;
  }
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 20px;
  font-weight: 600;
`;

const WritePtag = styled.p`
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  background-color: red;
  padding: 5px 10px;
  color: #fff;
  border-radius: 20px;
`;
