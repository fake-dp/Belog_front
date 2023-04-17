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
const EditMarkdown = () => {
  const editorRef = useRef();
  const [contents, setcontents] = useRecoilState(MarkdownState);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("IT");
  const [images, setImages] = useState([]);

  const navigate = useNavigate();

  const onChange = () => {
    const data = editorRef.current.getInstance().getMarkdown();
    console.log(data);
    setcontents(data);
  };

  const onSubmit = async () => {
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
    }
  };

  const onUploadImage = async (blob, callback) => {
    try {
      const formData = new FormData();
      formData.append("image", blob);
      const data = await editApi.uploadImg(formData);

      console.log("@@result@@", data.result, data.body);
      const imageUrl = data.body.path;

      setImages((prev) => [...prev, imageUrl]);
      callback(imageUrl, "alt text");
    } catch (error) {
      console.log(error);
    }
  };

  console.log("images", images);

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
        hooks={{
          addImageBlobHook: onUploadImage,
        }}
      />
      <SubmitBtn onClick={onSubmit}>출간하기</SubmitBtn>
    </>
  );
};

export default EditMarkdown;

const SubmitBtn = styled.button`
  width: 100%;
  height: 50px;
  background-color: #000;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  border: none;
  cursor: pointer;
`;
