import React, { useEffect, useState } from 'react';

//PARAMS
import { useParams } from 'react-router-dom';
import CityInformation from '../../Components/Custom/CityInformation/CityInformation';
import Loader from '../../Components/Custom/Loader/Loader';

const WeatherDetails = () => {

    //HOOKS

        //Params
            const {name} = useParams();
            
        //Statte
            const [detailsData, setDetailsData] = useState(null);
            const [loader, setLoader] = useState(false);


        //Effect
            useEffect(() => {
                const handleDetailData = async () => {
                    setLoader(true)
                    try {
                        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
                        const result = await response.json();
                        setDetailsData(result);
                    } catch (error) {
                        console.log(error);
                    }
                    setLoader(false)
                };
                handleDetailData();
            }, []);
            
            // console.log(detailsData);


    

    return (
        <div className="bg-main_blue h-screen flex justify-center ">

            {loader && <Loader/>}

            {
                detailsData? 
                <CityInformation
                    wind={detailsData?.wind.speed}
                    humidity={detailsData?.main.humidity}
                    icon={detailsData?.weather[0].icon}
                    weather={detailsData?.weather[0].description}
                    feelsLike={detailsData?.main.feels_like}
                /> : null
            }
        </div>
    );
};

export default WeatherDetails;