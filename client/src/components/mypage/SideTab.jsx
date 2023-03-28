import React from "react";
import { useState } from "react";
import Introduction from "./Introduction";
import MyPostList from "./MyPostList";
import MyScrap from "./MyScrap";
import styled from "styled-components";
const SideTab = ({ info }) => {
  const [tab, setTab] = useState({
    active: 0,
  });

  const objTab = {
    0: <Introduction info={info} />,
    1: <MyPostList />,
    2: <MyScrap />,
  };

  const changeTabBtn = (e) => {
    setTab({ active: e });
  };

  return (
    <ContentsWrapper>
      <TabWrapper>
        <li onClick={() => changeTabBtn(0)}>소개</li>
        <li onClick={() => changeTabBtn(1)}>작성한 글</li>
        <li onClick={() => changeTabBtn(2)}>스크랩</li>
      </TabWrapper>
      <div>{objTab[tab.active]}</div>
    </ContentsWrapper>
  );
};

export default SideTab;

const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 100%;
  background-color: #f1f3f5;
  border-right: 1px solid #e9ecef;
  li {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #e9ecef;
    cursor: pointer;
    &:hover {
      background-color: #e9ecef;
    }
  }
`;

const ContentsWrapper = styled.div`
  display: flex;
`;
