import React from "react";
import "./style.css";

function Card({ btn, title, content, id, imgurl, stylecard, price }) {
  return (
    <div className={`${stylecard}`} id={id}>
      <img src={imgurl} alt="img" className="img-coureses" />
      <h2 className="title-courses">{title}</h2>
      <h2 className="price">{price}</h2>
      <p className="info">{content}</p>
      {btn}
    </div>
  );
}

export default Card;
