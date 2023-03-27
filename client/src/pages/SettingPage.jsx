import React from "react";
import SettingHeader from "../components/mysetting/SettingHeader";
import SettingList from "../components/mysetting/SettingList";
import mypageApi from "../api/mypageApi";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { MyInfoState } from "../recoil/atom";
const SettingPage = () => {
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
    <>
      <SettingHeader info={info} setInfo={setInfo} />
      <SettingList info={info} setInfo={setInfo} />
    </>
  );
};

export default SettingPage;
