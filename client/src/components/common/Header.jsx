import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const GoHome = () => {
    window.location.href = "/";
  };

  const GoEditPage = () => {
    window.location.href = "/edit";
  };

  return (
    <>
      <div>
        <Link to="/">Home</Link>
      </div>
      <Link to="/edit">Edit</Link>
    </>
  );
};

export default Header;
