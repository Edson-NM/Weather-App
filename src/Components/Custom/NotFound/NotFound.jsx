import React from 'react';


const NotFound = ({message, handleReset}) => {
    return (
        <div className=" bg-white w-1/2 sm:w-1/5 h-1/5 sm:h-1/3 mx-auto mt-14 rounded-md flex items-center justify-center flex-col">
            <h2 className="text-red text-2xl my-4 ">{message}</h2>
            <button className=" bg-yellow text-black p-1 rounded-md hover:bg-main_blue ease-linear duration-300" onClick={handleReset}>Reset</button>
        </div>
    );
};

export default NotFound;