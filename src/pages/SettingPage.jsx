import React from "react";
import SettingHeader from "../components/mysetting/SettingHeader";
import SettingList from "../components/mysetting/SettingList";
import mypageApi from "../api/mypageApi";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { MyInfoState } from "../recoil/atom";
import { LayoutMargin } from "../styles/common/LayoutMarginStyled";
import UseIsLogin from "../hook/UseIsLogin";
const SettingPage = () => {
  UseIsLogin();
  const [info, setInfo] = useRecoilState(MyInfoState);

  useEffect(() => {
    const getMyInfo = async () => {
      try {
        const { data } = await mypageApi.getMyPage();
        const { body } = data;
        const resultData = body;
        setInfo(resultData);
      } catch (error) {
        console.log(error);
      }
    };
    getMyInfo();
  }, []);

  return (
    <LayoutMargin>
      <SettingHeader info={info} setInfo={setInfo} />
      <SettingList info={info} setInfo={setInfo} />
    </LayoutMargin>
  );
};

export default SettingPage;
