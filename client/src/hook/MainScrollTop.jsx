import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
const MainScrollTop = () => {
  const [isScroll, setIsScroll] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 100) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ScrollToTop = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #f5f5f5;
    border: none;
    outline: none;
    cursor: pointer;
    display: ${isScroll ? "block" : "none"};
    svg {
      font-size: 30px;
      color: #000;
    }
  `;

  return (
    <ScrollToTop onClick={onClick}>
      <AiOutlineArrowUp />
    </ScrollToTop>
  );
};

export default MainScrollTop;
