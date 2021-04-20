import React from "react";
import * as C from "./style";
import imgNav from "../../assets/imgnav.jpg";
function Cooker() {
  return (
    <C.Container>
      <div className="cooker">
        <h2 className="cooker-name">محمد علي </h2>
        <img src={imgNav} alt="img nav" className="img-cooker" />
        <p className="work">طباخ من الطراز الأول</p>
      </div>
    </C.Container>
  );
}

export default Cooker;
