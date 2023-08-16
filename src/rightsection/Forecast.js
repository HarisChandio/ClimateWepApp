import React from "react";
import WeeklyForecast from "./WeeklyForecast";
import TodayHighlights from "./TodayHighlights";
const Forecast = ({ currentWeather, forecastData }) => {
  return (
    <div className="forecast bg-light mt-4">
      <WeeklyForecast data={forecastData}></WeeklyForecast>
      <TodayHighlights data={forecastData} currentWeather={currentWeather}></TodayHighlights>
    </div>
  );
};

export default Forecast;
