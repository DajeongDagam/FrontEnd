import React from "react";
import "../css/dict-item.scss";
import likeIcon from "../images/like-icon.png";
import { useNavigate } from "react-router-dom";

const DictionaryItem = ({ title, description, author, date, like }) => {
  const navigate = useNavigate();

  const showDetails = () => {
    navigate({
      pathname: "/dictionary",
      search: `?keyword=${title}`,
    });
  };

  return (
    <div className="dict-item-container" onClick={showDetails}>
      <span className="word-title">{title}</span>
      <p className="word-desc">{description}</p>
      <div className="info">
        <p className="word-author">{author}</p>
        <div className="info-right">
          <p className="word-date">{date}</p>
          <img src={likeIcon} alt="좋아요" className="like-icon" />
          <p className="word-like">{like}</p>
        </div>
      </div>
    </div>
  );
};

export default DictionaryItem;
