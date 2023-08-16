import React from "react";

const MaxMin = ({ label, val1, val2 }) => {
  return (
    <div className="col-6 col-md-4  ">
      <div className=" rounded-4 highlight-card mb-4 shadow shadow-xxl">
        <div className="ms-4 pb-1">
          <p className="pt-2 fw-bold text-light card-p mb-3 highlight-text">{label}</p>
          <div className="d-flex  align-items-center ">
            <span>
              <i
                className="fa-solid fa-circle-up fs-2 me-md-3   me-2"
                style={{ color: "#FDB813" }}
              />
            </span>

            <p className="cardend m-0 time-deg highlight-text">{val1}</p>
          </div>
          <div className="d-flex align-items-center pb-2">
            <span>
              <i
                className="fa-solid fa-circle-down fs-2 me-md-3 me-2"
                style={{ color: "#FDB813" }}
              />
            </span>
            <p className="cardend m-0 time-deg highlight-text">{val2} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaxMin;
