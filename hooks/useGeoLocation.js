import fetchWeather from "@/utils/WeatherApi";
import { useState, useEffect } from "react";

export default function useGeoLocation() {
  const [value, setValue] = useState(null);

  function successCallback(pos) {
    setValue(pos);
  }

  function errorCallback(error) {
    console.log(error);
    setValue(null);
  }

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return value;
}
