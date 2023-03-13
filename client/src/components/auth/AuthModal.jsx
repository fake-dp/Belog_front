import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 400px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AuthModal = ({ setShowModal }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <h1>AuthModal</h1>
        <button onClick={() => setShowModal(false)}>닫기</button>
      </ModalContent>
    </ModalWrapper>
  );
};

export default AuthModal;
