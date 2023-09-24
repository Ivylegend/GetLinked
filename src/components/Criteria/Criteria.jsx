import React from "react";
import criterias from "../../assets/images/criteria.png";
import "../Image&Text/ImgTxt.css";
import HeaderText from "../HeaderText/HeaderText";
import Text from "../Text/Text";
import Flare1 from "../../assets/images/flare1.png";
import Flare2 from "../../assets/images/flare2.png";
import strpink from "../../assets/images/starwhite.png";
import strwhite from "../../assets/images/smallPink.png";
import "./Criteria.css";

const Criteria = () => {
  return (
    <div className="bottom app__criteria">
      <div className="flarey">
        <img className="fy1" src={Flare1} />
        <img className="fy2" src={Flare2} />
      </div>
        <img src={strpink} className="blink sm-pink" />
      <div className="crit">
        <img src={criterias} alt="criteria-img" />
      </div>
        <img src={strwhite} className="blink sm-wite" />
      <div className="crit">
        <HeaderText text="Judging Criteria" colored="Key attributes" />
        <Text
          colored2="Innovation and creativity"
          words="Evaluate the uniqueness and creativity of the
          solution. Consider whether it addresses a real-world problem in a novel 
          way or introduces innovative features."
        />
        <Text
          colored2="Functionality"
          words="Assess how well the solution works. Does it perform its 
          intended functions effectively and without major issues? Judges would
          consider the completeness and robustness of the solution."
        />
        <Text
          colored2="Impact and Relevance"
          words="Determine the potential impact of the solution 
          in the real world. Does it address a significant problem, and is it relevant 
          to the target audience? Judges would assess the potential social, 
          economic, or environmental benefits."
        />
        <Text
          colored2="Technical Complexity"
          words="Evaluate the technical sophistication of the solution. 
          Judges would consider the complexity of the code, the use of advanced 
          technologies or algorithms, and the scalability of the solution."
        />
        <Text
          colored2="Adherence to Hackathon Rules"
          words="Judges will Ensure that the team adhered 
          to the rules and guidelines of the hackathon, including deadlines, use of 
          specific technologies or APIs, and any other competition-specific requirements."
        />
        <button className="gradient btn">Read More</button>
      </div>
    </div>
  );
};

export default Criteria;
