import React from "react";
import SettingHeader from "../components/mysetting/SettingHeader";
import SettingList from "../components/mysetting/SettingList";
import { useRecoilValue } from "recoil";
import mypageApi from "../api/mypageApi";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { MyInfoState } from "../recoil/atom";
const SettingPage = () => {
  const [info, setInfo] = useRecoilState(MyInfoState);

  console.log("@#!@#", info);

  useEffect(() => {
    const getMyInfo = async () => {
      try {
        const { data } = await mypageApi.getMyPage();
        const { body } = data;
        const resultData = body;
        console.log("dd", resultData);
        setInfo(resultData);
      } catch (error) {
        console.log(error);
      }
    };
    getMyInfo();
  }, []);

  return (
    <>
      <SettingHeader info={info} />
      <SettingList info={info} />
    </>
  );
};

export default SettingPage;
