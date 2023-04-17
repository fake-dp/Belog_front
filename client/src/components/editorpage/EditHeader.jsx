import React from "react";
import styled from "styled-components";
const EditHeader = ({ title, setTitle, category, setCategory }) => {
  // console.log(title, category);

  const onChangetitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <TitleWrapper>
        <TextTitle
          type="text"
          value={title}
          onChange={onChangetitle}
          placeholder="제목을 입력해주세요."
        />
        <LineTitle></LineTitle>
      </TitleWrapper>
    </>
  );
};

export default EditHeader;

const TitleWrapper = styled.div`
  margin-top: 5rem;
  margin-left: 3rem;
`;

const TextTitle = styled.textarea`
  background: transparent;
  display: block;
  padding: 0px;
  font-size: 1.8rem;
  width: 100%;
  height: 43px;
  resize: none;
  line-height: 1.5;
  outline: none;
  border: none;
  font-weight: bold;
  color: #212529;
`;

const LineTitle = styled.div`
  background: rgb(73, 80, 87);
  height: 6px;
  width: 4rem;
  margin-top: 1.2rem;
  margin-bottom: 1.5rem;
  border-radius: 1px;
`;
