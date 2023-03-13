import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import MyPage from "../pages/MyPage";
import EditorPage from "../pages/EditorPage";
import DetailPage from "../pages/DetailPage";
import Layout from "../layout/Layout";
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/edit" element={<EditorPage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
