import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import styled from "styled-components";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import { useRef } from "react";
import { useRecoilState } from "recoil";
import { MarkdownState } from "../../recoil/atom";
import getPost from "../../api/getpostApi";
import { useState } from "react";
const EditMarkdown = () => {
  const editorRef = useRef();

  const [markdown, setMarkdown] = useRecoilState(MarkdownState);
  const [title, setTitle] = useState("test");
  const [category, setCategory] = useState("test11");

  const onChange = () => {
    const data = editorRef.current.getInstance().getMarkdown();
    console.log(data);
    setMarkdown(data);
  };

  const onSubmit = async () => {
    console.log(markdown);
    const data = {
      title: title,
      category: category,
      contents: markdown,
      Images: [],
    };
    const result = await getPost.createPost(data);
    console.log(result);
  };

  const onUploadImage = async (blob, callback) => {
    // const url = await uploadImage(blob);
    console.log(blob);
    callback(blob, "alt text");
    return false;
  };

  return (
    <>
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
