import React, { useState } from 'react';


//COMPONENTS
import WeatherForm from '../../Components/Home/WeatherForm/WeatherForm';
import CityInformation from '../../Components/Custom/CityInformation/CityInformation';
import Loader from '../../Components/Custom/Loader/Loader';
import NotFound from '../../Components/Custom/NotFound/NotFound';

//STYLES
import "./Home.styles.css"

const Home = () => {

    //HOOKS

        //State
            const [nameCityValue, setNameCityValue] = useState("");
            const [cityWeatherData, setCityWeatherData] = useState(null);
            const [loader, setLoader] = useState(false);
            const [error, setError] = useState("");
            const [value, setValue] = useState("");

    //FUNCTIONS
        const handleNameCityValue = ({value}) => {
            setNameCityValue(value)
            setValue(value)
        }
    
        const handleReset = () => {
            setError("");
            setValue("");
            setNameCityValue("");
        }

        const handleSubmitValue = async (e) => {
            e.preventDefault();
            setLoader(true);
            setCityWeatherData(null);
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameCityValue}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);
                const result = await response.json();
                if(result.cod === "404"){
                    setError(result)
                }else {
                    setCityWeatherData(result)  

                }
            } catch (error) {
                console.log(error)
            };
            setLoader(false);
        };


        // console.log(cityWeatherData.cod);
    return (
        <div className="bg-black h-screen home-card">
            <WeatherForm 
            handleNameCityValue={handleNameCityValue}
            handleSubmitValue={handleSubmitValue}
            value={value}
            />

            {loader && <Loader/>}

            {/* {cityWeatherData.cod === "404" && <p>{cityWeatherData.message}</p>} */}

            {
               error.cod === "404" ? (
                //    <h2>{error.message}</h2>
                    <NotFound
                        message={error.message}
                        handleReset={handleReset}
                    />
               ) : (
                   cityWeatherData &&
                   <CityInformation
                        name={cityWeatherData?.name}
                        temperature={cityWeatherData?.main.temp}
                        icon={cityWeatherData?.weather[0].icon}

                   /> 

               ) 
               
               
            }
  
            




        </div>
    );
};

export default Home;