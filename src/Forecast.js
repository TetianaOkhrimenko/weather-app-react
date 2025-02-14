import React, { useState, useEffect } from "react";
import "./Forecast.css";
import OverviewWeather from "./OverviewWeather";
import DaylyWeather from "./DaylyWeather";
import axios from "axios";

export default function Forecast(props) {
  const [loadedData, setLoadedData] = useState(false);
  const [forecastData, setForecastData] = useState(null);
  const [precipitation, setPrecipitation] = useState(null);

  useEffect(() => {
    setLoadedData(false);
  }, [props.data.coordinates]);

  function handleResponseDaily(response) {
    setForecastData(response.data.daily);
    setLoadedData(true);
    setPrecipitation(response.data.hourly[0].pop * 100);
    console.log(response.data);
  }

  console.log(forecastData);

  if (loadedData) {
    console.log(forecastData);
    return (
      <div className="Forecast">
        <OverviewWeather data={props.data} precipitation={precipitation} />
        {forecastData.map((dayWeather, index) => {
          if (index < 6) {
            return <DaylyWeather data={dayWeather} key={index} />;
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
   // const API_KEY = "8c78e9e7e9928cd1a2a6f923072c3dec";
    const API_KEY = "c94b4d94fde0a49cb46165408b7fec3c";
  
    let latitude = props.data.coordinates.lat;
    let longitude = props.data.coordinates.lon;
    let urlAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    axios.get(urlAPI).then(handleResponseDaily);
    return null;
  }
}
