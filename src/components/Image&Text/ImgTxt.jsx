import React from "react";
import "./ImgTxt.css";
import HeaderText from "../HeaderText/HeaderText";
import strpink from "../../assets/images/smallPink.png";
import bigpink from "../../assets/images/bigPink.png";

const ImgTxt = ({ name, img, header, mediaQuery, colored, text, imgstyle }) => {
  return (
    <div
      className="imgtxt bottom"
      style={{
        display: "flex",
        // flexDirection: imgstyle,
      }}
    >
      <img src={strpink} className="blink strPink" />

      <div className="imgtxt-inner">
        <img src={img} alt={name} />
      </div>
      <div className="imgtxt-inner">
        <HeaderText text={header} colored={colored} />
        <p>{text}</p>
      </div>
      <img src={bigpink} className="blink bigPink" />
    </div>
  );
};

export default ImgTxt;
