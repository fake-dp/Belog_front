import styled from "styled-components";

export const ModalWrapper = styled.div`
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

export const ModalContent = styled.div`
  width: 400px;
  height: 450px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h1 {
    color: #999;
    margin: 10px;
    font-size: 20px;
  }
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  > input {
    box-sizing: border-box;
    width: 300px;
    height: 40px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 10px;
  }
  > button {
    width: 300px;
    height: 40px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 10px;
    background-color: #fff;
    cursor: pointer;
    background-color: green;
    color: #fff;
  }
`;

export const SpanWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 300px;
`;

export const SpanText = styled.span`
  font-size: 12px;
  color: #999;
  margin: 10px;
  cursor: pointer;
`;

export const CloseButton = styled.button`
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: #999;
`;
