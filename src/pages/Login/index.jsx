import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/index";
import * as L from "./style";
function Login() {
  return (
    <>
      <Navbar />
      <L.Container>
        <form className="form">
          <h3 className="title-login">تسجيل دخول</h3>
          <label className="email">
            البريد الالكتروني <span>*</span>
          </label>
          <input type="email" className="email-input" />
          <label className="password">
            {" "}
            كلمة المرور <span>*</span>{" "}
          </label>
          <input type="password" className="password-input" />
          <button type="submit" className="btn">
            تسجيل دخول
          </button>
        </form>
      </L.Container>
      <Footer />
    </>
  );
}

export default Login;
