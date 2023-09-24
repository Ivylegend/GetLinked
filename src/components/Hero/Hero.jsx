import React from "react";
import Hero1 from "../../assets/images/hero1.png";
import Hero2 from "../../assets/images/hero2.png";
import Chain from "../../assets/images/chain-hero.png";
import Flare from "../../assets/images/hero-flare.png";
import Bulb from "../../assets/images/idea-hero.png";
import Curve from "../../assets/images/curve.png";
import Mobile from "../../assets/images/mobile-hero.png";
import Flare1 from "../../assets/images/flare1.png";
import Flare2 from "../../assets/images/flare2.png";
import starwhite from "../../assets/images/starwhite.png";
import stargray1 from "../../assets/images/stargray1.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="app__hero bottom">
      <div className="flare">
        <img className="fl1" src={Flare1} />
        <img className="fl2" src={Flare2} />
      </div>
      <div className="pre-header">
        <i>Igniting a Revolution in HR Innovation</i>
        <img className="curve" src={Curve} />{" "}
      </div>
      <div className="hero">
        <div className="hero-text">
          <img className="bulb" src={Bulb} />
          <img className="blink strwhite" src={starwhite}/>
          <img className="blink strgray1" src={stargray1} />
          <h1>
            getlinked Tech <br />
            Hackathon <span className="one"> 1.0</span>
            <img src={Chain} alt="chain" />
            <img src={Flare} alt="flare" />
          </h1>
          <p className="hero-word">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <button className="btn gradient">Register</button>
          <p className="timer">
            00<span className="small">H</span> 00
            <span className="small">M</span> 00<span className="small">S</span>
          </p>
          <img className="blink strgray2" src={stargray1} />
        </div>
        <div className="hero-img">
          <img src={Hero1} alt="" className="image image1" />
          <img src={Hero2} alt="" className="image image2" />
          <img src={Mobile} alt="man" className="mobile-man" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
