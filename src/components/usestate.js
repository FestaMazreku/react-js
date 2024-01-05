import React, { useState } from "react";
import "./usestate.css";

const ToggleText = () => {
  const [showSecondText, setShowSecondText] = useState(false);

  const handleClick = () => {
    setShowSecondText((prev) => !prev);
  };

  return (
    <div className={`toggle-container ${showSecondText ? "open" : ""}`} onClick={handleClick}>
      <div className="text-container">
        <p>
          Why park a domain name in Parkname ?
        </p>
        <div className={`second-text ${showSecondText ? "show" : ""}`}>
          <hr /> 
          <p className="smaller-text">
            Parkname is the leading industry standard for domain name parking
            and monetization services. We offer a wide variety of services to
            help you achieve success.
          </p>
        </div>
      </div>
      <div className="arrow"></div>
    </div>
  );
};

export default ToggleText;