import React from "react";
import * as S from "../../styles/mysetting/MySettingStyled";
import { useRef, useState } from "react";
import mypageApi from "../../api/mypageApi";

import { EditIntroModalInput } from "./SettingInputModal";
const SettingHeader = ({ info, setInfo }) => {
  const imgRef = useRef();
  const [showItroModal, setShowIntroModal] = useState(false);

  const handleFileInput = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const formData = new FormData();
    // formData.append("file", file);
    const imgdata = formData.append("image", file);
    console.log("imgdata", imgdata);
    try {
      // const data = await mypageApi.uploadProfile();
    } catch (error) {
      console.log(error);
    }
  };

  const editIntroduceShowBtn = () => {
    setShowIntroModal(true);
  };

  console.log("info", info);

  return (
    <>
      <S.MyPageWrapper>
        <S.ContentsWrapper>
          <S.SettingHeaderWrapper>
            <S.ImgStyle src={info?.profiles[0].path} />
            <S.LabelStyle htmlFor="imgFile">이미지 업로드</S.LabelStyle>
            <S.FileInput
              type="file"
              accept="image/*"
              ref={imgRef}
              onChange={handleFileInput}
              id="imgFile"
            />
            {/* <EditBtn>이미지 제거</EditBtn> */}
            <S.EditBtn onClick={editIntroduceShowBtn}>소개글 작성</S.EditBtn>
          </S.SettingHeaderWrapper>
          <S.EditInfoWrapper>
            <h1>{info?.nickName}</h1>
            <p>{info?.introduce}</p>
          </S.EditInfoWrapper>
        </S.ContentsWrapper>
      </S.MyPageWrapper>
      {showItroModal && (
        <EditIntroModalInput
          setShowIntroModal={setShowIntroModal}
          setInfo={setInfo}
          info={info}
        />
      )}
    </>
  );
};

export default SettingHeader;
