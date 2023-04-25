import { useEffect } from "react";

function UseIsLogin() {
  useEffect(() => {
    const myId = localStorage.getItem("access_token");
    if (myId) {
      return;
    } else if (!myId) {
      alert("로그인이 필요한 페이지입니다.");
      window.location.href = "/";
    }
  }, []);

  return;
}

export default UseIsLogin;
