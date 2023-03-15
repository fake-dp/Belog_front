import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthModal from "../auth/AuthModal";
import styled from "styled-components";
const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const goEditPage = () => {
    navigate("/edit");
  };

  return (
    <HeaderWrapper>
      <div>
        <LinkStyle to="/">Winter Blog</LinkStyle>
      </div>
      <HeaderRight>
        <p onClick={goEditPage}>글쓰기</p>
        <p onClick={() => setShowModal(true)}>Login</p>
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
  width: 200px;
  > P {
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
