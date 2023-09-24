import React from "react";
import "./Privacy.css";
import HeaderText from "../HeaderText/HeaderText";
import Unlocked from "../../assets/images/unlock.png";
import Tick from "../../assets/images/tick.png";
import Flare1 from "../../assets/images/flare1.png";
import bPink from "../../assets/images/bigPink.png";
import sPink from "../../assets/images/smallPink.png";
import sGray from "../../assets/images/stargray1.png";
import sGray2 from "../../assets/images/stargray2.png";
import sTiny from "../../assets/images/startiny.png";
import sWhite from "../../assets/images/starwhite.png";

const Privacy = () => {
  return (
    <div className="app__privacy">
      <img className="fpr1" src={Flare1} />
      <div className="privacy-inner privacy-text">
        <HeaderText text="Privacy Policy and" colored="Terms" />
        <p className="date">Last update September 12, 2003</p>
        <p className="policy">
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant
        </p>
        <img src={sPink} className="blink priv-s1"/>
        <img src={sGray} className="blink priv-s2"/>
        <img src={sPink} className="blink priv-s3"/>
        <img src={sTiny} className="blink priv-s4"/>
        <img src={sPink} className="blink priv-s5"/>
        <img src={sWhite} className="blink priv-s6"/>
        <img src={sGray2} className="blink priv-s7"/>
        <div className="privacy-box">
          <p>
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <div>
            <span className="hterm">
              <p className="pink">Listening Policy</p>
              <p className="h-term">Here are terms of our Standard License:</p>
            </span>
            <span className="ticks">
              <img src={Tick} />
              <p>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
            </span>
            <span className="ticks">
              <img src={Tick} />
              <p>
                You are licensed to use the item available at any free source
                sites, for your project developement
              </p>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button className="btn gradient">Read More</button>
          </div>
        </div>
      </div>
      <div className="privacy-inner privacy-img">
        {/* <img className="image3" src={Locked} alt="" /> */}
        <img className="image4" src={Unlocked} alt="" />
      </div>
    </div>
  );
};

export default Privacy;
