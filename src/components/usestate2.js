import React, { useState } from "react";
import "./usestate.css";
import { MdKeyboardArrowDown } from "react-icons/md";

const ToggleText = () => {
  const initialRows = [
    {
      title: "About Us",
      text: "Learn more about our company and mission.",
    },
    {
      title: "How does Parkname separate itself from other domain name parking companies?",
      text: "Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable. Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portofolio.",
    },
    {
      title: "Is Parkname actually free?",
      text: ".",
    },
    {
      title: "Is Parkname actually free?",
      text: ".",
    },
    {
      title: "What you do?",
      text: ".",
    },
    {
      title: "When was Parkname first founded?",
      text: ".",
    },
  ];

  const [rows, setRows] = useState(initialRows);

  const handleRowClick = (index) => {
    setRows((prevRows) =>
      prevRows.map((row, i) =>
        i === index ? { ...row, isOpen: !row.isOpen } : row
      )
    );
  };

  return (
    <div>
      {rows.map((row, index) => (
        <div
          key={index}
          className={`toggle-container ${row.isOpen ? "open" : ""}`}
          onClick={() => handleRowClick(index)}
        >
          <div className="text-container">
            <p>{row.title}</p>
            <div className={`second-text ${row.isOpen ? "show" : ""}`}>
              <hr />
              <p className="smaller-text">{row.text}</p>
              <br />
            </div>
          </div>
          <MdKeyboardArrowDown className="arrow-icon" />
        </div>
      ))}
    </div>
  );
};

export default ToggleText;
