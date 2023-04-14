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
import getPost from "../../api/getpostApi";
import EditHeader from "./EditHeader";

const EditMarkdown = () => {
  const editorRef = useRef();

  const [markdown, setMarkdown] = useRecoilState(MarkdownState);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("IT");
  const [images, setImages] = useState([]);

  const onChange = () => {
    const data = editorRef.current.getInstance().getMarkdown();
    console.log(data);
    setMarkdown(data);
  };

  const onSubmit = async () => {
    console.log(markdown);
  };

  const onUploadImage = async (blob, callback) => {
    try {
      const formData = new FormData();
      formData.append("image", blob);
      console.log("1111111112");
      const data = await getPost.uploadImg(formData);
      console.log("222222222");
      console.log("@@result@@", data.result, data.body);
      // console.log("1@@@@@", result.body.path);
      const imageUrl = data.body.path;
      // 이미지 상태관리를 배열에 넣어주세요
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
        initialValue="hello react"
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
      <button onClick={onSubmit}>제출하기</button>
    </>
  );
};

export default EditMarkdown;
