import React from "react";
import logo from "../images/logo-img.png";
import "../css/login-page.scss";
import "../css/container.scss";
const LoginPage = () => {
  return (
    <>
      <div className="container">
        <div className="login-container">
          <div className="logo-container">
            <img src={logo} alt="로고이미지" className="logo-img" />
          </div>
          <form>
            <input
              type="text"
              placeholder="이메일을 입력하세요"
              className="input-box"
            />

            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="input-box"
            />
            <button className="login-btn">로그인</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
