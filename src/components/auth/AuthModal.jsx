import React from "react";
import { useState } from "react";
import * as S from "../../styles/AuthModalStyled";
import swal from "sweetalert";
import authApi from "../../api/authApi";
// recoil import
import { useRecoilState } from "recoil";
import { loginState } from "../../recoil/atom";
const AuthModal = ({ setShowModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickName, setnickName] = useState("");
  const [newAccount, setNewAccount] = useState(false);

  const [_, setIsLogin] = useRecoilState(loginState);
  // console.log(newAccount);
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "nickName") {
      setnickName(value);
    } else {
      return;
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (newAccount) {
      await authApi
        .register({
          email,
          password,
          nickName,
        })
        .then((response) => {
          const { data } = response;
          // console.log(data);
          swal(data.result.status, data.result.message, "success");
          setNewAccount(false);
        })
        .catch((error) => {
          const { data } = error.response;
          swal(data.result.status, data.result.message, "error");
        });
    } else {
      await authApi
        .login({
          email,
          password,
        })
        .then((response) => {
          const { data } = response;
          // console.log(data);
          localStorage.setItem("access_token", data.body.accessToken);
          localStorage.setItem("member_id", data.body.memberId);
          // 리프레쉬 토큰
          localStorage.setItem("refresh_token", data.body.refreshToken);
          swal(data.result.status, data.result.message, "success");
          setShowModal(false);
          setIsLogin({
            isLogin: true,
            memberId: localStorage.getItem("member_id"),
          });
        })
        .catch((error) => {
          const { data } = error.response;
          swal(data.result.status, data.result.message, "error");
        });
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <S.ModalWrapper>
      <S.ModalContent>
        <h1>{newAccount ? "회원가입" : "로그인"}</h1>

        <S.FormStyle onSubmit={onSubmit}>
          <input
            name="email"
            type="email"
            placeholder="이메일"
            required
            value={email}
            onChange={onChange}
          />

          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            required
            value={password}
            onChange={onChange}
          />

          {newAccount && (
            <>
              <input
                name="nickName"
                type="text"
                placeholder="닉네임"
                required
                value={nickName}
                onChange={onChange}
              />
            </>
          )}

          <button type="submit">{newAccount ? "회원가입" : "로그인"}</button>
        </S.FormStyle>
        <S.SpanWrapper>
          <S.SpanText onClick={toggleAccount}>
            {newAccount ? "로그인하기" : "회원가입하기"}
          </S.SpanText>
        </S.SpanWrapper>
        <S.CloseButton onClick={() => setShowModal(false)}>닫기</S.CloseButton>
      </S.ModalContent>
    </S.ModalWrapper>
  );
};

export default AuthModal;
