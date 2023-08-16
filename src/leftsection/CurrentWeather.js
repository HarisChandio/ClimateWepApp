import React from "react";

const CurrentWeather = ({ data }) => {
  const timestamp = data.dt;
  const date = new Date(timestamp * 1000);

  const day = date.toLocaleDateString("en-US", { weekday: "long" });
  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });



  return (
    <div className="tablet-style">
      <div className="row weather-icon">
        <div className="col-md-12">
          <div className=" w-100  text-center">
            <img src={`icons/${data.weather[0].icon}.png`} alt="weathor"></img>
          </div>
        </div>
      </div>
      <div className="centerdegree">
        <div className="col-md-12">
          <div className="mb-3 deg-day">
            <span className=" mb-1  cel">
              {Math.round(data.main.temp - 273)}°c
            </span>
            <div className="" style={{ marginTop: "-1.5rem" }}>
              <span className=" fs-3 m-0 current-day-time">{day},</span>
              <span className="  fs-3 m-0 current-day-time">{time}</span>
            </div>
          </div>
          <div className="cloud-rain">
            <div>
              <span>
                <i className="bi bi-cloudy me-2" />
              </span>
              <span className="textSarifBold ">
                {data.weather[0].description}{" "}
              </span>
            </div>
            {/* <div className="mb-3">
              <span>
                <i
                  className="bi bi-reception-4 me-2"
                  style={{ color: "blue", transform: "rotate(180deg)" }}
                />
              </span>
              <span className="textSarifBold ">Rain - 30%</span>
            </div> */}
          </div>
        </div>
      </div>
      <div className="row weather-img">
        <div className="col-md-12 ">
          <div className="d-flex justify-content-center align-items-center ">
            <img
              src="usa.jpeg"
              className="w-75 shadow shadow-lg m-4  img-fluid rounded-4"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
