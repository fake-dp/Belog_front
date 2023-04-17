import React from "react";
import styled from "styled-components";
import { BiDotsVerticalRounded } from "react-icons/bi";
const MainHeader = () => {
  return (
    <MainHeaderWrapper>
      <div>
        <p>최신</p>
        <p>카테고리</p>
      </div>
      <div>
        <BiDotsVerticalRounded />
      </div>
    </MainHeaderWrapper>
  );
};

export default MainHeader;

export const MainHeaderWrapper = styled.div`
  margin-top: 5.5rem;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  > div {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin: 0.5rem 2rem;
    > p {
      font-size: 1rem;
      font-weight: bold;
      color: #868e96;
      margin-right: 1rem;
      &:hover {
        cursor: pointer;
        color: #ff793f;
      }
    }
    > svg {
      font-size: 1.5rem;
      color: #868e96;
      &:hover {
        cursor: pointer;
        color: #ff793f;
      }
    }
  }
`;
