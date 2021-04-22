// import React, { useState, useEffect } from "react";
// // import Input from "../../Components/Input";
// // import { LogInBtn } from "../../Components/Button";
// // import * as T from "../../Components/Typography";
// import axios from "axios";
// import * as yup from "yup";
// // import { Link } from "react-router-dom";
// import "./style.css";
// import { useHistory } from "react-router-dom";
// const initState = {
//   email: "",
//   password: "",
//   // error: "",
// };

// const schema = yup.object().shape({
//   email: yup.string().email().required(),
//   userName: yup.string().required(),
//   password: yup.string().required().min(9),
//   rePassword: yup
//     .string()
//     .oneOf([yup.ref("password"), null], "Passwords must match")
//     .required(),
//   checked: yup.string().required(),
// });
// export default function FormLogIn() {
//   const [state, setState] = useState(initState);
//   const [errors, setErrors] = useState(initState);
//   const history = useHistory();
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const { email, password, error } = state;
//   useEffect(() => {
//     let mount = true;
//     if (isSubmitted) {
//       schema
//         .validate(state, { abortEarly: false })
//         .then(() => {
//           if (mount) {
//             setErrors({
//               email: "",
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
//   }, [isSubmitted, email, password]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setState({ ...state, [name]: value });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true);
//     if (!error) {
//       axios
//         .post("https://api.tabasher.dev/api/TokenAuth/Authenticate", {
//           email,
//           password,
//         })
//         .then((res) => {
//           history.push("/");
//         })
//         .catch((err) => {
//           console.log(err.response.data.error);
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
//         name="email"
//         type="email"
//         placeholder="write Your Email"
//         value={email}
//         label="Your Email"
//         id="Email"
//         error={errors.email}
//       />

//       <input
//         handleChange={handleChange}
//         name="password"
//         type="password"
//         placeholder="Enter Your password"
//         value={password}
//         label=" Enter Your Password"
//         id="password"
//         error={errors.password}
//       />
//       <button className="google-btn" type="submit">
//         Login
//       </button>
//     </form>
//   );
// }
