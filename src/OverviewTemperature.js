import React, { useState } from "react";
import "./OverviewTemperature.css";

export default function OverviewTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return props.celsius * (9 / 5) + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="OverviewTemperature">
        {" "}
        <p className="mb-1">
          {Math.round(props.celsius)}
          <sup>
            <span className="red">°C</span> |{" "}
            <a href="/" className="blue" onClick={showFahrenheit}>
              °F
            </a>
          </sup>
        </p>
      </div>
    );
  } else {
    return (
      <div className="OverviewTemperature">
        {" "}
        <p className="mb-1">
          {Math.round(fahrenheit())}
          <sup>
            <a href="/" className="blue" onClick={showCelsius}>
              °C
            </a>{" "}
            | <span className="red">°F</span>
          </sup>
        </p>
      </div>
    );
  }
}
