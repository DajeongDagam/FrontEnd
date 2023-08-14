import React from "react";
import reportIcon from "../images/report-icon.png";
import shareIcon from "../images/share-icon.png";
import "../css/dict-item-detail.scss";
import { useNavigate } from "react-router-dom";

const DictionaryItemDetail = ({ dict, keyword }) => {
  const word = dict.filter((word) => word.title === keyword);
  const navigate = useNavigate();

  const onClickLikeBtn = () => {
    console.log("onClickLikeBtn Clicked!!!");
  };

  const onClickEditBtn = () => {
    navigate({
      pathname: "/dictionary/edit",
      search: `?keyword=${word[0].title}`,
    });
  };

  return (
    <div className="detail-container">
      <span className="word-title">{word[0].title}</span>
      <div className="info">
        <p className="word-author">
          {word[0].author} 외 참여자 {word[0].participants}명
        </p>
        <div className="info-right">
          <img src={reportIcon} alt="신고 버튼" className="report-icon" />
          <img src={shareIcon} alt="공유 버튼" className="share-icon" />
        </div>
      </div>
      <p className="word-desc">{word[0].description}</p>
      <div className="buttons-container">
        <div className="buttons-flex">
          <button type="button" className="like-btn" onClick={onClickLikeBtn}>
            좋아요
          </button>
          <button type="button" className="edit-btn" onClick={onClickEditBtn}>
            수정 참여
          </button>
        </div>
      </div>
    </div>
  );
};

export default DictionaryItemDetail;
