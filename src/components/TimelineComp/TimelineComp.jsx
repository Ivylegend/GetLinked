import React from "react";
import "./TimelineComp.css";

const TimelineComp = ({number}) => {
  return (
    <div className="timeline">
      <div className="line"></div>
      <div className="round">{number}</div>
    </div>
  );
};

export default TimelineComp;
