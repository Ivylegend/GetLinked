import React from "react";
import "./ContactForm.css";
import Instagram from "../../assets/images/Vectorig.png";
import Twitter from "../../assets/images/Vectortwitter.png";
import Facebook from "../../assets/images/Vectorfb.png";
import LinkedIn from "../../assets/images/Vectorlinkedin.png";

const ContactForm = () => {
  return (
    <div className="contactform">
      <p className="pink contact-head">
        Questions or need assistance? <br /> Let us know about it!
      </p>
      <p className="hidden">Email us below any question related to our event</p>
      <form className="contform">
        <input type="text" placeholder="Team's Name" className="mobile"/>
        <input type="text" placeholder="Topic" className="mobile"/>
        <input type="text" placeholder="Email" className="mobile"/>
        <input type="text" placeholder="First Name" className="desktop"/>
        <input type="email" placeholder="Mail" className="desktop"/>
        <textarea typeof="text" placeholder="Message" />
        <div style={{ margin: "auto" }}>
          <button className="btn gradient">Submit</button>
        </div>
      </form>
      <div className="share">
        <p className="pink">Share On</p>
        <span>
          <img src={Instagram} />
          <img src={Twitter} />
          <img src={Facebook} />
          <img src={LinkedIn} />
        </span>
      </div>
    </div>
  );
};

export default ContactForm;
