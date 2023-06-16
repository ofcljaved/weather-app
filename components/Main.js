"use client";
import EarthCanvas from "@/components/EarthCanvas";
import WeatherContent from "@/components/WeatherContent";
import SearchDialog from "@/components/SearchDialog";
import React, { useEffect, useState } from "react";
import fetchWeather from "@/utils/WeatherApi";

export default function Main({ children }) {
  const [position, setPosition] = useState(false);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const result = await fetchWeather(
        pos.coords.latitude,
        pos.coords.longitude
      );
      console.log(result);
      setPosition(pos);
      console.log(pos);
    });
  }, []);
  return (
    <>
      <main className="grid grid-cols-2 w-fit justify-self-center">
        {position ? <WeatherContent /> : children}
        {/* <EarthCanvas />  */}
      </main>
      <SearchDialog />
    </>
  );
}
