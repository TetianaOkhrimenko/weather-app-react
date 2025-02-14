import "./App.css";
import { useState } from "react";
import sun from "./images/sun2.png";
import Forecast from "./Forecast";
import { SpinnerDotted } from "spinners-react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("London");
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [value, setValue] = useState("");
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      coordinates: response.data.coord,
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    setValue("");
  }

  function handleInput(event) {
    setCity(event.target.value);
    setValue(event.target.value);
  }

  function search() {
    const API_KEY = "c94b4d94fde0a49cb46165408b7fec3c";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="sun-animation">
          <img src={sun} alt="Sun" />
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            value={value}
            type="search"
            placeholder="Type a name of city..."
            autoFocus="on"
            onChange={handleInput}
          />
          <input type="submit" value="Search" className="btn" />
        </form>

        <Forecast data={weatherData} />

        <p className="code_info">
          This App was buil by Tetiana Okhrimenko and is
          <a
            href="https://github.com/TetianaOkhrimenko/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced
          </a>
          .
        </p>
      </div>
    );
  } else {
    search();
    return (
      <div className="App">
        <div className="sun-animation">
          <img src={sun} alt="Sun" />
        </div>

        <div>
          <SpinnerDotted
            className="spinner"
            size={90}
            thickness={180}
            speed={70}
            color="rgba(17, 112, 196, 1)"
          />
        </div>
      </div>
    );
  }
}

export default App;
