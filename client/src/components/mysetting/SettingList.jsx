import React from "react";
import mypageApi from "../../api/mypageApi";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { loginState } from "../../recoil/atom";
import SettingInputModal from "./SettingInputModal";
import { useState } from "react";

const SettingList = ({ info }) => {
  const navigate = useNavigate();
  const [inputShowModal, setInputShowModal] = useState(false);
  const [isLogin, setIsLogin] = useRecoilState(loginState);

  const deleteMemberBtn = async () => {
    try {
      const { data } = await mypageApi.deleteMember();
      console.log(data);
      swal({
        title: "회원탈퇴가 완료되었습니다.",
        icon: "success",
        button: "확인",
      });
      localStorage.removeItem("token");
      localStorage.removeItem("member_id");
      localStorage.removeItem("access_token");
      setIsLogin({
        isLogin: false,
        memberId: null,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      swal({
        title: "회원탈퇴에 실패하였습니다.",
        icon: "error",
        button: "확인",
      });
    }
  };

  const editShowModal = () => {
    setInputShowModal(true);
  };

  return (
    <>
      <MySettingListWrapper>
        <MySettingListContents>
          <ListHeader>
            <h5>이메일 주소</h5>
            <p>{info?.email}</p>
          </ListHeader>
          <div>
            <ListPtag>
              회원 인증 또는 시스템에서 발송하는 이메일을 수신하는 주소입니다.
            </ListPtag>
          </div>
        </MySettingListContents>

        <MySettingListContents>
          <ListHeader>
            <h5>닉네임 변경</h5>
            <p>{info?.nickName}</p>
            <EditPtag onClick={editShowModal}>변경하기</EditPtag>
          </ListHeader>
          <div>
            <ListPtag>닉네임을 변경할 수 있습니다.</ListPtag>
          </div>
        </MySettingListContents>

        <MySettingListContents>
          <ListHeader>
            <h5>비밀번호 변경</h5>
            <EditPtag>변경하기</EditPtag>
          </ListHeader>
          <div>
            <ListPtag>비밀번호를 변경할 수 있습니다.</ListPtag>
          </div>
        </MySettingListContents>

        <div>
          <DeleteBtn onClick={deleteMemberBtn}>회원탈퇴</DeleteBtn>
        </div>
      </MySettingListWrapper>
      {inputShowModal && (
        <SettingInputModal
          inputShowModal={inputShowModal}
          setInputShowModal={setInputShowModal}
        />
      )}
    </>
  );
};

export default SettingList;

export const MySettingListWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MySettingListContents = styled.div`
  width: 700px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid grey;
  padding-bottom: 30px;
  padding-top: 30px;
`;

export const ListHeader = styled.div`
  display: flex;
  align-items: flex-end;
  > h5 {
    width: 150px;
    font-size: 20px;
    font-weight: 700;
  }
  > p {
    font-size: 13px;
    font-weight: 400;
  }
`;

export const ListPtag = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-top: 30px;
`;

export const DeleteBtn = styled.button`
  width: 100px;
  height: 30px;
  background-color: #f1f3f5;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 30px;
  &:hover {
    background-color: #e9ecef;
  }
`;

export const EditPtag = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-top: 30px;
  margin-left: 10px;
  color: #007bff;
  cursor: pointer;
`;
