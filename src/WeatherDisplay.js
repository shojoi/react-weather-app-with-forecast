import DateFormatter from "./DateFormatter";

export default function WeatherDisplay(props) {
  return (
    <div className="Weather">
      <div className="WeatherDetails">
        <div className="CityName">{props.cityName}</div>
        <DateFormatter date={props.weatherData.date} />
        <div className="text-capitalize">{props.weatherData.description} </div>
      </div>

      <div className="row">
        <div className="col-6">
          <ul>
            <li>
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                alt="weather icon"
                className="float-left"
              />

              <span className="MainTemp">{props.weatherData.temperature}</span>
              <span className="Units">°C</span>
            </li>
          </ul>
        </div>

        <div className="col-6 WeatherMoreDetails">
          <div>
            High: <span>{props.weatherData.maxTemperature}°</span>
          </div>
          <div>
            Low: <span>{props.weatherData.minTemperature}°</span>
          </div>
          <div>
            Humidity: <span>{props.weatherData.humidity}</span>
          </div>
          <div>
            Wind: <span>{props.weatherData.wind}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
