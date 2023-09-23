import React from "react";
import LibertyPay from "../../assets/images/libertypay.png";
import Liberty from "../../assets/images/liberty.png";
import Winwise from "../../assets/images/winwise.png";
import Wisper from "../../assets/images/wisper.png";
import vizual from "../../assets/images/Vizual.png";
import paybox from "../../assets/images/paybox.png";
import './PartnerBox.css';

const PartnerBox = () => {
  return (
    <div className="partnerBox">
      <div className="box">
        <img src={Liberty} />
        <div className="horiz leftt"></div>
        <img src={LibertyPay} />
        <div className="horiz rightt"></div>
        <img src={Winwise} />
      </div>
      <div className="box-line">
        <div className="part-line"></div>
        <div className="part-line"></div>
        <div className="part-line"></div>
      </div>
      <div className="box">
        <img src={Wisper} />
        <div className="horiz leftb"></div>
        <img src={paybox} />
        <div className="horiz rightb"></div>
        <img src={vizual} />
      </div>
    </div>
  );
};

export default PartnerBox;
