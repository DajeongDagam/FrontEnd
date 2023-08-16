import LandingPage from "./pages/LandingPage";
import DictionaryPage from "./pages/DictionaryPage";
import MyPage from "./pages/MyPage";
import LoginPage from "./pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dictionary" element={<DictionaryPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dictionary/edit" element={<DictionaryPage />} />
      <Route path="/dictionary/search" element={<DictionaryPage />} />
      <Route path="/dictionary/:id" element={<DictionaryPage />} />
    </Routes>
  );
}

export default App;
