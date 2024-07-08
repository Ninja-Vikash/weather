import React from "react";
import "./WeatherData.css"

function WeatherData(props) {
  return (
    <>
      <div className="weather_data">
        <p className="temp">{props.temp}° C</p>

        <div className="weather_type">
          <div className="weather_type_logo">
            <p>Weather Type</p>
            <img src="/icons/partly-cloudy.png" height={"36px"} />
          </div>

          <div className="weather_type_text">
            <p>{props.type}</p>
          </div>
        </div>

        <div className="now">
          <h3>{props.time}</h3>

          <div>
            <h3>{props.currentDay}</h3>
            <h3>{props.today}</h3>
          </div>
        </div>

        <p className="city_name">{props.cityName}</p>

        <div className="more">
          <div>
            <div>
              <p>Humidity</p>
              <p>{props.humidity}</p>
            </div>
            <span></span>
            <div>
              <p>Visiblity</p>
              <p>{props.visibility}</p>
            </div>
          </div>

          <div>
            <div>
              <p>Wind</p>
              <p>{props.wind}</p>
            </div>
            <span></span>
            <div>
              <p>Direction</p>
              <p>{props.direction}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherData;
