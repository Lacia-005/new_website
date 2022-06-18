import React from "react";
import "./menubox.css";

export default function MenuBox({ img, name }) {
  return (
    <div className="box">
      <img src={img} alt="menu" className="imgBox" />
      <span className="nameBox">{name}</span>
    </div>
  );
}
