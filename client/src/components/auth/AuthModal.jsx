import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axois from "axios";
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

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  }
`;

const AuthModal = ({ setShowModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickName, setnickName] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");

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
      const data = await axois
        .post(
          "http://3.34.53.11:8080/member-service/api/v1/members",
          {
            email,
            password,
            nickName,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(data);
    } else {
      const data = await axois
        .post("http://3.34.53.11:8080/auth-service/login", {
          email,
          password,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(data);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <ModalWrapper>
      <ModalContent>
        <h1>{newAccount ? "회원가입" : "로그인"}</h1>
        <FormStyle onSubmit={onSubmit}>
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
            <input
              name="nickName"
              type="text"
              placeholder="닉네임"
              required
              value={nickName}
              onChange={onChange}
            />
          )}

          <button type="submit">{newAccount ? "회원가입" : "로그인"}</button>
        </FormStyle>
        <span onClick={toggleAccount}>
          {newAccount ? "로그인하기" : "회원가입하기"}
        </span>
        <button onClick={() => setShowModal(false)}>닫기</button>
      </ModalContent>
    </ModalWrapper>
  );
};

export default AuthModal;
