import MyInfoHeader from "../components/mypage/MyInfoHeader";
import SideTab from "../components/mypage/SideTab";
import { LayoutMargin } from "../styles/common/LayoutMarginStyled";
import mypageApi from "../api/mypageApi";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { MyInfoState } from "../recoil/atom";

const MyPage = () => {
  const [info, setInfo] = useRecoilState(MyInfoState);

  useEffect(() => {
    const getMyInfo = async () => {
      try {
        const { data } = await mypageApi.getMyPage();
        const { body } = data;
        const resultData = body;
        setInfo(resultData);
        console.log("my", resultData);
      } catch (error) {
        console.log(error);
      }
    };
    getMyInfo();
  }, []);

  return (
    <LayoutMargin>
      <MyInfoHeader />
      <SideTab info={info} />
    </LayoutMargin>
  );
};

export default MyPage;
