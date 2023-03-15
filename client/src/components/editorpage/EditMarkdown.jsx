import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import styled from "styled-components";
const EditMarkdown = () => {
  return (
    <EditorWrapper>
      <Editor
        initialValue="hello react"
        previewStyle="vertical"
        height="80vh"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
    </EditorWrapper>
  );
};

export default EditMarkdown;

const EditorWrapper = styled.div`
  margin-top: 60px;
`;
