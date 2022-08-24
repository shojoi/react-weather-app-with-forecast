import DateFormatter from "./DateFormatter";

export default function DailyForecast(props) {
  function maxTemperature() {
    let temperature = Math.round(props.forecastData.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.forecastData.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.forecastData.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="col">
      <div className="WeatherForecast-day">{day()}</div>
      <img
        src={`http://openweathermap.org/img/wn/${props.forecastData.weather[0].icon}@2x.png`}
        alt={props.forecastData.weather[0].description}
      />
      <span className="WeatherForecast-temperature-max">
        {maxTemperature()}
      </span>
      <span className="WeatherForecast-temperature-min">
        {minTemperature()}
      </span>
    </div>
  );
}
