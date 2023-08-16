import React from "react";
import "../css/dict-item.scss";
import likeIcon from "../images/like-icon.png";
import { Link } from "react-router-dom";

const DictionaryItem = ({ id, title, description, author, date, like }) => {
  return (
    <Link to={`/dictionary/${id}`} key={id}>
      <div className="dict-item-container">
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
    </Link>
  );
};

export default DictionaryItem;
