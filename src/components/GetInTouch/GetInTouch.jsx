import React from "react";
import Instagram from "../../assets/images/Vectorig.png";
import Twitter from "../../assets/images/Vectortwitter.png";
import Facebook from "../../assets/images/Vectorfb.png";
import LinkedIn from "../../assets/images/Vectorlinkedin.png";
import'./GetInTouch.css';

const GetInTouch = () => {
  return (
    <div className="get-in-touch">
      <h3 className="pink touch-head">Get in touch</h3>
      <div className="touch-inner">
        <p>
          Contact <br />
          Information
        </p>
        <p>27, Alara Street <br /> Yaba 100012 <br /> Lagos State</p>
        <p>Call Us : 07067981819</p>
        <p>we are open from Monday-Friday <br /> 08:00am - 05:00pm</p>
      </div>
      <div>
        <p className="pink">Share on</p>
        <span className="socials">
          <img src={Instagram} />
          <img src={Twitter} />
          <img src={Facebook} />
          <img src={LinkedIn} />
        </span>
      </div>
    </div>
  );
};

export default GetInTouch;
