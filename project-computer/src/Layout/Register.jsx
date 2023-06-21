import React, { useEffect, useRef, useState } from "react";
import "../Assets/signin.css";

const Register = () => {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");

  async function signUp() {
    let item = { email, pass };

    let result = await fetch(
      "https://6485ce2fa795d24810b7565b.mockapi.io/api/v1/register",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        // Send your data in the request body as JSON
        body: JSON.stringify(item),
      }
    );

    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
  }
  return (
    <>
      <h1>Đăng ký</h1>
      <form action="">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="     Nhập số điện thoại hoặc email của bạn để đăng ký"
          className="sign-input"
        />
        <br /> <br />
        <input
          placeholder="     Nhập mật khẩu"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          name=""
          id=""
          className="sign-input"
        />{" "}
        <br />
        <br />
        <br />
        <button onClick={signUp} className="log-btn">
          ĐĂNG KÝ
        </button>
      </form>
    </>
  );
};

export default Register;
