import React from "react";
import logo from "../images/logo-text-img.png";
import "../css/dict-top-search-nav.scss";
import drawer from "../images/draw-btn.png";
import arrow from "../images/angle-down-white.png";

const DictTopSearchNav = () => {
  return (
    <>
      <div className="nav-container">
        <img src={logo} alt="로고이미지" className="logo-text-img" />
        <input type="text" className="search-input-box" />
        <img src={drawer} alt="메뉴" className="drawer" />
      </div>
      <div className="category-select">
        <p>신조어</p>
        <img src={arrow} alt="카테고리 선택 버튼" className="down-arrow" />
      </div>
    </>
  );
};

export default DictTopSearchNav;
