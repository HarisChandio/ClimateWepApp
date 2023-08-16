import React, { useState } from "react";
import "./App.css";
import Weather from "./leftsection/Weather";
import Forecast from "./rightsection/Forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForcast] = useState(null);

  return (
    <div className="row mt-lg-1 ">
      <div className="col-12 col-sm-3 bg-white col-lg-4 weather-section">
        <Weather
          setCurrentWeather={setCurrentWeather}
          currentWeather={currentWeather}
          setForcast={setForcast}
          forecast={forecast}
        ></Weather>
      </div>
      <div className="col-12 col-sm-9 bg-light col-lg-8 forecast-section">
        {forecast && (
          <Forecast
            forecastData={forecast}
            currentWeather={currentWeather}
          ></Forecast>
        )}
      </div>
    </div>
  );
}

export default App;
