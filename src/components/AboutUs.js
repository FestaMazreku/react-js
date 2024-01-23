import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import "../stylesheets/AboutUs.css";

const AboutUs = () => {
  const initialRows = [
    {
      title: "About Us",
      additionalText: "4 articles in this Topic",
    },
    {
      title:
        "How does Parkname separate itself from other domain name parking companies?",
      text: "Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable. Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.",
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
            <div className="title-container">
              {row.title === "About Us" && <CgProfile className="icon" />}
              <p>{row.title}</p>
            </div>
            {row.title === "About Us" && (
              <div className="additional-text">
                <p className="smaller-grey-text">{row.additionalText}</p>
              </div>
            )}
            <div className="right-arrow-container">
              <MdKeyboardArrowDown className="arrow-icon" />
            </div>
            {row.isOpen ? (
              <div className={`second-text ${row.isOpen ? "show" : ""}`}>
                <hr />
                <div className="text-content">
                  <p className="smaller-text">{row.text}</p>
                  <br />
                </div>
              </div>
            ) : (
              <div>
                <br />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
