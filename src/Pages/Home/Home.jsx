import React, { useState } from "react";

//COMPONENTS
import WeatherForm from "../../Components/Home/WeatherForm/WeatherForm";
import CityInformation from "../../Components/Custom/CityInformation/CityInformation";
import Loader from "../../Components/Custom/Loader/Loader";
import NotFound from "../../Components/Custom/NotFound/NotFound";

//STYLES
import "./Home.styles.css";
import NavBar from "../../Components/Custom/Nav/NavBar";

//Styles
import useGetBackImage from "../../Hooks/useGetBackImage";

const Home = () => {
  //State
  const [nameCityValue, setNameCityValue] = useState("");
  const [cityWeatherData, setCityWeatherData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const [value, setValue] = useState("");
  const [weatherByCity, setWeatherByCity] = useState(false);
  const [weatherByLocation, setWeatherByLocation] = useState(false);

  //custom hooks
  const { backFormat } = useGetBackImage(weatherByLocation);

  //FUNCTIONS
  const handleNameCityValue = ({ value }) => {
    setNameCityValue(value);
    setValue(value);
  };

  const handleReset = () => {
    setCityWeatherData(null);
    setError("");
    setValue("");
    setNameCityValue("");
  };

  const handleSubmitValue = async (e) => {
    e.preventDefault();
    setLoader(true);
    setCityWeatherData(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${nameCityValue}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      );
      const result = await response.json();
      if (result.cod === "404") {
        setError(result);
      } else {
        setCityWeatherData(result);
      }
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };

  const handleViewByCity = (booleanValue) => {
    setValue("");
    setWeatherByCity(booleanValue);
    setWeatherByLocation(!booleanValue);
    cityWeatherData !== null && setCityWeatherData(null);
  };

  const handleViewByLocation = (booleanValue) => {
    setWeatherByLocation(booleanValue);
    setWeatherByCity(!booleanValue);
    cityWeatherData !== null && setCityWeatherData(null);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backFormat})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "calc(100vh - 80px)",
        width: "100%",
      }}
      className={`${
        ((cityWeatherData !== null && weatherByCity) || weatherByLocation) &&
        `flex justify-center items-center flex-col`
      } `}
    >
      {weatherByCity ? (
        <WeatherForm
          handleNameCityValue={handleNameCityValue}
          handleSubmitValue={handleSubmitValue}
          value={value}
          cityWeatherData={cityWeatherData}
        />
      ) : (
        weatherByLocation && <CityInformation />
      )}

      {loader && <Loader />}

      {error.cod === "404" ? (
        <NotFound message={error.message} handleReset={handleReset} />
      ) : (
        cityWeatherData && (
          <CityInformation
            name={cityWeatherData?.name}
            temperature={cityWeatherData?.main.temp}
            icon={cityWeatherData?.weather[0].icon}
            country={cityWeatherData?.sys.country}
            handleReset={handleReset}
            weatherDescription={cityWeatherData?.weather[0].description}
          />
        )
      )}
      <NavBar
        handleViewByCity={handleViewByCity}
        handleViewByLocation={handleViewByLocation}
      />
    </div>
  );
};

export default Home;
