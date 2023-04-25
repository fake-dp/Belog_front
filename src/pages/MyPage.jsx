import { LayoutMargin } from "../styles/common/LayoutMarginStyled";

import UseIsLogin from "../hook/UseIsLogin";
import styled from "styled-components";
const MyPage = () => {
  UseIsLogin();
  // const [info, setInfo] = useRecoilState(MyInfoState);

  // useEffect(() => {
  //   const getMyInfo = async () => {
  //     try {
  //       const { data } = await mypageApi.getMyPage();
  //       const { body } = data;
  //       const resultData = body;
  //       setInfo(resultData);
  //       console.log("my", resultData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getMyInfo();
  // }, []);

  return (
    <LayoutMargin>
      {/* <MyInfoHeader />
      <SideTab info={info} /> */}
      <CenterText>준비 중입니다...!</CenterText>
    </LayoutMargin>
  );
};

export default MyPage;

const CenterText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin-top: 30rem;
  height: 100%;
`;
