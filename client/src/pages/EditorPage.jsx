import React from "react";
import EditHeader from "../components/editorpage/EditHeader";
import EditMarkdown from "../components/editorpage/EditMarkdown";
import styled from "styled-components";
const EdtiPage = () => {
  return (
    <EditorWrapper>
      <EditHeader />
      <EditMarkdown />
    </EditorWrapper>
  );
};

export default EdtiPage;

const EditorWrapper = styled.div`
  margin-top: 60px;
`;
