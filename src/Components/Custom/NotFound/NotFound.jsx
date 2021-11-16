import React from 'react';


const NotFound = ({message, handleReset}) => {
    return (
        <div className=" bg-white w-1/2 h-1/5 mx-auto mt-14 rounded-md flex items-center justify-center flex-col">
            <h2 className="text-black text-2xl my-4 line-through">{message}</h2>
            <button className=" bg-yellow text-black p-1 rounded-md hover:bg-strong_blue" onClick={handleReset}>Reset</button>
        </div>
    );
};

export default NotFound;