import { useState, useEffect } from "react";
import axios from "axios";

import UserInput from "./UserInput";
import WeatherDisplay from "./WeatherDisplay";
import Forecast from "./Forecast";

import "./Weather.css";
import "./Forecast.css";

export default function Weather() {
  const [city, setCity] = useState("New York");
  const [weatherInfo, setWeatherInfo] = useState({ dataAvailable: false });

  useEffect(() => {
    getWeatherInformation();
    return () => {
      console.log("cleanup");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);
  //Above comment line added to remove react hook warnning

  function updateCityFunction(city) {
    setCity(city);
  }
  function handleResponse(response) {
    setWeatherInfo({
      dataAvailable: true,
      temperature: Math.round(response.data.main.temp),
      maxTemperature: Math.round(response.data.main.temp_max),
      minTemperature: Math.round(response.data.main.temp_min),
      humidity: `${response.data.main.humidity}%`,
      wind: `${Math.round(response.data.wind.speed)}km/h`,
      weatherIcon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: response.data.dt,
      description: response.data.weather[0].description,
      coordinates: response.data.coord,
    });
  }

  function getWeatherInformation() {
    let apiKey = "606a063f1d6fa729e32e75a0af2c3ff9";
    let unit = "metric";
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
    let apiUrl = `${apiEndpoint}q=${city}&units=${unit}&appid=${apiKey}`;

    console.log(`Weather axios ${apiUrl}`);

    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error) => console.log("something went bad"));
  }

  if (weatherInfo.dataAvailable) {
    return (
      <div className="Weather">
        <UserInput updateCityProps={updateCityFunction} />
        <WeatherDisplay cityName={city} weatherData={weatherInfo} />
        <Forecast coordinates={weatherInfo.coordinates} />
      </div>
    );
  } else {
    getWeatherInformation();
    return "Loading...";
  }
}
