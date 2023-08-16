import React from "react";
import "../App.css";
const Highlights = ({ label, value, unit, condition }) => {
  return (
    <div className="  col-6 col-md-4 mb-2">
      <div className=" rounded-4 highlight-card  shadow shadow-xxl ms-0 me-0">
        <div className="ms-4  ">
          <p className="pt-2 fw-bold text-light card-p mb-2 highlight-text">{label}</p>
          <div className="d-flex align-items-center mb-2">
            <p className="cardmidtext m-0 highlight-text">{value}</p>
            <p className="cardend m-0 ">{unit}</p>
          </div>
          <div className=" pb-2">
            <span>
              <i className="fa-brands fa-tiktok" style={{ color: "blue" }} />
            </span>
            <span className=" cardend">{condition}</span>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Highlights;
