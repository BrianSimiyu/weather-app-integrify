import React from "react";

import "./input.css";

const Input = ({ placeholder, location, setLocation }) => {
  return (
    <div className="weatherApp__input">
      <input
        placeholder={placeholder}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
    </div>
  );
};

export default Input;
