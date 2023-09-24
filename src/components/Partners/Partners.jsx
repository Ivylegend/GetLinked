import React from "react";
import HeaderText from "../HeaderText/HeaderText";
import Text from "../Text/Text";
import PartnerBox from "../PartnerBox/PartnerBox";
import "./Partners.css";
import strwhite from "../../assets/images/starwhite.png";
import strpink from "../../assets/images/smallPink.png";
import strgray from "../../assets/images/stargray1.png";
import Flare1 from "../../assets/images/flare1.png";
import Flare2 from "../../assets/images/flare2.png";

const Partners = () => {
  return (
    <div className="app__partners bottom">
      <div className="flare-n">
        <img className="fn1" src={Flare1} />
        <img className="fn2" src={Flare2} />
      </div>
      <img className="blink stp" src={strpink}/>
      <img className="blink stp2" src={strpink}/>
      <img className="blink stw" src={strwhite}/>
      <div className="partner-text">
        <HeaderText text="Partners and Sponsors" />
        <p>
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      <PartnerBox />
    </div>
  );
};

export default Partners;
