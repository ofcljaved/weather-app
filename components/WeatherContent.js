"use client";
import currentDateTime from "@/utils/currentDateTime";
import changeTemp from "@/utils/changeTemp";
import { useEffect, useState } from "react";

const toLocalTime = (timeString) => {
  if (!timeString) return;
  let [time, meridiem] = new Date(timeString * 1000)
    .toLocaleTimeString()
    .split(" ");
  return time.slice(0, time.lastIndexOf(":")) + meridiem.toUpperCase();
};

export default function WeatherContent({ weather }) {
  const [{ date, time }, fetchDateTime] = useState(currentDateTime());
  const [unit, setUnit] = useState("celcius");
  const [temp, setTemp] = useState({
    temp: weather?.main?.temp,
    temp_min: weather?.main?.temp_min,
    temp_max: weather?.main?.temp_max,
  });

  const handleUnitChange = ({ target }) => {
    target.innerText === "F" ? setUnit("fahrenheit") : setUnit("celcius");
    setTemp((prev) =>
      changeTemp(prev, target.innerText === "F" ? "fahrenheit" : "celcius")
    );
  };

  useEffect(() => {
    setTemp({
      temp: weather?.main?.temp,
      temp_min: weather?.main?.temp_min,
      temp_max: weather?.main?.temp_max,
    });
  }, [weather]);
  const { name, sys } = weather;
  const sunrise = toLocalTime(sys?.sunrise);
  const sunset = toLocalTime(sys?.sunset);

  useEffect(() => {
    let timer = setInterval(() => {
      fetchDateTime(currentDateTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid gap-8 content-center grid-cols-2 grid-flow-dense font-medium text-xl text-[--tertiary-text] bg-[--glass-bg] self-center px-12 py-14 rounded-3xl w-fit tracking-wider">
      <h1 className="col-start-2 text-center text-7xl">
        {temp.temp}
        <sup>o</sup>
        {unit === "celcius" ? "C" : "F"}|
        <span className="cursor-pointer select-none" onClick={handleUnitChange}>
          {unit === "celcius" ? "F" : "C"}
        </span>
      </h1>
      <p className="col-start-1 text-center text-7xl">&#9729;</p>
      <h2 className="col-span-full text-center text-4xl">
        {name}, {sys?.country}
      </h2>
      <div>
        <p>Sunrise: {sunrise}</p>
        <p>Sunset: {sunset}</p>
      </div>
      <div>
        <p className="text-end">
          Min: {temp.temp_min}
          <sup>o</sup>
          {unit === "celcius" ? "C" : "F"}
        </p>
        <p className="text-end">
          Max: {temp.temp_max}
          <sup>o</sup>
          {unit === "celcius" ? "C" : "F"}
        </p>
      </div>
      <p className="col-span-full text-center">
        {date} | {time}
      </p>
    </div>
  );
}
