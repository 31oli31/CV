import React from "react";

import "./Wave.scss";
const Wave = () => {
  return (
    <div className="parent">
      <svg
        width="100%"
        height="300px"
        className="wave"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d=" M0 67 C 273,183 822,-40 1920.00,106 V 359 H 0 V 67 Z">
          <animate
            repeatCount="indefinite"
            attributeName="d"
            dur="15s"
            attributeType="XML"
            values=" M0 77 C 473,283 822,-40 1920,116 V 359 H 0 V 67 Z; M0 77 C 473,-40 1222,283 1920,136 V 359 H 0 V 67 Z; M0 77 C 973,260 1722,-53 1920,120 V 359 H 0 V 67 Z; M0 77 C 473,283 822,-40 1920,116 V 359 H 0 V 67 Z "
          ></animate>
        </path>
      </svg>
      <div className="overlay">
        <div className="headerText">OLIVER DIRR</div>
      </div>
    </div>
  );
};

export default Wave;
