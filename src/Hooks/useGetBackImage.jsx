import React, { useEffect, useState } from "react";
import images from "../Assets/images";
import useFetch from "./useFetch";

//

const useGetBackImage = (weatherByLocation) => {
  const [backFormat, setBackFormat] = useState();

  const { data } = useFetch();

  useEffect(() => {
    setBackFormat();
    const iconValue = weatherByLocation && data?.weather[0].icon.slice(0, 2);
    console.log(iconValue);
    switch (iconValue) {
      case "01":
        setBackFormat(images[2]);
        break;
      case "02":
        setBackFormat(images[3]);
        break;
      case "03":
        setBackFormat(images[4]);
        break;
      case "04":
        setBackFormat(images[5]);
        break;
      case "09":
        setBackFormat(images[6]);
        break;
      case "10":
        setBackFormat(images[7]);
        break;
      case "11":
        setBackFormat(images[8]);
        break;
      case "13":
        setBackFormat(images[9]);
        break;
      case "50":
        setBackFormat(images[10]);
        break;
      default:
        setBackFormat(images[0]);
        break;
    }
  }, [weatherByLocation]);

  return { backFormat };
};

export default useGetBackImage;
