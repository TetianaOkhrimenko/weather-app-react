import React from "react";
import "./DaylyWeather.css";
import WeatherIcon from "./WeatherIcon";

export default function DaylyWeather(props) {
  function displayMaxTemperature() {
    return Math.round(props.data.temp.max);
  }

  function displayMinTemperature() {
    return Math.round(props.data.temp.min);
  }

  function displayDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return days[day];
  }

  return (
    <div className="DaylyWeather">
      <h4 className="mb-1">{displayDay()}</h4>
      <WeatherIcon code={props.data.weather[0].icon} size={64} />
      <p>{displayMaxTemperature()}°C</p>
      <p>{displayMinTemperature()}°C</p>
    </div>
  );
}
