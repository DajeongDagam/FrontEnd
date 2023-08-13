import React, { useState, useRef } from "react";
import "../css/container.scss";
import "../css/landing-page.scss";
import drawbar_btn from "../images/draw-btn.png";
import arrow_img from "../images/down-arrow-img.png";

const LandingPage = () => {
  return (
    <div className="background">
      <div className="container">
        <div className="top-bar-container">
          <div className="title-container">다가감</div>
          <div className="draw-btn-container">
            <img src={drawbar_btn} alt="햄버거버튼" className="drawbar-btn" />
          </div>
        </div>
        <div className="landing-content-container">
          <h1>디지털 격차 해결 프로젝트, 다가감</h1>
          <h3>
            청년층과 고령층 모두가 {"\n"}이해할 수 있는 용어를 사용해 {"\n"}
            서로 다가가요
          </h3>
          <button>
            <img src={arrow_img} alt="아래로" className="arrow-img" />
          </button>
          <div>{/* <h1>디지털 격차 해결</h1> */}</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
