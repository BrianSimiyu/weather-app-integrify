import React from "react";
import PropTypes from "prop-types";

import "./error.css";

const Error = ({ message }) => {
  return (
    <div className="weatherapp__error">
      <p>{message}</p>
    </div>
  );
};

Error.prototype = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message: "An error occurred",
};

export default Error;
