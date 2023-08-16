import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../api";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import './style.css';
const Weather = ({
  setCurrentWeather,
  currentWeather,
  forecast,
  setForcast,
}) => {
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatheFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );

    Promise.all([currentWeatheFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForcast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="weather ">
        <Search onSearchChange={handleOnSearchChange}></Search>
        {currentWeather && (
          <CurrentWeather className="tablet-style" data={currentWeather}></CurrentWeather>
        )}
      </div>
    </div>
  );
};

export default Weather;
