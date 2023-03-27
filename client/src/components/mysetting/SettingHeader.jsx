import React from "react";
import * as S from "../../styles/mysetting/MySettingStyled";
import { useRef } from "react";
import mypageApi from "../../api/mypageApi";

const SettingHeader = ({ info, setInfo }) => {
  const imgRef = useRef();

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

  console.log("info", info);

  return (
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
          <S.EditBtn>소개글 수정</S.EditBtn>
        </S.SettingHeaderWrapper>
        <S.EditInfoWrapper>
          <h1>{info?.nickName}</h1>
          <p>안녕하세요! 뭐뭐 입니다. 소개글입니다.</p>
        </S.EditInfoWrapper>
      </S.ContentsWrapper>
    </S.MyPageWrapper>
  );
};

export default SettingHeader;
