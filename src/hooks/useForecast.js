import { useState } from "react";
import axios from "axios";

const apiKey = "iqwf4rFRr1r4HAv4ofRupBAQvFi9WPCV";
const BASE_URL =
  "http://dataservice.accuweather.com/locations/v1/cities/search";

const BASE_URL2 = "http://dataservice.accuweather.com/currentconditions/v1/";

const CROSS_DOMAIN = "https://the-ultimate-api-challenge.herokuapp.com";

const useForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);
  const [respondedLocation, setRespondedLocation] = useState(null);

  const getlocationKey = async (location) => {
    const { data } = await axios(
      `${CROSS_DOMAIN}/${BASE_URL}/?apikey=${apiKey}&q=${location}`
    );

    if (!data || data.length === 0) {
      setError("There is no such location");
      setLoading(false);

      return;
    }

    return data[0];
  };

  const getForecastData = async (Key) => {
    const { data } = await axios(`${CROSS_DOMAIN}/${BASE_URL2}/${Key}`);
    if (!data || data.length === 0) {
      setError("Something went wrong");
      setLoading(false);
      return;
    }
    return data;
  };

  const submitRequest = async (location) => {
    setLoading(true);
    setError(false);
    const response = await getlocationKey(location);
    if (!response?.Key) return;
    setRespondedLocation(await response);

    const forecastResponse = await getForecastData(
      `${response.Key}?apikey=${apiKey}`
    );
    if (!forecastResponse) return;

    setForecast(forecastResponse[0]);

    setLoading(false);
  };

  return {
    isError,
    isLoading,
    forecast,
    respondedLocation,
    submitRequest,
  };
};

export default useForecast;
