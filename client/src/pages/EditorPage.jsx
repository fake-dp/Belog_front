import React from "react";
import EditHeader from "../components/editorpage/EditHeader";
import EditMarkdown from "../components/editorpage/EditMarkdown";
import styled from "styled-components";
import { LayoutMargin } from "../styles/common/LayoutMarginStyled";
const EdtiPage = () => {
  return (
    <LayoutMargin>
      <EditMarkdown />
    </LayoutMargin>
  );
};

export default EdtiPage;
