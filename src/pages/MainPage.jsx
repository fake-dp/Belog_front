import React from "react";
import MainPostList from "../components/mainpage/MainPostList";
import MainScrollTop from "../hook/MainScrollTop";
import { LayoutMargin } from "../styles/common/LayoutMarginStyled";

const MainPage = () => {
  return (
    <LayoutMargin>
      <MainPostList />
      <MainScrollTop />
    </LayoutMargin>
  );
};

export default MainPage;
