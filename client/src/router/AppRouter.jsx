import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import MyPage from "../pages/MyPage";
import EditorPage from "../pages/EditorPage";
import DetailPage from "../pages/DetailPage";
import Layout from "../layout/Layout";
import SettingPage from "../pages/SettingPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/edit" element={<EditorPage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
