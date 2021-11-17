import React from 'react';

const WeatherForm = ({handleNameCityValue, handleSubmitValue, value}) => {
    return (
        <div className="">
            <form onSubmit={(e) => handleSubmitValue(e)} className="pt-10">

                <input 
                type="text" 
                placeholder="Type name City here" 
                value={value}
                required
                onChange={({target}) => handleNameCityValue(target)}
                className="p-1 text-center rounded-l-md sm:w-2/5"
                />

                <input type="submit" value="Search" className="p-1 rounded-r-md bg-main_blue text-white sm:w-1/8 hover:bg-sky_blue ease-linear duration-300"/>
            </form>
        </div>
    );
};

export default WeatherForm;