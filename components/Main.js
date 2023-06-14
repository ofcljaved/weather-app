"use client";
import EarthCanvas from "@/components/EarthCanvas";
import WeatherContent from "@/components/WeatherContent";
import React, { useEffect, useState } from "react";

export default function Main({ children }) {
  const [position, setPosition] = useState(false);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setPosition(pos);
      console.log(pos);
    });
  }, []);
  return (
    <main className="grid grid-cols-2 w-fit justify-self-center">
      {position ? <WeatherContent /> : children}
      {/* <EarthCanvas />  */}
    </main>
  );
}
