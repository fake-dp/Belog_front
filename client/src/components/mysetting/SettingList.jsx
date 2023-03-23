import React from "react";

const SettingList = ({ info }) => {
  return (
    <div>
      <h1>SettingList</h1>
      <p>{info?.email}</p>
      <button>회원탈퇴</button>
    </div>
  );
};

export default SettingList;
