import React from "react";

import "./card.css";

const Card = ({ forecast, location }) => {
  console.log(forecast);
  return (
    <div className="weatherApp__Card">
      <h3 className="weatherApp__Card-name">{location.LocalizedName}</h3>
      <h3 className="weatherApp__Card-temp">
        {forecast.Temperature.Metric.Value} &deg;C
      </h3>
      <h3 className="weatherApp__Card-forecast">{forecast.WeatherText}</h3>
    </div>
  );
};

export default Card;
