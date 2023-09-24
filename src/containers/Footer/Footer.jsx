import React from "react";
import Logo from "../../assets/images/getlinkedlogo.png";
import Instagram from "../../assets/images/Vectorig.png";
import Twitter from "../../assets/images/Vectortwitter.png";
import Facebook from "../../assets/images/Vectorfb.png";
import LinkedIn from "../../assets/images/Vectorlinkedin.png";
import Phone from "../../assets/images/Vectorphone.png";
import Location from "../../assets/images/Vectorlocation.png";
import strwhite from "../../assets/images/starwhite.png";
import strpink from "../../assets/images/smallPink.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="foot">
      <div className="app__footer ">
        <img className="blink foot-strwite" src={strwhite}/>
        <img className="blink foot-strpink" src={strpink}/>
        <img className="blink foot-strwite2" src={strwhite}/>
        <img className="blink foot-strwite3" src={strwhite}/>
        <div className="footer-one">
          <span>
            <img src={Logo} alt="" />
            <p>
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </span>
          <p className="terms">Terms of use | Privacy Policy</p>
        </div>
        <ul>
          <li className="title pink">Useful links</li>
          <li>Overview</li>
          <li>Timeline</li>
          <li>FAQs</li>
          <li>Register</li>
          <li className="follow pink">
            Follow us
            <img src={Instagram} />
            <img src={Twitter} />
            <img src={Facebook} />
            <img src={LinkedIn} />
          </li>
        </ul>
        <ul>
          <li className="title pink">Contact Us</li>
          <li>
            <img src={Phone} alt="phone" /> +234 6707653444
          </li>
          <li>
            <img src={Location} /> 27, Alara Street <br />
            Yaba 100012 <br />
            Lagos State
          </li>
        </ul>
      </div>
      <p className="copy">All rights reserved. © getlinked Ltd.</p>
    </div>
  );
};

export default Footer;
