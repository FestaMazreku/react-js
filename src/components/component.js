import React from "react";
import {
  FaGlobe,
  FaRuler,
  FaSearchengin,
  FaEnvelopeOpenText,
  FaPercent,
  FaLightbulb,
} from "react-icons/fa";

const Component = () => {
  const data = [
    {
      text: "The TLD",
      icon: "icon1",
      description:
        "Does the domain extension match the language of the domain name?",
    },
    {
      text: "Domain Length",
      icon: "icon2",
      description: "Is the domain short enough to remember?",
    },
    {
      text: "Language",
      icon: "icon3",
      description: "How complex is the actual domain name?",
    },
    {
      text: "International recognition",
      icon: "icon4",
      description: "Can the domain name be used on an international scale?",
    },
    {
      text: "Search engine",
      icon: "icon5",
      description: "Does the domain follow search engine guidelines?",
    },
    {
      text: "Advertising Potential",
      icon: "icon6",
      description: "Could the domain be used for advertising campaigns?",
    },
    {
      text: "Sales Opportunities",
      icon: "icon7",
      description: "Can the domain name be used on an international scale?",
    },
    {
      text: "Typo susceptibility",
      icon: "icon8",
      description: "How high is the risk of mistyping the domain name?",
    },
    {
      text: "Business potential",
      icon: "icon9",
      description: "Can the domain be used as your company address?",
    },
  ];

  const getIcon = (icon) => {
    const commonStyles = {
      borderRadius: "50%",
      border: "1px solid #ccc",
      backgroundColor: "#fff",
      marginRight: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };
    const blueStyles = { color: "#2196F3", fill: "#2196F3" };

    switch (icon) {
      case "icon1":
        return <FaGlobe size={50} color="#2196F3" />;
      case "icon2":
        return <FaRuler size={50} color="#2196F3" />;
      case "icon3":
        return <FaGlobe size={50} color="#2196F3" />;
      case "icon4":
        return <FaRuler size={50} color="#2196F3" />;
      case "icon5":
        return <FaSearchengin size={50} color="#2196F3" />;
      case "icon6":
        return <FaEnvelopeOpenText size={50} color="#2196F3" />;
      case "icon7":
        return <FaPercent size={50} color="#2196F3" />;
      case "icon8":
        return <FaEnvelopeOpenText size={50} color="#2196F3" />;
      case "icon9":
        return <FaLightbulb size={50} color="#2196F3" />;
      case "icon10":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50"
            height="50"
            style={{ ...commonStyles, ...blueStyles }}
          >
            <circle cx="25" cy="25" r="20" fill="#fff" />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div className="box">
      {data.map((item, index) => (
        <div
          key={index}
          className="item"
          style={{ display: "flex", alignItems: "center" }}
        >
          {getIcon(item.icon)}
          <div>
            <div style={{ fontWeight: "bold" }}>{item.text}</div>
            <div>{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Component;
