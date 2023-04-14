import React from "react";
import styled from "styled-components";
const EditHeader = ({ title, setTitle, category, setCategory }) => {
  // console.log(title, category);

  const onChangetitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <InputTitle
        type="text"
        value={title}
        onChange={onChangetitle}
        placeholder="제목을 입력해주세요."
      />
    </>
  );
};

export default EditHeader;

const InputTitle = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  /* border-bottom: 1px solid #000; */
  font-size: 20px;
  font-weight: 600;
  outline: none;
  padding: 10px;
  /* margin-top: 20px; */
  background-color: #f7f1e3;
`;
