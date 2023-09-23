import React from "react";

const HeaderText = ({ text, colored }) => {
  return (
    <div className="headerText">
      <h3>
        {text} <br /> <span className="coloredtxt">{colored}</span>
      </h3>
    </div>
  );
};

export default HeaderText;
