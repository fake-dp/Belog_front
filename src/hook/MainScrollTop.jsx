import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { ScrollToTop } from "../styles/mainpage/MainStyled";
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

  return (
    <ScrollToTop onClick={onClick} isScroll={isScroll}>
      <AiOutlineArrowUp />
    </ScrollToTop>
  );
};

export default MainScrollTop;
