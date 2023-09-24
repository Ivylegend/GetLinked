import React from "react";
import "./FAQs.css";
import HeaderText from "../HeaderText/HeaderText";
import Faq from "../../assets/images/faqimg.png";
import QBig from "../../assets/images/_center.png";
import QSmall from "../../assets/images/_left.png";
import Questions from "../Questions/Questions";
import strwhite from "../../assets/images/starwhite.png";
import strpink from "../../assets/images/smallPink.png";
import strgray from "../../assets/images/stargray1.png";

const FAQs = () => {
  return (
    <div id="faqs" className="app_faqs bottom">
      <img className="blink strpink3" src={strpink} />
      <div className="faqs-inner">
        <HeaderText text="Fequently Ask" colored="Questions" />
        <p className="inner-p">
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0.
        </p>
        <div className="questions">
          <Questions text="Can I work on a project I started before the hackathon?" />
          <Questions text="What happens if I need help during the hackathon?" />
          <Questions text="What happens if I don't have an idea for a project?" />
          <Questions text="Can I join a team or do I have to come with one?" />
          <Questions text="What happens after the hackathon ends" />
          <Questions text="Can I work on a project I started before the hackathon?" />
        </div>
      </div>
      <img className="blink stargray1" src={strgray} />
      <img className="blink strpink1" src={strpink} />
      <img className="blink strpink2" src={strpink} />
      <img className="blink strwhite1" src={strwhite} />
      <div className="faqs-inner">
        <div className="qmark">
          <img className="qsmall" src={QSmall} />
          <img src={QBig} />
          <img className="qsmall" src={QSmall} />
        </div>
        <img className="faqimg" src={Faq} alt="faqs" />
      </div>
    </div>
  );
};

export default FAQs;
