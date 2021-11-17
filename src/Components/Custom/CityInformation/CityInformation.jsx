import React from 'react';

//ASSETS
import images from "../../../Assets/images.js"

//LINK
import { Link } from 'react-router-dom';

//STYLES
import "./CityInformation.styles.css"


const CityInformation = ({name,temperature, icon, wind, humidity, weather, feelsLike}) => {

    const iconSeparate = icon.slice(2,3);
    const round = Math.round(temperature)

    return (
        <div className="flex justify-center m-6">
            {
                temperature ? (
                    
                    <div className={`${iconSeparate === "d" ?"dayWeather" : "nigthWeather"}`}>                        
                        <div className=" w-4/5 flex justify-end ml-8">
                            <img id="icon" className="text-white w-14 h-14" src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather Icon" />
                        </div>  

                        <p className="text-white items-center text-6xl pl-6 font-mono pt-2">{`${round}°`}</p>

                        <h2 className="text-white items-center flex text-xl font-mono pt-2">{name}</h2>  
                                                                      
                        <button className="text-black text-sm mb-4 p-1 font-semibold rounded-md hover:bg-main_blue hover:text-white ease-linear duration-300"><Link to={`/details/${name}`} >Details</Link></button>
                        
                    </div>

                ) : (

                    <div className={
                        `${weather === "clear sky" ? "clear-sky" 
                        : 
                        weather === "few clouds" ? "few-clouds" 
                        : 
                        weather === "scattered clouds" ? "scattered-clouds" 
                        : 
                        weather === "broken clouds" ? "broken-clouds" 
                        : 
                        weather === "shower rain" ? "shower-rain" 
                        : 
                        weather === "rain" ? "rain" 
                        : 
                        weather === "thunderstorm" ? "thunderstorm" 
                        : 
                        weather === "snow" ? "snowy" 
                        : 
                        weather === "mist" ? "mist" 
                        : 
                        weather === "fog" ? "fog" 
                        :
                        weather === "overcast clouds" ? "overcast-clouds" 
                        :
                        "other"} flex flex-col justify-evenly rounded-lg details-card`}
                    >

                        <p className="font-semibold bg-nigth opacity-90 p-2 rounded-xl w-3/4 sm:w-2/4 sm:p-4 sm:text-3xl mx-auto flex items-center justify-center text-white"><img id="icon" className="h-35 w-6 text-xl" src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather Icon" />{`Weather: ${weather}`}</p>

                        <p className="font-semibold bg-nigth opacity-90 p-2 rounded-xl w-3/4 sm:w-2/4 sm:p-4 sm:text-3xl mx-auto flex items-center justify-center text-white"><img className="h-35 w-6 text-xl " src={images[4]} alt="humidity" />{`Wind: ${wind} km/h`}</p>

                        <p className="font-semibold bg-nigth opacity-90 p-2 rounded-xl w-3/4 sm:w-2/4 h-10 sm:h-20 sm:p-4 sm:text-3xl mx-auto flex items-center justify-center text-white"><img className="h-35 w-6 text-xl" src={images[3]} alt="humidity" />{`Humidity: ${humidity}%`}</p>

                        <button className="text-white text-sm mb-4 p-1 font-semibold rounded-md bg-nigth w-1/5 mx-auto hover:bg-ligth_blue hover:text-black transition-all ease-linear duration-300"><Link to={`/`} >Go back</Link></button>
                    </div>
                )
            }
        </div>
    );
};

export default CityInformation;