import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

const EditMarkdown = () => {
  return (
    <Editor
      initialValue="hello react"
      previewStyle="vertical"
      height="80vh"
      initialEditType="markdown"
      useCommandShortcut={true}
    />
  );
};

export default EditMarkdown;
