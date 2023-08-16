import React from 'react';

const WeatherMap = () => {
  const imageUrl = 'https://tile.openweathermap.org/map/windspeed/10/67.0011/24.8607.png?appid=3de496bef232d36690f44660ae686670';

  return (
    <div>
      <h1>Weather Wind Speed Map</h1>
      <img src={imageUrl} alt="Weather Map" />
    </div>
  );
}

export default WeatherMap;
