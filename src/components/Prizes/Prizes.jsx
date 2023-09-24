import React from "react";
import HeaderText from "../HeaderText/HeaderText";
import Prize from "../../assets/images/prize.png";
import gold from "../../assets/images/gold.png";
import silver from "../../assets/images/silver.png";
import bronze from "../../assets/images/bronze.png";
import "./Prizes.css";
import strwhite from "../../assets/images/starwhite.png";
import strpink from "../../assets/images/smallPink.png";
import strgray from "../../assets/images/stargray1.png";
import Fright from "../../assets/images/flareRight.png";
import Fcenter from "../../assets/images/fcenter.png";

const Prizes = () => {
  return (
    <div className="app-flare">
      <div className="flare-compy">
        <img className="fcp2" src={Fcenter} />
        <img className="fcp1" src={Fright} />
      </div>
      <img src={strpink} className="blink flr-pink" />
      <img src={strgray} className="blink flr-gray" />
      <img src={strwhite} className="blink flr-wite1" />
      <img src={strwhite} className="blink flr-wite2" />
      <div className="prizes-text">
        <HeaderText text="Prizes and" colored="Rewards" />
        <p className="highlight">
          Highlight of the prizes or rewards for winners and for participants.
        </p>
      </div>
      <div className="app__prizes">
        <div className="prize-img">
          <img src={Prize} alt="prize" />
        </div>
        <div>
          <div className="big-box">
            <div className="prize-box">
              <div className="second pb">
                <img src={silver} />
                <div className="pos-box">
                  <span className="position"> 2nd </span> <br />
                  Runner <br />
                  <span className="prize-money"> N300,000</span>
                </div>
              </div>
              <div className="first pb">
                <img src={gold} />
                <div className="pos-box">
                  <span className="position"> 1st </span> <br /> Runner <br />{" "}
                  <span className="prize-money"> N400,000</span>
                </div>
              </div>
              <div className="third pb">
                <img src={bronze} />
                <div className="pos-box">
                  <span className="position"> 3rd </span> <br /> Runner <br />{" "}
                  <span className="prize-money"> N150,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
