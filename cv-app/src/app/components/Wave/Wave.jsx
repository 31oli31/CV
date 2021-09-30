import React from "react";
import "./Wave.scss";
import w from "../../assets/wave2.svg";
const Wave = () => {
  return (
    <div className="parent">
      <img src={w} className="waveImg"/>
      <div className="overlay">
        <div className="headerText">OLIVER DIRR</div>
      </div>
    </div>
  );
};

export default Wave;
