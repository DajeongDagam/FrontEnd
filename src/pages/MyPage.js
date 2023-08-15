import React from "react";
import logo from "../images/text-logo.png";
import drawer from "../images/draw-btn.png";
import editBtn from "../images/name-edit-btn.png";
import dictIcon from "../images/dict-icon.png";
import likeIcon from "../images/like-icon.png";
import "../css/mypage.scss";
import "../css/container.scss";

const MyPage = () => {
  const onEditBtnClick = () => {
    console.log("edit btn clicked!!!");
  };

  return (
    <div className="container">
      <div className="top-bar-container">
        <img src={logo} alt="다가감 로고" className="text-logo" />
        <img src={drawer} alt="메뉴" className="drawbar-btn" />
      </div>
      <div className="profile-container">
        <span className="nickname">닉네임</span>
        <img src={editBtn} alt="닉네임 수정 버튼" className="edit-btn" />
        <p>총 0개의 단어 사전에 참여하셨습니다!</p>
      </div>
      <div className="menu-container">
        <div className="menu-item">
          <img src={dictIcon} alt="사전 아이콘" className="menu-item-icon" />
          <p>참여한 사전 보기</p>
        </div>
        <div className="menu-item">
          <img src={likeIcon} alt="좋아요 아이콘" className="menu-item-icon" />
          <p>좋아요 누른 단어 보기</p>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
