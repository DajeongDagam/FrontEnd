import React, { useState } from "react";
import logo from "../images/logo-text-img.png";
import "../css/dict-top-search-nav.scss";
import drawer from "../images/draw-btn.png";
import arrow from "../images/angle-down-white.png";
import { Link } from "react-router-dom";
import cn from "classnames";

const DictTopSearchNav = ({ hideCategory, search }) => {
  const [keyword, setKeyword] = useState("");

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(keyword);
    search(keyword);
  };

  return (
    <>
      <div className="nav-container">
        <Link to="/" className="logo-a-link">
          <img src={logo} alt="로고이미지" className="logo-text-img" />
        </Link>
        <form id="search" onSubmit={onSubmit} className="search-box-form">
          <input
            type="text"
            name="search"
            className="search-input-box"
            onChange={onChange}
          />
        </form>
        <img src={drawer} alt="메뉴" className="drawer" />
      </div>
      <div className={cn("category-select", { hideCategory })}>
        <p>신조어</p>
        <img src={arrow} alt="카테고리 선택 버튼" className="down-arrow" />
      </div>
    </>
  );
};

export default DictTopSearchNav;
