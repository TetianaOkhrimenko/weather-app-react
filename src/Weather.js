import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    console.log(
      `The weather in ${response.data.name} is ${response.data.main.temp} C`
    );
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=c94b4d94fde0a49cb46165408b7fec3c&units=metric`;
  axios.get(url).then(handleResponse);
  return (
    <div>
      <h4>Hello from Weather!!!!</h4>
      <ReactAnimatedWeather icon="CLEAR_DAY" color="violet" />
    </div>
  );
}
