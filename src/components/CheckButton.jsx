import React from "react";
import "./styleCheckButton.css";

const CheckButton = ({ handleButton }) => {
  return (
    <>
      <input
        type="checkbox"
        id="cbx"
        style={{ display: "none" }}
        onClick={handleButton}
      />
      <label htmlFor="cbx" className="toggle">
        <span></span>
      </label>
    </>
  );
};

export default CheckButton;
