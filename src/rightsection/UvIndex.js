import React from "react";
import "./style.css";

const UVIndexMeter = ({ uvIndex }) => {
  const rotateAngle = -90 + (uvIndex / 10) * 180; // Calculate the rotation angle

  return (
    <div className="p-4 shadow bg-body-white rounded-4 card border-primary align-items-center border-0">
      <h5 className="text-muted fw-bold">UV Index</h5>
      <div className="svg-container">
        <svg
          className="svg"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 110 110"
          xmlSpace="preserve"
        >
          <linearGradient id="gradient" x1={0} y1={0} x2={0} y2="100%">
            <stop offset="0%" stopColor="#56c4fb" />
            <stop offset="100%" stopColor="#0baeff" />
          </linearGradient>
          <circle className="circle" cx="55.44" cy="62.3" r="5.32" />
          <path
            className="grey"
            d="M25.66,88.95c-6.8-7.22-10.96-16.94-10.96-27.63c0-22.26,18.05-40.31,40.31-40.31s40.31,18.05,40.31,40.31
            c0,10.72-4.18,20.46-11,27.68"
          />
          <path
            className="blue"
            d="M25.66,88.95c-6.8-7.22-10.96-16.94-10.96-27.63c0-22.26,18.05-40.31,40.31-40.31s40.31,18.05,40.31,40.31
            c0,10.72-4.18,20.46-11,27.68"
            fill="none"
            id="blue"
            style={{ strokeDashoffset: 198 - rotateAngle }}
          />
          <path
            className="dotline"
            d="M38.59,87.7c-8.8-5.49-14.66-15.25-14.66-26.39c0-17.16,13.91-31.07,31.07-31.07s31.07,13.91,31.07,31.07
            c0,11.48-6.22,21.5-15.48,26.88"
          />
          <path
            className="needal"
            d="M38.01,80.95l15.74-24.72c0.21-0.32,0.65-0.39,0.94-0.13l6.99,6.22c0.29,0.25,0.28,0.71-0.02,0.95l-22.73,18.5
            C38.38,82.21,37.63,81.55,38.01,80.95z"
            id="needal"
            style={{
              transform: `rotate(${rotateAngle}deg)`, // Apply the calculated rotation angle
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default UVIndexMeter;