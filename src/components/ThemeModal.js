import React, { useEffect, useState } from "react";
import "../stylesheets/ThemeModal.css";

function ThemeModal(props) {
  const [grayColor, setGrayColor] = useState("#444444");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [blueColor, setBlueColor] = useState("#2072EF");
  const [darkBlueColor, setDarkBlueColor] = useState("#0053D1");

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
            <h3>Theme Color</h3>
            <br />
            <p>Font Color</p>
            <div className="separator"></div>
            <p>Background Color</p>
            <div className="separator"></div>
            <p>Button Color</p>
            <div className="separator"></div>
            <p>Button Border Color</p>
            <div className="separator"></div>
            <p>Button Mouseover Color</p>
            <div className="separator"></div>
          </div>

          <div class="container">
            <div className="color-right">
              <p className="theme">Change Theme</p>
              <div className="color-right">
                <p className="hexColor">
                  {" "}
                  #444444
                  <input
                    type="color"
                    value={grayColor}
                    onChange={(e) => setGrayColor(e.target.value)}
                  />
                </p>
              </div>

              <div className="color-right">
                <p className="hexColor">
                  {" "}
                  #FFFFFF
                  <input
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                  />
                </p>
              </div>

              <div className="color-right">
                <p className="hexColor">
                  {" "}
                  #2072EF
                  <input
                    type="color"
                    value={blueColor}
                    onChange={(e) => setBlueColor(e.target.value)}
                  />
                </p>
              </div>

              <div className="color-right">
                <p className="hexColor">
                  {" "}
                  #2072EF
                  <input
                    type="color"
                    value={blueColor}
                    onChange={(e) => setBlueColor(e.target.value)}
                  />
                </p>
              </div>

              <div className="color-right">
                <p className="hexColor">
                  {" "}
                  #0053D1
                  <input
                    type="color"
                    value={darkBlueColor}
                    onChange={(e) => setDarkBlueColor(e.target.value)}
                  />
                </p>
              </div>
            </div>
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

export default ThemeModal;
