import React from "react";
import * as C from "./style";

function Card({ btn, title, content, id, imgurl, stylecard, price }) {
  return (
    <C.Container>
      <div className={`${stylecard}`} id={id}>
        <img src={imgurl} alt="img" className="img-coureses" />
        <h5 className="title-courses">{title}</h5>
        <h6 className="price"> {price} ريال</h6>
        <p className="info">{content}</p>
        {btn}
      </div>
    </C.Container>
  );
}

export default Card;
