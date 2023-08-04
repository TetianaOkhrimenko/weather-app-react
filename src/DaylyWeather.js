import React from "react";
import "./DaylyWeather.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function DaylyWeather(props) {
  return (
    <div className="DaylyWeather">
      <h4 className="mb-1">{props.day}</h4>
      <ReactAnimatedWeather
        icon={props.icon}
        color={props.color}
        size={props.size}
      />
      <p>{props.temperature}°C</p>
    </div>
  );
}
