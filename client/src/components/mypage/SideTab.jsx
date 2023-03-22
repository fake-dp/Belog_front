import React from "react";
import { useState } from "react";
import Introduction from "./Introduction";
import MyPostList from "./MyPostList";
import MyScrap from "./MyScrap";
const SideTab = () => {
  const [tab, setTab] = useState({
    active: 0,
  });

  const objTab = {
    0: <Introduction />,
    1: <MyPostList />,
    2: <MyScrap />,
  };

  const changeTabBtn = (e) => {
    setTab({ active: e });
  };

  return (
    <div>
      <div>
        <li onClick={() => changeTabBtn(0)}>소개</li>
        <li onClick={() => changeTabBtn(1)}>작성한 글</li>
        <li onClick={() => changeTabBtn(2)}>스크랩</li>
      </div>
      <div>{objTab[tab.active]}</div>
    </div>
  );
};

export default SideTab;
