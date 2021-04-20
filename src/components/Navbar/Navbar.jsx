import React from "react";
import * as N from "./style";
import imgNav from "../../assets/imgnav.jpg";
function Navbar() {
  return (
    <N.Container>
      <div className="navbar">
        <a href="#2" className="login">
          تسجيل دخول
        </a>
        <img src={imgNav} alt="img nav" className="img" />
      </div>
    </N.Container>
  );
}

export default Navbar;
