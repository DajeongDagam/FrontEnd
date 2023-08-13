import React from "react";
import "../css/container.scss";
import drawbar_btn from "../images/draw-btn.png";

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
      </div>
    </div>
  );
};

export default LandingPage;
