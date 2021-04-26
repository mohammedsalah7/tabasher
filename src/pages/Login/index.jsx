import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { LoginsContext } from "../../App";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/index";
import * as L from "./style";
import axios from "axios";
import * as yup from "yup";
const initState = {
  userNameOrEmailAddress: "",
  password: "",
  error: "",
};
const schema = yup.object().shape({
  userNameOrEmailAddress: yup.string().email().required(),
  password: yup.string().required(),
});

function Login() {
  const { dispatch } = useContext(LoginsContext);
  const history = useHistory();
  const [state, setState] = useState(initState);
  const [errors, setErrors] = useState(initState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { userNameOrEmailAddress, password, error } = state;

  useEffect(() => {
    let mount = true;
    if (isSubmitted) {
      schema
        .validate(state, { abortEarly: false })
        .then(() => {
          if (mount) {
            setErrors({
              userNameOrEmailAddress: "",
              password: "",
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
  }, [isSubmitted, userNameOrEmailAddress, password]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (!error) {
      axios
        .post(
          "https://api.tabasher.dev/api/TokenAuth/Authenticate",
          {
            userNameOrEmailAddress,
            password,
          },
          {
            headers: {
              "Abp.TenantId": 32,
            },
          }
        )
        .then((res) => {
          dispatch({ type: "login" });
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
      <L.Container>
        <form className="form">
          <h3 className="title-login">تسجيل دخول</h3>
          <label className="email">
            البريد الالكتروني <span>*</span>
          </label>
          <input
            type="email"
            className="email-input"
            onChange={handleChange}
            value={userNameOrEmailAddress}
            name="userNameOrEmailAddress"
            id="userNameOrEmailAddress"
            error={errors.userNameOrEmailAddress}
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
            تسجيل دخول
          </button>
        </form>
      </L.Container>
      <Footer />
    </>
  );
}

export default Login;
