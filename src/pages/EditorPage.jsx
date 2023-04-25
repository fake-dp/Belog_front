import React from "react";
import EditMarkdown from "../components/editorpage/EditMarkdown";

import { LayoutMargin } from "../styles/common/LayoutMarginStyled";
import UseIsLogin from "../hook/UseIsLogin";
const EdtiPage = () => {
  UseIsLogin();

  return (
    <LayoutMargin>
      <EditMarkdown />
    </LayoutMargin>
  );
};

export default EdtiPage;
