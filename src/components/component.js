import React from "react";

const Component = () => {
  const data = [
    "The TLD",
    "Domain Length",
    "Language",
    "International recognition",
    "Search engine",
    "Advertising Potential",
    "Sales Opportunities",
    "Typo susceptibility",
    "Business potential",
  ];

  const icons = () => {
    return "🌐";
  };

  return (
    <div className="box">
      {data.map((text, index) => (
        <div key={index} className="item">
          <span style={{ fontSize: "24px" }}>{icons()}</span>
          <div>{text}</div>
        </div>
      ))}
    </div>
  );
};

export default Component;

