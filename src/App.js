import LandingPage from "./pages/LandingPage";
import DictionaryPage from "./pages/DictionaryPage";
import MyPage from "./pages/MyPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Drawer from "./components/Drawer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dictionary" element={<DictionaryPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dictionary/:id/edit" element={<DictionaryPage />} />
      <Route path="/dictionary/search" element={<DictionaryPage />} />
      <Route path="/dictionary/:id" element={<DictionaryPage />} />
      <Route path="/dictionary/new" element={<DictionaryPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
