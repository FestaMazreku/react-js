import React, { useState } from "react";
import "./usestate2.css";

const Toggle = ({ initialText, additionalText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`toggle-container ${isOpen ? "open" : ""}`}
      onClick={handleClick}
    >
      <div className="text-container">
        <p>{initialText}</p>
        {isOpen && <p>{additionalText}</p>}
      </div>
      <div className="arrow"></div>
    </div>
  );
};

export default Toggle;
