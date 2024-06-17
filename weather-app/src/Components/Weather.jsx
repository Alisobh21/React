import React, { useEffect, useRef, useState } from "react";
import "./Weather.css";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import wind_icon from "../assets/wind.png";
import humidity_icon from "../assets/humidity.png";

import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(false);
  const inputRef = useRef();
  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": rain_icon,
    "13n": rain_icon,
  };

  const search = async (city) => {
    if (city === "") {
      // toast.error("Enter the City Please");
      Toastify({
        text: "Enter the City Please",
        style: {
          background: "linear-gradient(to left, #fa0421, #fc0228)",
        },
        duration: 1000,
      }).showToast();

      // alert("Enter the City Please");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=32f4f391b08620ce080a8b122809710f&units=metric`;

      const response = await fetch(url);
      const data = await response.json();
      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
      console.log(data);
    } catch (e) {
      console.log(e);
      setWeatherData(false);
      Toastify({
        text: "No City Found with that name try something else",
        style: {
          background: "linear-gradient(to left, #fa0421, #fc0228)",
        },
        duration: 1000,
      }).showToast();
    }
  };

  useEffect(() => {
    search("Cairo");
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Search" ref={inputRef} />

        <img
          src={search_icon}
          alt=""
          onClick={() => search(inputRef.current.value)}
        />
      </div>
      {weatherData ? (
        <>
          <img src={weatherData.icon} alt="" className="weather-icon" />
          <p className="temperature">{weatherData.temperature}°C</p>
          <p className="location">{weatherData.location}</p>
          <div className="weather-data">
            <div className="col">
              <div className="col-container">
                <img src={humidity_icon} alt="" />
                <div>
                  <p>{weatherData.humidity} %</p>
                  <span>Humidity</span>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="col-container">
                <img src={wind_icon} alt="" />
                <div>
                  <p>{weatherData.windSpeed} Km/h</p>
                  <span>Wind Speed</span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Weather;
