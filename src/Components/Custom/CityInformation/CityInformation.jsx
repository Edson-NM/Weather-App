import React, { useEffect, useState } from "react";

//LINK
import { Link } from "react-router-dom";

//STYLES
import "./CityInformation.styles.css";
import useFetch from "../../../Hooks/useFetch.jsx";

import { WiHumidity, WiStrongWind } from "react-icons/wi";
import { FaTemperatureLow, FaArrowsAltH } from "react-icons/fa";

//utils
import getBackgroundFormat from "../../../Utils/getBackgroundFormat";

//Assets
import images from "../../../Assets/images";

const CityInformation = ({
  name,
  country,
  temperature,
  icon,
  wind,
  humidity,
  weatherDetail,
  handleReset,
  feelsLike,
  weatherDescription,
}) => {
  const { data, changeDegreeValue, degreesValue } = useFetch();

  const [backFormat, setBackFormat] = useState();

  useEffect(() => {
    wind && getBackgroundFormat(setBackFormat, icon);
  }, [wind, icon]);

  const iconSeparate = icon
    ? icon.slice(2, 3)
    : data && data.weather[0].icon.slice(2, 3);

  return (
    <div
      className={`flex justify-center items-center`}
      style={{ height: "calc(100vh - 80px)", width: "100%" }}
    >
      {name ? (
        <div
          style={
            iconSeparate === "d"
              ? { backgroundImage: `url(${images[12]})` }
              : { backgroundImage: `url(${images[11]})` }
          }
          className="w-4/6 sm:w-3/5 lg:w-2/5 h-4/6 sm:h-4/5  bg-cover bg-no-repeat bg-bottom flex flex-col justify-center items-center rounded-3xl text-white"
        >
          <h2 className="items-center flex text-xl font-mono p-2">
            {`${name}, ${country}`}
          </h2>

          <div
            className={`w-4/5 h-3/5 flex flex-col items-center justify-center rounded-md  ${
              iconSeparate === "d" ? "bg-main_blue" : "bg-softnigth"
            }`}
          >
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="w-full h-1/3 flex justify-end items-center">
                <img
                  id="icon"
                  className=" w-1/3"
                  src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt="weather Icon"
                />
              </div>
              <p className=" w-full text-4xl  lg:text-6xl flex justify-center items-center ">
                {`${Math.round(temperature)}°`}{" "}
                <span className="h-full text-lg md:text-2xl flex items-start ml-1">
                  c
                </span>
              </p>
              <p className="text-sm md:text-base my-1">{weatherDescription}</p>
            </div>
          </div>
          <div className="w-1/2 flex justify-center">
            <button className="w-1/2 text-white bg-nigth text-sm m-3 p-1 font-semibold rounded-md hover:bg-main_blue hover:text-white ease-linear duration-300">
              <Link to={`/details/${name}`}>Details</Link>
            </button>
            <button
              onClick={handleReset}
              className="w-1/2 text-white bg-nigth text-sm m-3 p-1 font-semibold rounded-md hover:bg-main_blue hover:text-white ease-linear duration-300"
            >
              Reset
            </button>
          </div>
        </div>
      ) : wind ? (
        <div
          className={` flex flex-col justify-evenly details-card h-full w-full `}
          style={{
            backgroundImage: `url(${backFormat})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <p className="font-semibold bg-nigth opacity-90 p-2 rounded-xl w-3/4 sm:w-2/4 sm:p-4 sm:text-3xl mx-auto flex items-center justify-center text-white">
            <FaTemperatureLow className="h-35 w-6 text-xl mr-1" />
            {`Feels like: ${Math.round(feelsLike)}°`}
          </p>

          <p className="font-semibold bg-nigth opacity-90 p-2 rounded-xl w-3/4 sm:w-2/4 sm:p-4 sm:text-3xl mx-auto flex items-center justify-center text-white">
            <img
              id="icon"
              className="h-35 w-6 text-xl mr-1"
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="weather Icon"
            />
            {`Weather: ${weatherDetail}`}
          </p>

          <p className="font-semibold bg-nigth opacity-90 p-2 rounded-xl w-3/4 sm:w-2/4 sm:p-4 sm:text-3xl mx-auto flex items-center justify-center text-white">
            <WiStrongWind className="h-35 w-6 text-xl mr-1" />
            {`Wind: ${wind} km/h`}
          </p>

          <p className="font-semibold bg-nigth opacity-90 p-2 rounded-xl w-3/4 sm:w-2/4 h-10 sm:h-20 sm:p-4 sm:text-3xl mx-auto flex items-center justify-center text-white">
            <WiHumidity className="h-35 w-6 text-xl mr-1" />
            {`Humidity: ${humidity}%`}
          </p>

          <button className="text-white text-sm mb-4 p-1 font-semibold rounded-md bg-nigth w-1/5 xsm:w-1/12 mx-auto hover:bg-ligth_blue hover:text-black transition-all ease-linear duration-300">
            <Link to={`/`}>Go back</Link>
          </button>
        </div>
      ) : (
        data && (
          <div
            style={
              iconSeparate === "d"
                ? { backgroundImage: `url(${images[12]})` }
                : { backgroundImage: `url(${images[11]})` }
            }
            className="w-4/6 sm:w-3/5 lg:w-2/5 h-4/6 sm:h-4/5  bg-cover bg-no-repeat bg-bottom flex flex-col justify-center items-center rounded-3xl"
          >
            <h2 className="font-bold text-white  text-lg xl:my-2">{`${data.name}, ${data.sys.country}`}</h2>
            <div
              className={`  w-9/12 lg:w-3/5  flex justify-center items-center  flex-col rounded-md my-1 text-white ${
                iconSeparate === "d" ? "bg-main_blue" : "bg-softnigth"
              } `}
            >
              <div className=" w-full flex justify-center items-center">
                <p className="mx-auto text-4xl sm:text-5xl md:text-6xl font-bold">
                  {Math.round(data.main.temp)}°
                  <span className="text-xl xl:text-3xl">{`${
                    degreesValue ? "C" : "F"
                  }`}</span>
                </p>
                <img
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt="weather icon"
                  className="w-1/3"
                />
              </div>
              <p className="text-white ">{data.weather[0].description}</p>
            </div>
            <div
              className={`${
                iconSeparate === "d" ? "bg-main_blue" : "bg-softnigth"
              } w-9/12 lg:w-3/5 flex flex-col justify-center items-center mb-1  py-2 rounded-md text-ligth_blue`}
            >
              <p className="flex items-center text-sm sm:text-base">
                <FaTemperatureLow className="mr-1" />
                Feels like:
                {` ${Math.round(data.main.feels_like)}° ${
                  degreesValue ? "C" : "F"
                } `}
              </p>
              <p className="flex items-center text-sm sm:text-base">
                <WiStrongWind className="mr-1" />
                {`wind: ${data.wind.speed} ${degreesValue ? "m/s" : "mph"}`}
              </p>
              <p className=" flex items-center text-sm sm:text-base">
                <WiHumidity className="mr-1" />
                Humidity: {data.main.humidity}%
              </p>
            </div>
            <button
              className="flex justify-center items-center rounded-md mb-1 lg:mb-2 p-1 lg:p-2 text-white text-xs md:text-base  bg-nigth hover:bg-sky_blue hover:text-nigth"
              onClick={changeDegreeValue}
            >
              Degrees °F
              <span>
                <FaArrowsAltH className="mx-1" />
              </span>
              °C
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default CityInformation;
