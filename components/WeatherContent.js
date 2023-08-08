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
  const [unit, setUnit] = useState("celcius");

  const handleUnitChange = ({ target }) => {
    target.innerText === "F" ? setUnit("fahrenheit") : setUnit("celcius");
  };
  const { name, sys, main } = weather;
  const sunrise = toLocalTime(sys?.sunrise);
  const sunset = toLocalTime(sys?.sunset);
  const { date, time } = currentDateTime();

  useEffect(() => {
    if (!weather) return;
    main.temp = changeTemp(main.temp, unit);
    main.temp_min = changeTemp(main.temp_min, unit);
    main.temp_max = changeTemp(main.temp_max, unit);
  }, [unit]);

  return (
    <div className="grid gap-8 content-center grid-cols-3 grid-flow-dense font-medium text-xl text-[--tertiary-text] bg-[--glass-bg] self-center px-12 py-14 rounded-3xl w-fit tracking-wider">
      <h1 className="col-start-2 col-end-4 text-center text-7xl">
        {main.temp}&#8451;|
        <span className="cursor-pointer select-none" onClick={handleUnitChange}>
          {unit === "celcius" ? "F" : "C"}
        </span>
      </h1>
      <p className="col-start-1 text-center text-7xl">&#9729;</p>
      <h2 className="col-span-full text-center text-4xl">
        {name}, {sys?.country}
      </h2>
      <div className="col-span-2">
        <p>Sunrise: {sunrise}</p>
        <p>Sunset: {sunset}</p>
      </div>
      <div className="col-start-3 col-end-4">
        <p className="text-end">Min: {main.temp_min}&#8451;</p>
        <p className="text-end">Max: {main.temp_max}&#8451;</p>
      </div>
      <p className="col-span-full text-center">
        {date} | {time}
      </p>
    </div>
  );
}
