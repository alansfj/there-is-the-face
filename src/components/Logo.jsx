import React from "react";
import Tilt from "react-parallax-tilt";
import "../css/Logo.css";
import face from "../assets/face-recognition.png";

const Logo = () => {
  return (
    <div className="ma4 mt5">
      <Tilt
        className="Tilt br2 shadow-2 br4"
        options={{ max: 50 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <img src={face} alt="face" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
