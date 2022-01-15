import React from "react";
import { Link } from "react-router-dom";
import images from "../../../Assets/images.js";

import "./Header.styles.css";

const Header = ({ handleViewByCity, handleViewByLocation }) => {
  return (
    <div className=" h-20 bg-main_blue text-center flex items-center justify-start md:justify-between">
      <div className="flex items-center" style={{ height: "100%" }}>
        <img
          src={images[1]}
          alt="Imagen"
          className="h-10 world ml-5 md:ml-10 md:h-16"
          style={{ backgroundColor: "transparent" }}
        />
        <h2 className=" mx-2 md:ml-10 text-white text-xl xsm:text-2xl sm:text-3xl font-semibold hover:text-ligth_blue ease-linear duration-300">
          <Link to="/">The Weather App</Link>
        </h2>
      </div>
    </div>
  );
};

export default Header;
