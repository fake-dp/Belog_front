import React from "react";

const Introduction = ({ info }) => {
  // console.log("!@#!@#", info);
  return (
    <div>
      {info?.introduce === null ? (
        <p>설정에서 자기소개를 입력해주세요.</p>
      ) : (
        <p>{info?.introduce}</p>
      )}
    </div>
  );
};

export default Introduction;
