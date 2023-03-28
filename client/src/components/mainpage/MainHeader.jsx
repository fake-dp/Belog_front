import React from "react";
import styled from "styled-components";
const MainHeader = () => {
  return (
    <MainHeaderWrapper>
      {/* <div>트렌딩</div> */}
      <div>최신</div>
      <div>카테고리</div>
    </MainHeaderWrapper>
  );
};

export default MainHeader;

export const MainHeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  height: 60px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  width: 20rem;
  margin: 1rem;
  cursor: pointer;
  > div {
    margin: 0 1rem;
    &:hover {
      color: #ff6b6b;
      border-bottom: 2px solid #ff6b6b;
    }
  }
`;
