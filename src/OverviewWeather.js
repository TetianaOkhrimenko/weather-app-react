import React from "react";
import "./OverviewWeather.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function OverviewWeather() {
  return (
    <div className="OverviewWeather">
      <h1 className="mb-1">London</h1>
      <ul>
        <li>
          TUESDAY <span>10:00</span>
        </li>
        <li>Cloudy</li>
      </ul>
      <ReactAnimatedWeather icon="CLEAR_DAY" color="#EBE084" size={128} />
      <p className="mb-1">
        19<sup>°C</sup>
      </p>
      <ul>
        <li>
          Humidity: <span>80</span>%
        </li>
        <li>
          Wind: <span>10</span>m/s
        </li>
        <li>
          Precipitation: <span>58</span>%
        </li>
      </ul>
    </div>
  );
}
