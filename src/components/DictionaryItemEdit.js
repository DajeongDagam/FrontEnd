import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/dict-item-edit.scss";

const DictionaryItemEdit = ({ dict, wordId }) => {
  const word = dict.filter((word) => word.id === parseInt(wordId));
  const [desc, setDesc] = useState(word[0].description);

  const navigate = useNavigate();

  const onClickBtn = (e) => {
    // 수정 요청
    console.log("제출하기 버튼 클릭");
    console.log(desc);
    e.preventDefault();

    navigate({
      pathname: `/dictionary/${wordId}`,
    });
  };

  const onChange = (e) => {
    setDesc(e.target.value);
  };

  return (
    <div className="edit-page-container">
      <div className="word-title-container">
        <span>{word[0].title}</span>
        <p>문서를 수정중입니다.</p>
      </div>
      <div className="edit-container">
        <textarea
          className="edit-textarea"
          onChange={onChange}
          defaultValue={desc}
        ></textarea>
        <div className="button-container">
          <button className="submit-button" onClick={onClickBtn}>
            제출하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default DictionaryItemEdit;
