import MyInfoHeader from "../components/mypage/MyInfoHeader";
import SideTab from "../components/mypage/SideTab";
import styled from "styled-components";
const MyPage = () => {
  return (
    <MyPageWrapper>
      <MyInfoHeader />
      <SideTab />
    </MyPageWrapper>
  );
};

export default MyPage;

const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
