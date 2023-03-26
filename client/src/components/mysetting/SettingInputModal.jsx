import React from "react";
import styled from "styled-components";

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  width: 500px;
  height: 500px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SettingInputModal = ({ setInputShowModal, inputShowModal, text }) => {
  return (
    <ModalStyled>
      <ModalContent>
        <h1>{text}</h1>
        <button onClick={() => setInputShowModal(false)}>닫기</button>
      </ModalContent>
    </ModalStyled>
  );
};

export default SettingInputModal;
