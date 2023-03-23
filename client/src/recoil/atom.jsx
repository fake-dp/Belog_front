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

export const MyInfoState = atom({
  key: "MyInfoState",
  default: {
    memberId: null,
    nickName: null,
    email: null,
    profiles: [
      {
        path: null,
        createdAt: null,
      },
    ],
  },
});
