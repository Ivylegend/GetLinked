import React from "react";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./ContactContent.css";
import FlareRight from "../../assets/images/reg-right.png";
import FlareLeft from "../../assets/images/reg-left.png";

const ConatactContent = () => {
  return (
    <div className="contactcontent">
      <div className="form-flare">
        <img src={FlareLeft} className="one" />
        <img className="two" src={FlareRight} />
      </div>
      <GetInTouch />
      <ContactForm />
    </div>
  );
};

export default ConatactContent;
