import "./App.css";
import { useState } from "react";
import sun from "./images/sun2.png";
import DaylyWeather from "./DaylyWeather";
import OverviewWeather from "./OverviewWeather";
import Search from "./Search";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="sun-animation">
          <img src={sun} alt="Sun" />
        </div>
        <Search />
        <div className="city_overview">
          <OverviewWeather
            temperature={weatherData.temperature}
            description={weatherData.description}
            humidity={weatherData.humidity}
            wind={weatherData.wind}
            city={weatherData.city}
          />
          <DaylyWeather
            icon="CLOUDY"
            color="#EBE084"
            size={64}
            day="FRI"
            temperature={20}
          />
          <DaylyWeather
            icon="PARTLY_CLOUDY_DAY"
            color="#EBE084"
            size={64}
            day="SUT"
            temperature={18}
          />
          <DaylyWeather
            icon="CLEAR_DAY"
            color="#EBE084"
            size={64}
            day="SUN"
            temperature={19}
          />
          <DaylyWeather
            icon="CLEAR_DAY"
            color="#EBE084"
            size={64}
            day="MON"
            temperature={22}
          />
          <DaylyWeather
            icon="CLEAR_DAY"
            color="#EBE084"
            size={64}
            day="TUE"
            temperature={21}
          />
        </div>
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
    const API_KEY = "c94b4d94fde0a49cb46165408b7fec3c";
    let city = "London";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    axios.get(url).then(handleResponse);
    return "Loading...";
  }
}

export default App;
