import React from 'react';
import { Link } from 'react-router-dom';
import images from "../../../Assets/images.js"

import "./Header.styles.css"


const Header = () => {
    

    return (
        <div className=" h-20 bg-main_blue text-center flex items-center justify-center">
            {/* <img src={images[0]} alt="Imagen" className="h-10" /> */}
            <h2 className=" mx-2 text-white text-xl font-semibold"><Link to="/">The Weather App</Link></h2>
            <img src={images[0]} alt="Imagen" className="h-10 world" />
        </div>
    );
};

export default Header;