import React from "react";
import "./TxtImg.css";
import HeaderText from "../HeaderText/HeaderText";
import Fright from '../../assets/images/flareRight.png'; 
import Fcenter from '../../assets/images/fcenter.png'; 
import strwhite from '../../assets/images/starwhite.png'
import strgray from '../../assets/images/stargray2.png'

const ImgTxt = ({ name, img, header, mediaQuery, colored, text, imgstyle }) => {
  return (
    <div>
      <div className="flare-comps">
        <img className="flc2" src={Fcenter} />
        <img className="flc1" src={Fright} />
      </div>
      <div
        className="txtimg bottom"
        style={{
          display: "flex",
          // flexDirection: imgstyle,
        }}
      >
        <div className="imgtxt-inner">
          <img src={img} alt={name} />
        </div>
        <img className="blink wite" src={strwhite}/>
        <img className="blink grey" src={strgray}/>
        <div className="imgtxt-inner">
          <HeaderText text={header} colored={colored} />
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ImgTxt;
