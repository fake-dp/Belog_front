import React from "react";
import styled from "styled-components";

const InfoModals = ({ setShowModal }) => {
  return (
    <ModalWrapper onClick={() => setShowModal(false)}>
      <div>
        <h1>준비중 입니다!!</h1>
      </div>
    </ModalWrapper>
  );
};

export default InfoModals;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  > div {
    background: #fff;
    width: 700px;
    height: 600px;
    border-radius: 5px;
    padding: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    > h1 {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;
