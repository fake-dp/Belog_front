import { atom } from "recoil";

export const loginState = atom({
  key: "loginState",
  default: {
    isLogin: false,
    memberId: null,
  },
});

export const MarkdownState = atom({
  key: "MarkDate",
  default: "",
});
