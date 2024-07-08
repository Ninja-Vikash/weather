import React, { useEffect, useState } from "react";
import "./Home.css";

import { callApi, weatherData } from "../../utils/callApi.js";
import { Time } from "../../utils/time.js";
import Loader from "../../components/Loader/Loader.jsx";
import Error from "../../components/Error/Error.jsx";
import WeatherData from "../../components/WeatherData/WeatherData.jsx";

function Home() {
  const [loading, setLoading] = useState();
  const [err, setErr] = useState();
  const [city, setCity] = useState("");

  const [cityName, setCityName] = useState("Jamshedpur");
  const [type, setType] = useState("Clear");
  const [temp, setTemp] = useState("22");
  const [humidity, setHumidity] = useState("80");
  const [wind, setWind] = useState("5");
  const [direction, setDirection] = useState("East");
  const [visibility, setVisibility] = useState("3.07");

  // Timer
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Destructuring Time Objects
  let { currentDate, currentDay, currentMonth, currentYear } = Time;
  const [today, setToday] = useState(
    `${currentDate} ${currentMonth}, ${currentYear}`
  );

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

  // API Call
  function callWeather() {
    setLoading(true);
    let cityName = city.toLowerCase();

    callApi(cityName)
      .then(() => {
        setErr(false);
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
        setErr(true);
        console.log("Error in data processing!!! 🤯", err);
      });
  }

  return (
    <div className="home_page container">
      {/* ------ Search Box ------ */}
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

      {/* ------ Loader ------ */}
      {loading ? <Loader /> : ""}
      {/* <Loader/> */}

      {/* ------ Weather Data ------ */}
      {weatherData && (
        <WeatherData
          today={today}
          currentDay={currentDay}
          time={time}
          type={type}
          temp={temp}
          direction={direction}
          wind={wind}
          visibility={visibility}
          humidity={humidity}
          cityName={cityName}
        />
      )}

      {/* ------ Error Component ------ */}
      {err ? <Error /> : ""}
    </div>
  );
}

export default Home;
