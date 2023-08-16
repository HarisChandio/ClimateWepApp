import React from "react";

const SunRiseSet = ({ data }) => {
  const sunriseObj = new Date(data.sys.sunrise * 1000);
  const sunsetObj = new Date(data.sys.sunset * 1000);

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

  return (
    <div className="col-6 col-md-4  ">
      <div className=" rounded-4 bg-white mb-4 shadow shadow-xxl">
        <div className="ms-4 pb-4">
          <p className="pt-3 fw-bold text-light card-p mb-3 ">
            Sunrise &amp; Sunset
          </p>
          <div className="d-flex  align-items-center ">
            <span>
              <i
                className="fa-solid fa-circle-up fs-2 me-3"
                style={{ color: "#FDB813" }}
              />
            </span>
            <div>
              <p className="cardend m-0">{sunrise} am</p>
            </div>
          </div>
          <div className="d-flex align-items-center pb-3">
            <span>
              <i
                className="fa-solid fa-circle-down fs-2 me-3"
                style={{ color: "#FDB813" }}
              />
            </span>
            <div>
              <p className="cardend m-0">{sunset} pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunRiseSet;
