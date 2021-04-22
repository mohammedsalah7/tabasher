import React from "react";
import * as N from "./style";
import imgNav from "../../assets/imgnav.jpg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <N.Container>
      <div className="navbar">
        <Link to="/user/register" className="login">
          تسجيل دخول
        </Link>
        <img src={imgNav} alt="img nav" className="img" />
      </div>
    </N.Container>
  );
}

export default Navbar;
