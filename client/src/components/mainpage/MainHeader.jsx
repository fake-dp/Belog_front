import React, { useState } from "react";
import styled from "styled-components";
import { BiDotsVerticalRounded } from "react-icons/bi";
import InfoModals from "./InfoModals";
const MainHeader = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <>
      <MainHeaderWrapper>
        <div>
          <p>최신</p>
          <p>카테고리</p>
        </div>
        <div>
          <p onClick={toggleInfo}>
            {" "}
            <BiDotsVerticalRounded />
          </p>
        </div>
      </MainHeaderWrapper>
      {showInfo && (
        <InfoMenuWrapper>
          <div onClick={() => setShowModal(true)}>
            <p>공지사항</p>
            <p>프로젝트 맴버</p>
            <p>버전</p>
            <p>노션 링크</p>
            <p>깃헙 주소</p>
          </div>
        </InfoMenuWrapper>
      )}
      {showModal && <InfoModals setShowModal={setShowModal} />}
    </>
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
    > p {
      svg {
        font-size: 1.5rem;
        color: #868e96;
        &:hover {
          cursor: pointer;
          color: #ff793f;
        }
      }
    }
  }
`;

const InfoMenuWrapper = styled.div`
  position: relative;

  > div {
    top: 0px;
    right: 60px;
    position: absolute;
    z-index: 5;
    width: 12rem;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
    > p {
      padding: 1rem 2rem;
      font-size: 0.875rem;
      cursor: pointer;
      &:hover {
        background: #f8f9fa;
        color: #212529;
        font-weight: bold;
        transition: all 0.125s ease-in 0s;
        border-radius: 0.25rem;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
      }
    }
  }
`;
