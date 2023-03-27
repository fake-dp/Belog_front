import React from "react";
import * as S from "../../styles/mysetting/MySettingStyled";
import { useState } from "react";
import mypageApi from "../../api/mypageApi";

import swal from "sweetalert";

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
    <S.ModalStyled>
      <S.ModalContent>
        <h1>닉네임 변경</h1>
        <input
          type="text"
          placeholder="닉네임을 입력해주세요"
          value={nickName}
          onChange={onChangeNickName}
        />
        <div>
          <button onClick={onClickEditNickName}>변경</button>
          <button onClick={() => setNickNameInputShowModal(false)}>닫기</button>
        </div>
      </S.ModalContent>
    </S.ModalStyled>
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
    <S.ModalStyled>
      <S.ModalContent>
        <h1>비밀번호 변경</h1>
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={onChangePassword}
        />
        <div>
          <button onClick={onClickEditPassword}>변경</button>
          <button onClick={() => setPasswordInputSHowModal(false)}>닫기</button>
        </div>
      </S.ModalContent>
    </S.ModalStyled>
  );
};
