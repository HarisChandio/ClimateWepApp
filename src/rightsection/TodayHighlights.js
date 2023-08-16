import React from "react";
import "./style.css";

import Highlights from "./Highlight";

import MaxMin from "./MaxMin";

const TodayHighlights = ({ data, currentWeather }) => {
  const sunriseObj = new Date(currentWeather.sys.sunrise * 1000);
  const sunsetObj = new Date(currentWeather.sys.sunset * 1000);

  // Convert Date objects to string representations
  const sunrise = sunriseObj.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  const sunset = sunsetObj.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const maxtemp = Math.round(currentWeather.main.temp_max - 273);
  const mintemp = Math.round(currentWeather.main.temp_min - 273);

  return (
    <>
      <p className="title ms-4 mt-1">Today's Highlights</p>
      <div className="row m-2 justify-content-between ">
        <Highlights
          className=""
          label={"Wind Speed"}
          unit={"km/h"}
          condition={"normal"}
          value={data.list[0].wind.speed}
        />
        <Highlights
          className=""
          label={"Humidity"}
          unit={"%"}
          condition={"normal"}
          value={data.list[0].main.humidity}
        />
        <MaxMin
          className=""
          label={"Sunset & Sunrise"}
          val1={sunrise}
          val2={sunset}
        />
        <MaxMin
          className=""
          label={"Max & Min Temp"}
          val1={`${maxtemp} °C`}
          val2={`${mintemp} °C`}
        />
        <Highlights
          className=""
          label={"Visibility"}
          unit={"km"}
          condition={"Average"}
          value={data.list[0].visibility / 1000}
        />

        <Highlights
          className=""
          label={"Pressure"}
          unit={"mmHg"}
          condition={"unhealthy"}
          value={Math.round(data.list[0].main.pressure / 133.322)}
        />
      </div>
    </>
  );
};

export default TodayHighlights;
