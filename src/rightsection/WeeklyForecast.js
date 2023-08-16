import React, { useState } from "react";
import "./style.css";
const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const WeeklyForecast = ({ data }) => {
  const [temperatureUnit, setTemperatureUnit] = useState("C");
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  const handleUnitChange = () => {
    setTemperatureUnit(temperatureUnit === "C" ? "F" : "C");
  };

  return (
    <div className="">
      <div className="row">
        <div className="d-flex  justify-content-between col-12 mt-2 ">
          <p className="title ms-4">Week</p>
          <div className="me-4">
            <button
              className="btns rounded-5 border-0 me-2 button-29"
             
              onClick={handleUnitChange}
            >
              {temperatureUnit === "C" ? "°C" : "°F"}
            </button>
            {/* Remove the extra button for Fahrenheit */}
            <img
              src="naruPro.jpg"
              className="ms-2 img-fluid rounded-3"
              style={{ width: 40 }}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container-lg">
        <div className="row mt-1 justify-content-between px-0 mx-0 container-lg align-content-center">
          {data.list.slice(0, 6).map((item, idx) => (
            <div
              className="col-5 col-sm-3 col-md-3 col-lg px-3 mx-2 my-2 text-center week-card"
              key={idx} // Add a unique key for each element in the map
            >
              <p className="week-day p-0 m-0">{forecastDays[idx]}</p>
              <img
                src={`icons/${item.weather[0].icon}.png`}
                className="icon-small"
                alt="weather"
              />
              <div>
                <p className="fw-bold d-inline week-temp-font">
                  {temperatureUnit === "C"
                    ? Math.round(item.main.temp_max - 273.15) + "°C"
                    : Math.round((item.main.temp_max - 273.15) * 1.8 + 32) + "°F"}
                </p>
                <p className="d-inline week-temp-font">
                  -
                  {temperatureUnit === "C"
                    ? Math.round(item.main.temp_min - 273.15) + "°C"
                    : Math.round((item.main.temp_min - 273.15) * 1.8 + 32) + "°F"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeeklyForecast;
