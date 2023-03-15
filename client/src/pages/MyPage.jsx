import React from "react";

import mypageApi from "../api/mypageApi";
const MyPage = () => {
  const testBtn = async () => {
    try {
      const data = await mypageApi.getMyPage();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>MyPage</h1>
      <button onClick={testBtn}>api test</button>
    </div>
  );
};

export default MyPage;
