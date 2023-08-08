import React, { useState, useEffect } from "react";
import "./Forecast.css";
import OverviewWeather from "./OverviewWeather";
import DaylyWeather from "./DaylyWeather";
import axios from "axios";

export default function Forecast(props) {
  const [loadedData, setLoadedData] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoadedData(false);
  }, [props.data.coordinates]);

  function handleResponseDaily(response) {
    setForecastData(response.data.daily);
    setLoadedData(true);
  }

  console.log(forecastData);

  if (loadedData) {
    console.log(forecastData);
    return (
      <div className="Forecast">
        <OverviewWeather data={props.data} />
        {forecastData.map((dayWeather, index) => {
          if (index > 0 && index < 7) {
            return <DaylyWeather data={dayWeather} key={index} />;
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    const API_KEY = "8c78e9e7e9928cd1a2a6f923072c3dec";
    let latitude = props.data.coordinates.lat;
    let longitude = props.data.coordinates.lon;
    let urlAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    axios.get(urlAPI).then(handleResponseDaily);
    return null;
  }
}
