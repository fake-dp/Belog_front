import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthModal from "../auth/AuthModal";
const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const goEditPage = () => {
    navigate("/edit");
  };

  return (
    <>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <p onClick={goEditPage}>Edit</p>
        <p onClick={() => setShowModal(true)}>Login</p>
      </div>
      {showModal && <AuthModal setShowModal={setShowModal} />}
    </>
  );
};

export default Header;
