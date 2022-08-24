import React, { useEffect, useState } from "react";
import axios from "axios";

import DailyForecast from "./DailyForecast";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState([{}]);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function getForecastInformation() {
    let apiKey = "606a063f1d6fa729e32e75a0af2c3ff9";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    //console.log(`Forecast axios ${apiUrl}`);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <br />
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <DailyForecast forecastData={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    getForecastInformation();
    return null;
  }
}
