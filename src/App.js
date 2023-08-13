import LandingPage from "./pages/LandingPage";
import DictionaryPage from "./pages/DictionaryPage";
import MyPage from "./pages/MyPage";
import { Route, Routes } from "react-router-dom";

import React from "react";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/" element={<DictionaryPage />} />
      <Route path="/" element={<MyPage />} />
    </Routes>
  );
}

export default App;
