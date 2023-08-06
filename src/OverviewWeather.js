import React from "react";
import "./OverviewWeather.css";
import ReactAnimatedWeather from "react-animated-weather";
import FormattedDate from "./FormattedDate";

export default function OverviewWeather(props) {
  return (
    <div className="OverviewWeather">
      <h1 className="mb-1">{props.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.date} />
        </li>
        <li>{props.description}</li>
      </ul>
      <ReactAnimatedWeather icon="CLEAR_DAY" color="#EBE084" size={128} />
      <p className="mb-1">
        {Math.round(props.temperature)}
        <sup>°C</sup>
      </p>
      <ul>
        <li>
          Humidity: <span>{props.humidity}</span>%
        </li>
        <li>
          Wind: <span>{Math.round(props.wind)}</span>m/s
        </li>
        <li>
          Precipitation: <span>58</span>%
        </li>
      </ul>
    </div>
  );
}
