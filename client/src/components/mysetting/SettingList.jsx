import React from "react";
import mypageApi from "../../api/mypageApi";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import * as S from "../../styles/mysetting/MySettingStyled";
import { useRecoilState } from "recoil";
import { loginState } from "../../recoil/atom";
import {
  EditNickNameModalInput,
  EditPasswordModalInput,
} from "./SettingInputModal";
import { useState } from "react";

const SettingList = ({ info, setInfo }) => {
  const navigate = useNavigate();
  const [nickNameInputShowModal, setNickNameInputShowModal] = useState(false);
  const [passwordInputSHowModal, setPasswordInputSHowModal] = useState(false);
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

  const editNickNameShowModal = () => {
    setNickNameInputShowModal(true);
  };

  const editPasswordShowModal = () => {
    setPasswordInputSHowModal(true);
  };

  return (
    <>
      <S.MySettingListWrapper>
        <S.MySettingListContents>
          <S.ListHeader>
            <h5>이메일 주소</h5>
            <p>{info?.email}</p>
          </S.ListHeader>
          <div>
            <S.ListPtag>
              회원 인증 또는 시스템에서 발송하는 이메일을 수신하는 주소입니다.
            </S.ListPtag>
          </div>
        </S.MySettingListContents>

        <S.MySettingListContents>
          <S.ListHeader>
            <h5>닉네임 변경</h5>
            <p>{info?.nickName}</p>
            <S.EditPtag onClick={editNickNameShowModal}>변경하기</S.EditPtag>
          </S.ListHeader>
          <div>
            <S.ListPtag>닉네임을 변경할 수 있습니다.</S.ListPtag>
          </div>
        </S.MySettingListContents>

        <S.MySettingListContents>
          <S.ListHeader>
            <h5>비밀번호 변경</h5>
            <S.EditPtag onClick={editPasswordShowModal}>변경하기</S.EditPtag>
          </S.ListHeader>
          <div>
            <S.ListPtag>비밀번호를 변경할 수 있습니다.</S.ListPtag>
          </div>
        </S.MySettingListContents>

        <div>
          <S.DeleteBtn onClick={deleteMemberBtn}>회원탈퇴</S.DeleteBtn>
        </div>
      </S.MySettingListWrapper>
      {nickNameInputShowModal && (
        <EditNickNameModalInput
          nickNameInputShowModal={nickNameInputShowModal}
          setNickNameInputShowModal={setNickNameInputShowModal}
          info={info}
          setInfo={setInfo}
        />
      )}
      {passwordInputSHowModal && (
        <EditPasswordModalInput
          passwordInputSHowModal={passwordInputSHowModal}
          setPasswordInputSHowModal={setPasswordInputSHowModal}
        />
      )}
    </>
  );
};
export default SettingList;
