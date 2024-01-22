import React from "react";
import "../stylesheets/FeatureUpdates.css";

const FeatureUpdates = ({ date, title, body, buttonText, button, button2, button3 }) => {
  const formattedBody = { __html: body.replace(/\n/g, "<br>") };

  return (
    <div className="card">
      <h4>{date}</h4>
      <div className="containerStyle">
        {button && <button className="button1">{button}</button>}
        {button2 && <button className="button2">{button2}</button>}
        {button3 && <button className="button3">{button3}</button>}
        <img src="./images/image1.jpg" alt="Card" className="image" />
        <h2 className="title">{title}</h2>
      </div>
      <p className="p" dangerouslySetInnerHTML={formattedBody} />
      <button className="downloadButton">{buttonText}</button>
    </div>
  );
};

export default FeatureUpdates;
