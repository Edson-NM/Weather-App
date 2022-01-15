import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [degreesValue, setDegreesValue] = useState(true);

  useEffect(() => {
    const handleError = () => {
      alert(
        "To see the weather on your region you must allow access location. Thank you."
      );
    };

    const handleSuccess = (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      degreesValue
        ? axios
            .get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=255a2683bd5ad3ec6d689e72383cce35&units=metric`
            )
            .then((res) => setData(res?.data))
        : axios
            .get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=255a2683bd5ad3ec6d689e72383cce35&units=imperial`
            )
            .then((res) => setData(res?.data));
    };
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, [degreesValue]);

  const changeDegreeValue = () => {
    setDegreesValue(!degreesValue);
  };

  return { data, changeDegreeValue, degreesValue };
};

export default useFetch;
