import React from "react";
import "./home.css";
import { Card, Header, Form, Error, Loader } from "../../components";
import useForecast from "../../hooks/useForecast";

const Home = () => {
  const { isError, isLoading, forecast, submitRequest, respondedLocation } =
    useForecast();
  const onSubmit = (value) => {
    submitRequest(value);
  };
  return (
    <div>
      <Header />
      {!isLoading && <Form submitSearch={onSubmit} />}

      {isError && <Error message={isError} />}
      {isLoading && <Loader />}
      {forecast && <Card forecast={forecast} location={respondedLocation} />}
    </div>
  );
};

export default Home;
