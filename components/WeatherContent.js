'use client';
import currentDateTime from '@/utils/currentDateTime';
import changeTemp from '@/utils/changeTemp';
import { useEffect, useState } from 'react';

const toLocalTime = (timeString) => {
  if (!timeString) return;
  let [time, meridiem] = new Date(timeString * 1000)
    .toLocaleTimeString()
    .split(' ');
  return time.slice(0, time.lastIndexOf(':')) + meridiem.toUpperCase();
};

export default function WeatherContent({ weather }) {
  const [{ date, time }, fetchDateTime] = useState(currentDateTime());
  const [unit, setUnit] = useState('celcius');
  const [temp, setTemp] = useState({
    temp: weather?.main?.temp,
    temp_min: weather?.main?.temp_min,
    temp_max: weather?.main?.temp_max,
  });

  const handleUnitChange = ({ target }) => {
    target.innerText === 'F' ? setUnit('fahrenheit') : setUnit('celcius');
    setTemp((prev) =>
      changeTemp(prev, target.innerText === 'F' ? 'fahrenheit' : 'celcius')
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
    <div className="col-span-full lg:col-auto grid gap-3 lg:gap-8 content-start lg:content-center grid-cols-4 grid-flow-dense font-medium text-xl text-[--tertiary-text] bg-[--glass-bg] self-start lg:self-center px-6 lg:px-12 py-5 lg:py-14 rounded-3xl w-fit tracking-wider">
      <h1 className="col-span-full row-start-2 lg:row-auto lg:col-[2_/_-1] text-center text-5xl xl:text-7xl">
        {temp.temp}
        <sup>o</sup>
        {unit === 'celcius' ? 'C' : 'F'}|
        <span className="cursor-pointer select-none" onClick={handleUnitChange}>
          {unit === 'celcius' ? 'F' : 'C'}
        </span>
      </h1>
      <img
        className={`col-span-full lg:col-start-1 text-center justify-self-center lg:justify-self-auto max-w-[6rem] ${
          weather.weather[0].icon.includes('n') &&
          'invert-[0.7] brightness-[0.4]'
        }`}
        alt={weather.weather[0].main}
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
      />
      {/* <p className="col-start-1 text-center text-7xl">&#9729;</p> */}
      <h2 className="col-span-full text-center text-4xl">
        {name}, {sys?.country}
      </h2>
      <div className="col-[1_/_3]">
        <p>Sunrise: {sunrise}</p>
        <p>Sunset: {sunset}</p>
      </div>
      <div className="col-[3_/_-1]">
        <p className="text-end">
          Min: {temp.temp_min}
          <sup>o</sup>
          {unit === 'celcius' ? 'C' : 'F'}
        </p>
        <p className="text-end">
          Max: {temp.temp_max}
          <sup>o</sup>
          {unit === 'celcius' ? 'C' : 'F'}
        </p>
      </div>
      <p className="col-span-full text-center">
        {date} | {time}
      </p>
    </div>
  );
}
