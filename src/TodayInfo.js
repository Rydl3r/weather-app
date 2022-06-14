import React from "react";

const todayInfo = ({ weather }) => {
  return (
    <div className="today-info-container">
      <div className="today-info">
        <div className="precipitation">
          {" "}
          <span className="title">WIND TEMPERATURE</span>
          <span className="value">{weather.wind.deg} deg</span>
          <div className="clear"></div>
        </div>
        <div className="wind">
          {" "}
          <span className="title">WIND SPEED</span>
          <span className="value">{weather.wind.speed} km/h</span>
          <div className="clear"></div>
        </div>
        <div className="humidity">
          {" "}
          <span className="title">HUMIDITY</span>
          <span className="value">{weather.main.humidity}</span>
          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
};

export default todayInfo;
