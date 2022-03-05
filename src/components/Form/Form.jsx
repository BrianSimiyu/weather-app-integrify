import React, { useState } from "react";
import Input from "../Input/Input";
import PropTypes from "prop-types";
import Button from "../Button/Button";

import "./form.css";

const Form = ({ submitSearch }) => {
  const [location, setLocation] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!location || location === "") return;
    submitSearch(location);
  };
  return (
    <div className="weatherApp__form" onSubmit={onSubmit}>
      <form className="weatherApp__form-form">
        <Input
          placeholder="Enter the name of a city"
          location={location}
          setLocation={setLocation}
        />
        <Button title="Show weather info" onClick={onSubmit} />
      </form>
    </div>
  );
};

Form.propTypes = {
  submitSearch: PropTypes.func.isRequired,
};
export default Form;
