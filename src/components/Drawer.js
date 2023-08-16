import React, { useState } from "react";

const Drawer = () => {
  const [isOpen, setMenu] = useState(false); // 메뉴의 초기값을 false로 설정

  const toggleMenu = () => {
    setMenu((isOpen) => !isOpen); // on,off 개념 boolean
  };

  return (
    <div className="header">
      <ul className="header-wrapper">
        <li>
          <button onClick={() => toggleMenu()}></button>
        </li>{" "}
        // 클릭되었을 때 준비한 함수 호출! on off 개념
      </ul>
      <ul className={isOpen ? "show-menu" : "hide-menu"}>
        <li>다가감 프로젝트 소개</li>
        <li>다가감 사전</li>
        <li>로그인</li>
        <li>회원가입</li>
      </ul>
    </div>
  );
};

export default Drawer;
