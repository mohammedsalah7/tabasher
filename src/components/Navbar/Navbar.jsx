import React, { useState } from "react";
import * as N from "./style";
import imgNav from "../../assets/imgnav.jpg";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar({ login }) {
  const [open, setIsOpen] = useState(false);
  return (
    <N.Container open={open}>
      <div className="navbar">
        <N.Icon icon={faBars} open={open} onClick={() => setIsOpen(!open)} />

        {login ? (
          <div className="items-link">
            <h3>أهلا</h3>
            <Link to="/" className="logout">
              تسجيل خروج
            </Link>
            <Link to="/user/recorded" className="login">
              {" "}
              الدورات المسجلة
            </Link>
            <Link to="/" className="login">
              الصفحة الرئيسة
            </Link>
          </div>
        ) : (
          <Link to="/user/login" className="login">
            تسجيل دخول
          </Link>
        )}
        <img src={imgNav} alt="img nav" className="img" />
      </div>
    </N.Container>
  );
}

export default Navbar;
