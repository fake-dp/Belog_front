import MyInfoHeader from "../components/mypage/MyInfoHeader";
import SideTab from "../components/mypage/SideTab";
import { LayoutMargin } from "../styles/common/LayoutMarginStyled";
const MyPage = () => {
  return (
    <LayoutMargin>
      <MyInfoHeader />
      <SideTab />
    </LayoutMargin>
  );
};

export default MyPage;
