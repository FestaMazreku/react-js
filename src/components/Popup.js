import React, { useEffect } from "react";
import "./Popup.css";

function Popup(props) {
  useEffect(() => {
    const closeOnBackdropClick = (event) => {
      if (event.target.classList.contains("popup")) {
        props.setTrigger(false);
      }
    };

    window.addEventListener("click", closeOnBackdropClick);

    return () => {
      window.removeEventListener("click", closeOnBackdropClick);
    };
  }, [props]);

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="content-container">
          <div className="text-left">
            <h3> Theme color </h3>
            <br></br>
            <p>Font Color</p>
            <p>Background Color</p>
            <p>Button Color</p>
            <p>Button Border Color</p>
            <p>Button Mouseover Color</p>
          </div>
          <div className="color-right">
            <p style={{ color: "blue" }}> Change Theme </p>
            <br></br>
            <br></br>
            <div className="color" style={{ backgroundColor: "#444444" }}></div>
            <br></br>
            <div className="color" style={{ backgroundColor: "#FFFFFF" }}></div>
            <br></br>
            <div className="color" style={{ backgroundColor: "#2072EF" }}></div>
            <br></br>
            <div className="color" style={{ backgroundColor: "#2072EF" }}></div>
            <br></br>
            <div className="color" style={{ backgroundColor: "#0053D1" }}></div>
          </div>
        </div>
        <div className="button-container">
          <button
            className="cancel-btn"
            onClick={() => props.setTrigger(false)}
          >
            Cancel
          </button>
          <button className="save-btn">Save</button>
        </div>
      </div>
    </div>
  ) : null;
}

export default Popup;
