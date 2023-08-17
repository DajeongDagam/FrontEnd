import React, { useState } from "react";
import logo from "../images/logo-img.png";
import "../css/login-page.scss";
import "../css/container.scss";
import API from "../utils/API";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    // 로그인 요청
    e.preventDefault();
    const request = {
      email: email,
      password: password,
    };

    API.post("member/login", request).then((res) => {
      console.log(res);
      navigate("/");
    });
  };

  const onEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

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
              onChange={onEmailChange}
              value={email}
            />
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="input-box"
              onChange={onPasswordChange}
              value={password}
            />
            <button className="login-btn" onClick={onSubmit}>
              로그인
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
