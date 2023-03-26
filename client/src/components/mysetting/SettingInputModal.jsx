import React from "react";
import styled from "styled-components";
import { useState } from "react";
import mypageApi from "../../api/mypageApi";

import swal from "sweetalert";
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

export const EditNickNameModalInput = ({
  setNickNameInputShowModal,
  info,
  setInfo,
}) => {
  const [nickName, setNickName] = useState(info?.nickName);

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  const onClickEditNickName = async () => {
    console.log("닉네임 변경");
    const nick = {
      nickName: nickName,
    };
    try {
      const data = await mypageApi.editInfo(nick);
      setInfo({
        ...info,
        nickName: nickName,
      });
      swal("닉네임 변경", "닉네임이 변경되었습니다.", "success");
      setNickNameInputShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalStyled>
      <ModalContent>
        <h1>닉네임 변경</h1>
        <input
          type="text"
          placeholder="닉네임을 입력해주세요"
          value={nickName}
          onChange={onChangeNickName}
        />
        <button onClick={onClickEditNickName}>변경</button>
        <button onClick={() => setNickNameInputShowModal(false)}>닫기</button>
      </ModalContent>
    </ModalStyled>
  );
};

export const EditPasswordModalInput = ({ setPasswordInputSHowModal }) => {
  const [password, setPassword] = useState("");

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickEditPassword = async () => {
    console.log("비밀번호 변경");
    const passwordData = {
      password: password,
    };

    try {
      const data = await mypageApi.editPassword(passwordData);
      swal("비밀번호 변경", "비밀번호가 변경되었습니다.", "success");
      setPasswordInputSHowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalStyled>
      <ModalContent>
        <h1>비밀번호 변경</h1>
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={onChangePassword}
        />
        <button onClick={onClickEditPassword}>변경</button>
        <button onClick={() => setPasswordInputSHowModal(false)}>닫기</button>
      </ModalContent>
    </ModalStyled>
  );
};
