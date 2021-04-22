import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/index";
import * as R from "./style";
function Register() {
  return (
    <>
      <Navbar />
      <R.Container>
        <form className="form">
          <h3 className="title-register"> تسجيل مستخدم جديد</h3>
          <label className="name">
            الاسم <span>*</span>
          </label>
          <input type="text" className="name-input" />
          <label className="email">
            البريد الالكتروني <span>*</span>
          </label>
          <input type="email" className="email-input" />
          <label className="phone">رقم الجوال</label>
          <input
            type="text"
            placeholder="رقم الجوال سوف يتم استخدامه فقط من قبل المدرب للتواصل (اختياري)"
            className="phone-input"
          />
          <label className="password">
            {" "}
            كلمة المرور <span>*</span>{" "}
          </label>
          <input type="password" className="password-input" />
          <button type="submit" className="btn">
            التسجيل
          </button>
          <p className="other-link">
            هل أنت مسجل في الأكاديمية من قبل؟
            <a href="#e">سجّل دخولك من هنا</a>
          </p>
        </form>
      </R.Container>
      <Footer />
    </>
  );
}

export default Register;
