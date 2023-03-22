import React from "react";
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

import { useRecoilValue } from "recoil";
import { MarkdownState } from "../../recoil/atom";
import styled from "styled-components";
const MyPostList = () => {
  const markdown = useRecoilValue(MarkdownState);

  return (
    <EditorWrapper>
      <Viewer initialValue={markdown || ""} />
    </EditorWrapper>
  );
};

export default MyPostList;

const EditorWrapper = styled.div`
  margin-top: 60px;
`;
