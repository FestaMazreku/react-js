import React, { useEffect, useState } from "react";
import "./Popup.css";

function Popup(props) {
  const [fontColor, setFontColor] = useState("#444444");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [buttonColor, setButtonColor] = useState("#2072EF");

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
            <h3>Theme color</h3>
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
              <br />
              <br />
              <br />
              <div className="color-right">
                <div
                  style={{ backgroundColor: fontColor }}
                ></div>
                <input
                  type="color"
                  value={fontColor}
                  onChange={(e) => setFontColor(e.target.value)}
                />
              </div>

              <br />
              <div className="color-right">
                <input
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                />
              </div>

              <br />
              <div className="color-right">
                <input
                  type="color"
                  value={buttonColor}
                  onChange={(e) => setButtonColor(e.target.value)}
                />
              </div>

              <br />
              <div className="color-right">
                <input
                  type="color"
                  value={buttonColor}
                  onChange={(e) => setButtonColor(e.target.value)}
                />
              </div>

              <br />
              <div className="color-right">
                <input
                  type="color"
                  value={buttonColor}
                  onChange={(e) => setButtonColor(e.target.value)}
                />
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

export default Popup;
