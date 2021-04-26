import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/index";
import * as R from "./style";
import { useHistory } from "react-router-dom";
import { LoginsContext } from "../../App";

import axios from "axios";
import * as yup from "yup";
const initState = {
  emailAddress: "",
  userName: "",
  password: "",
  name: "",
  surname: "sal",
  phone: "",
  error: "",
};
const schema = yup.object().shape({
  emailAddress: yup.string().email().required(),
  name: yup.string().required(),
  userName: yup.string().required(),
  password: yup.string().required().min(9),
});
function Register() {
  const { dispatch } = useContext(LoginsContext);
  const history = useHistory();
  const [state, setState] = useState(initState);
  const [errors, setErrors] = useState(initState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    emailAddress,
    userName,
    password,
    name,
    surname,
    error,
    phone,
  } = state;

  useEffect(() => {
    let mount = true;
    if (isSubmitted) {
      schema
        .validate(state, { abortEarly: false })
        .then(() => {
          if (mount) {
            setErrors({
              email: "",
              userName: "",
              password: "",
              name: "",
              surname: "",
              phone: "",
            });
          }
        })
        .catch((err) => {
          const newErrors = {};
          err.inner.forEach(({ path, message }) => {
            newErrors[path] = message;
          });

          if (mount) {
            setErrors({ ...initState, ...newErrors });
          }
        });
    }
    return () => {
      mount = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitted, emailAddress, userName, password, name, surname]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState({ ...state, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (!error) {
      axios
        .post(
          "https://api.tabasher.dev/api/TokenAuth/RegisterStudent",
          {
            name,
            surname,
            userName,
            emailAddress,
            password,
          },
          {
            headers: {
              "Abp.TenantId": 32,
            },
          }
        )
        .then((res) => {
          let { value } = e.target;
          // value = state.emailAddress;
          // setState({ userName: value });
          // console.log(value);
          dispatch({ type: "signup", payload: value });
          history.push("/");
        })
        .catch((err) => {
          let error = err.response.data.error;
          setState({ error: error });
        });
    }
  };

  return (
    <>
      <Navbar />
      <R.Container>
        <form className="form">
          <h3 className="title-register"> تسجيل مستخدم جديد</h3>
          <label className="name">
            الاسم <span>*</span>
          </label>
          <input
            type="text"
            className="name-input"
            onChange={handleChange}
            value={name}
            name="name"
            id="name"
            error={errors.name}
          />
          <label className="userName">
            اسم المستخدم <span>*</span>
          </label>
          <input
            type="text"
            className="userName-input"
            onChange={handleChange}
            value={userName}
            name="userName"
            id="userName"
            error={errors.userName}
          />
          <label className="email">
            البريد الالكتروني <span>*</span>
          </label>
          <input
            type="email"
            className="email-input"
            onChange={handleChange}
            value={emailAddress}
            name="emailAddress"
            id="emailAddress"
            error={errors.emailAddress}
          />
          <label className="phone">رقم الجوال</label>
          <input
            type="text"
            placeholder="رقم الجوال سوف يتم استخدامه فقط من قبل المدرب للتواصل (اختياري)"
            className="phone-input"
            onChange={handleChange}
            value={phone}
            name="phone"
            id="phone"
            error={errors.phone}
          />
          <label className="password">
            {" "}
            كلمة المرور <span>*</span>{" "}
          </label>
          <input
            type="password"
            className="password-input"
            onChange={handleChange}
            value={password}
            name="password"
            id="password"
            error={errors.password}
          />
          <button type="submit" className="btn" onClick={handleSubmit}>
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
