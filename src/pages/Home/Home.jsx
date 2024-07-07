import React, { useEffect, useState } from "react";
import "./Home.css";

import { callApi, weatherData } from "../../utils/callApi.js";
import { Time } from "../../utils/time.js";
import Loader from "../../components/Loader/Loader.jsx";

function Home() {
  const [loading, setLoading] = useState();
  const [city, setCity] = useState("");

  const [cityName, setCityName] = useState("Jamshedpur");
  const [type, setType] = useState("Clear");
  const [temp, setTemp] = useState("22");
  const [humidity, setHumidity] = useState("80");
  const [wind, setWind] = useState("5");
  const [direction, setDirection] = useState("East");
  const [visibility, setVisibility] = useState("3.07");

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Destructuring Time Objects
  let { currentDate, currentDay, currentMonth, currentYear } = Time;

  // Handle city name
  function handleCityName(e) {
    setCity(e.target.value);
  }

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  function callWeather() {
    setLoading(true);
    let cityName = city.toLowerCase();

    callApi(cityName)
      .then(() => {
        setLoading(false);
        setCityName(weatherData.location.city);
        setHumidity(weatherData.current_observation.atmosphere.humidity);
        setVisibility(weatherData.current_observation.atmosphere.visibility);
        setTemp(weatherData.current_observation.condition.temperature);
        setWind(weatherData.current_observation.wind.speed);
        setDirection(weatherData.current_observation.wind.direction);
        setType(weatherData.current_observation.condition.text);

        console.log("Weather data received successfully!!! 🥳");
      })
      .catch((err) => {
        console.log("Error in data processing!!! 🤯", err);
      });
  }

  return (
    <div className="home_page container">
      <form>
        <div className="search_area">
          <label htmlFor="search">City</label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Enter your city name"
            onChange={handleCityName}
          />

          <button onClick={callWeather} type="button">
            Find
          </button>
        </div>
      </form>

      {loading ? <Loader/> : ""}
      {/* <Loader/> */}

      {weatherData && (
        <div className="weather_data">
          <p className="temp">{temp}° C</p>

          <div className="weather_type">
            <div className="weather_type_logo">
              <p>Weather Type</p>
              <img src="/icons/partly-cloudy.png" height={"36px"} />
            </div>

            <div className="weather_type_text">
              <p>{type}</p>
            </div>
          </div>

          <div className="now">
            <h3>{time}</h3>

            <div>
              <h3>{currentDay}</h3>
              <h3>{`${currentDate} ${currentMonth}, ${currentYear}`}</h3>
            </div>
          </div>

          <p className="city_name">{cityName}</p>

          <div className="more">
            <div>
              <div>
                <p>Humidity</p>
                <p>{humidity}</p>
              </div>
              <span></span>
              <div>
                <p>Visiblity</p>
                <p>{visibility}</p>
              </div>
            </div>

            <div>
              <div>
                <p>Wind</p>
                <p>{wind}</p>
              </div>
              <span></span>
              <div>
                <p>Direction</p>
                <p>{direction}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
