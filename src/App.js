import "./App.css";
import sun from "./images/sun2.png";
import DaylyWeather from "./DaylyWeather";
import OverviewWeather from "./OverviewWeather";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="sun-animation">
        <img src={sun} alt="Sun" />
      </div>
      <Search />
      <div className="city_overview">
        <OverviewWeather />
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
          href="https://github.com/TetianaOkhrimenko"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-source
        </a>
        .
      </p>
    </div>
  );
}

export default App;
