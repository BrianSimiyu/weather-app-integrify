import React from "react";

import "./button.css";

const Button = ({ title }) => {
  return (
    <div className="weatherApp__button">
      <button type="submit">{title}</button>
    </div>
  );
};

export default Button;
