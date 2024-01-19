import React from "react";
import { TfiText, TfiRulerAlt } from "react-icons/tfi";
import { RiSearchEyeLine } from "react-icons/ri";
import { BsGlobe, BsMegaphone } from "react-icons/bs";
import { IoRibbonOutline } from "react-icons/io5";
import { LuBadgePercent } from "react-icons/lu";
import { TbBulb } from "react-icons/tb";
import "./stylesheet/component.css";

const Component = () => {
  const data = [
    {
      text: "The TLD",
      icon: "icon1",
      description: "Does the domain extension match the language of the domain name?",
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

  const iconStyles = {
    border: "1px solid lightgray",
    borderRadius: "50%",
    backgroundColor: "#fff",
    padding: "10px",
    margin: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const getIcon = (icon) => {
    switch (icon) {
      case "icon1":
        return (
          <p style={{ ...iconStyles, color: "#2196F3", fontWeight: "bold" }}>
            {".com"}
          </p>
        );
      case "icon2":
        return <TfiRulerAlt size={40} color="#2196F3" style={iconStyles} />;
      case "icon3":
        return <BsGlobe size={40} color="#2196F3" style={iconStyles} />;
      case "icon4":
        return <IoRibbonOutline size={40} color="#2196F3" style={iconStyles} />;
      case "icon5":
        return <RiSearchEyeLine size={40} color="#2196F3" style={iconStyles} />;
      case "icon6":
        return <BsMegaphone size={40} color="#2196F3" style={iconStyles} />;
      case "icon7":
        return <LuBadgePercent size={40} color="#2196F3" style={iconStyles} />;
      case "icon8":
        return <TfiText size={40} color="#2196F3" style={iconStyles} />;
      case "icon9":
        return <TbBulb size={40} color="#2196F3" style={iconStyles} />;
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
          style={{ display: "flex", alignItems: "left" }}
        >
          {getIcon(item.icon)}
          <div>
            <div
              style={{
                fontFamily: "Myriad Pro Regular",
                fontWeight: "bold",
                textAlign: "left",
                fontSize: "16px",
              }}
            >
              {item.text}
            </div>
            <div
              style={{
                fontFamily: "inherit",
                textAlign: "left",
                fontSize: "14px",
              }}
            >
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Component;