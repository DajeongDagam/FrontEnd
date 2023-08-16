import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/dict-item-edit.scss";

const DictionaryItemRegister = ({ keyword }) => {
  const [desc, setDesc] = useState("");
  const onChange = (e) => {
    setDesc(e.target.value);
  };

  const navigate = useNavigate();

  const onClickBtn = (e) => {
    // 등록 요청
    console.log("등록하기 버튼 클릭");
    console.log(desc);
    e.preventDefault();

    navigate({
      pathname: `/dictionary`,
    });
  };

  return (
    <div className="edit-page-container">
      <div className="word-title-container">
        <span>{keyword}</span>
        <p>문서를 작성중입니다.</p>
      </div>
      <div className="edit-container">
        <textarea
          className="edit-textarea"
          onChange={onChange}
          placeholder="설명을 작성해주세요"
        ></textarea>
        <div className="button-container">
          <button className="submit-button" onClick={onClickBtn}>
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default DictionaryItemRegister;
