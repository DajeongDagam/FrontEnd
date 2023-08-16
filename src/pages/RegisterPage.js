import React, { useState } from "react";
import logo from "../images/logo-img.png";
import "../css/register-page.scss";
import "../css/container.scss";
import API from "../utils/API";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const emailRegExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    const passwordRegExp = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;

    if (
      email === "" ||
      password === "" ||
      rePassword === "" ||
      nickname === ""
    ) {
      alert("필요한 정보를 모두 입력해주세요.");
    }

    if (!emailRegExp.test(email)) {
      // 이메일 유효성 검사
      alert("올바른 이메일 주소를 입력하세요.");
      setEmail("");
    } else if (!passwordRegExp.test(password)) {
      // 비밀번호 유효성 검사
      alert("비밀번호는 문자, 숫자, 특수문자를 포함하여 6~20자로 설정하세요.");
      setPassword("");
      setRePassword("");
    } else if (password !== rePassword) {
      // 비밀번호 2차 검증
      alert("비밀번호가 일치하지 않습니다.");
      setPassword("");
      setRePassword("");
    } else {
      // 회원가입 요청
      const request = {
        email: email,
        name: nickname,
        password: password,
      };

      API.post("/member/register", request).then((res) => {
        console.log(res);
        navigate("/");
      });
    }
  };

  const onEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const onRePasswordChange = (e) => {
    e.preventDefault();
    setRePassword(e.target.value);
  };

  const onNicknameChange = (e) => {
    e.preventDefault();
    setNickname(e.target.value);
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
            <input
              type="password"
              placeholder="비밀번호를 다시 한 번 입력하세요"
              className="input-box"
              onChange={onRePasswordChange}
              value={rePassword}
            />
            <input
              type="text"
              placeholder="닉네임을 입력하세요"
              className="input-box"
              onChange={onNicknameChange}
              value={nickname}
            />
            <button className="register-btn" onClick={onSubmit}>
              회원가입
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
