import React from "react";
import "./OverviewWeather.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import OverviewTemperature from "./OverviewTemperature";

export default function OverviewWeather(props) {
  return (
    <div className="OverviewWeather">
      <h1 className="mb-1">{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <WeatherIcon code={props.data.icon} size={128} />
      <OverviewTemperature celsius={props.data.temperature} />
      <ul>
        <li>
          Humidity: <span>{props.data.humidity}</span>%
        </li>
        <li>
          Wind: <span>{Math.round(props.data.wind)}</span>m/s
        </li>
        <li>
          Precipitation: <span>{Math.round(props.precipitation)}</span>%
        </li>
      </ul>
    </div>
  );
}
