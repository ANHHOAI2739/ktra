import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Assets/signin.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (localStorage.getItem("user-info")) {
  //     navigate.push("/add");
  //   }
  // }, []);

  function login() {
    console.log(email, pass);
  }

  return (
    <>
      <h1>Đăng nhập</h1>
      <form action="">
        <input
          placeholder="     Tên đăng nhập/Email/Số điện thoại"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          className="sign-input"
        />{" "}
        <br /> <br />
        <input
          placeholder="     Mật khẩu"
          type="password"
          name=""
          id=""
          onChange={(e) => setPass(e.target.value)}
          className="sign-input"
        />{" "}
        <br />
        <br />
        <br />
        <button onClick={login} className="log-btn">
          ĐĂNG NHẬP
        </button>
      </form>
    </>
  );
};

export default Login;
