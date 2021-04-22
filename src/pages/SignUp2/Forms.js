// import React, { useState, useEffect, useContext } from "react";
// import Input from "../../Components/Input";
// import { LoginsContext } from "../../App";
// import Checkbox from "../../Components/Checkbox";
// import { RegisterBtn, LogInBtn, OR } from "../../Components/Button";
// import { Link, useHistory } from "react-router-dom";
// import axios from "axios";
// import * as yup from "yup";
// import "./style.css";
// const initState = {
//   email: "",
//   userName: "",
//   password: "",
//   error: "",
// };
// const schema = yup.object().shape({
//   email: yup.string().email().required(),
//   userName: yup.string().required(),
//   password: yup.string().required().min(9),
// });

// function Forms() {
//   const { dispatch } = useContext(LoginsContext);
//   const history = useHistory();
//   const [state, setState] = useState(initState);
//   const [errors, setErrors] = useState(initState);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const { email, userName, password, error } = state;

//   useEffect(() => {
//     let mount = true;
//     if (isSubmitted) {
//       schema
//         .validate(state, { abortEarly: false })
//         .then(() => {
//           if (mount) {
//             setErrors({
//               email: "",
//               userName: "",
//               password: "",
//             });
//           }
//         })
//         .catch((err) => {
//           const newErrors = {};
//           err.inner.forEach(({ path, message }) => {
//             newErrors[path] = message;
//           });

//           if (mount) {
//             setErrors({ ...initState, ...newErrors });
//           }
//         });
//     }
//     return () => {
//       mount = false;
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isSubmitted, email, userName, password]);

//   const handleChange = (e) => {
//     const { id, value, checked } = e.target;
//     let _value = value;
//     if (id === "checked") {
//       _value = checked;
//     }
//     setState({ ...state, [id]: _value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true);
//     if (!error) {
//       axios
//         .post("https://fake-api-ahmed.herokuapp.com/v1/auth/signup", {
//           email,
//           password,
//         })
//         .then((res) => {
//           let { value } = e.target;
//           value = state.userName;
//           dispatch({ type: "signup", payload: value });
//           history.push("/LogIn");
//         })
//         .catch((err) => {
//           let error = err.response.data.error;
//           if (error.includes("duplicate")) {
//             error = "Email already exists";
//           }
//           setState({ error: error });
//         });
//     }
//   };

//   return (
//     <form className="contanier-form" onSubmit={handleSubmit}>
//       <input
//         handleChange={handleChange}
//         id="email"
//         name="email"
//         type="email"
//         placeholder="Enter Your Email"
//         value={email}
//         label="Email address"
//         error={errors.email}
//       />
//       <input
//         handleChange={handleChange}
//         name="userName"
//         type="text"
//         placeholder="Enter Your Name"
//         value={userName}
//         label="User Name"
//         id="userName"
//         error={errors.userName}
//       />
//       <input
//         handleChange={handleChange}
//         name="password"
//         type="password"
//         placeholder="Enter Your password"
//         value={password}
//         label="Create password"
//         id="password"
//         error={errors.password}
//       />
//       <input
//         handleChange={handleChange}
//         name="number"
//         type="text"
//         placeholder="Repeat password"
//         label="Repeat password"
//         id="number"
//         error={errors.rePassword}
//       />

//       {error ? <span>{error}</span> : ""}

//       <RegisterBtn type=" submit" className="register-btn-signup">
//         Register
//       </RegisterBtn>
//     </form>
//   );
// }

// export default Forms;
