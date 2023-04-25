import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import styled from "styled-components";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import { useRef, useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { MarkdownState } from "../../recoil/atom";
import editApi from "../../api/editApi";
import EditHeader from "./EditHeader";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { BiArrowBack } from "react-icons/bi";

const EditMarkdown = () => {
  const editorRef = useRef();
  const [contents, setcontents] = useRecoilState(MarkdownState);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("IT");
  const [images, setImages] = useState([]);

  const navigate = useNavigate();

  const onChange = () => {
    const data = editorRef.current.getInstance().getMarkdown();
    // console.log(data);
    setcontents(data);
  };
  console.log("contents@@@", contents);
  const onSubmit = async () => {
    if (!title) {
      swal("제목을 입력해주세요.");
      return;
    }
    if (!contents) {
      swal("컨텐츠 내용을 입력해주세요.");
      return;
    }
    try {
      const data = await editApi.createPost({
        title,
        category,
        contents,
        images,
      });
      swal("글이 등록되었습니다.");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
      swal("글 등록에 실패했습니다.");
    }
  };

  const onUploadImage = async (blob, callback) => {
    try {
      const formData = new FormData();
      formData.append("image", blob);
      const data = await editApi.uploadImg(formData);
      const imageUrl = data.body.path;
      setImages((prev) => [...prev, imageUrl]);
      callback(imageUrl, "alt text");
    } catch (error) {
      console.log(error);
      swal("이미지 업로드에 실패했습니다.");
    }
  };

  // console.log("images", images);

  const goBack = () => {
    navigate("/");
  };

  return (
    <>
      <EditHeader
        setCategory={setCategory}
        title={title}
        category={category}
        setTitle={setTitle}
      />
      <Editor
        initialValue=""
        previewStyle="vertical"
        height="80vh"
        initialEditType="markdown"
        useCommandShortcut={false}
        plugins={[colorSyntax]}
        ref={editorRef}
        language="ko-KR"
        onChange={onChange}
        hideModeSwitch={true}
        hooks={{
          addImageBlobHook: onUploadImage,
        }}
      />
      <BtnWrapper>
        <div>
          <GobackBtn onClick={goBack}>
            <BiArrowBack />
            <span>나가기</span>
          </GobackBtn>
          <SubmitBtn onClick={onSubmit}>출간하기</SubmitBtn>
        </div>
      </BtnWrapper>
    </>
  );
};

export default EditMarkdown;

const GobackBtn = styled.button`
  height: 2.5rem;
  padding: 0.5rem 1rem;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background: none;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  display: flex;
  outline: none;
  color: #212529;
  height: 2.5rem;
  font-size: 1.125rem;
  > span {
    margin-left: 0.5rem;
  }
`;

const SubmitBtn = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  background: #12b886;
  color: #fff;
  border-radius: 4px;
  padding: 0px 1.25rem;
  height: 2rem;
  font-size: 1.125rem;
  margin-right: 15px;
  &:hover {
    background: #0ca678;
  }
`;

const BtnWrapper = styled.div`
  position: fixed;
  bottom: 0px;
  width: 50%;
  > div {
    display: flex;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    height: 4rem;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
    background: #fff;
  }
`;
