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
    <div className="col-span-full lg:col-auto row-[1/3] lg:row-auto grid gap-y-5 gap-x-3 xl:gap-8 grid-cols-4 grid-flow-dense font-medium text-lg xl:text-xl text-[--tertiary-text] bg-[--glass-bg] self-start lg:self-center px-6 xl:px-12 py-5 lg:py-8 xl:py-14 rounded-3xl w-fit tracking-wider mt-10 lg:mt-0 z-10">
      <h1 className="col-span-full row-auto lg:col-[2_/_-1] text-center text-6xl lg:text-5xl xl:text-7xl mt-auto">
        {temp.temp}
        <sup>o</sup>
        {unit === 'celcius' ? 'C' : 'F'}|
        <span className="cursor-pointer select-none" onClick={handleUnitChange}>
          {unit === 'celcius' ? 'F' : 'C'}
        </span>
      </h1>
      <img
        className={`hidden lg:block col-span-1 text-center justify-self-auto my-auto max-w-[6rem] ${
          weather.weather[0].icon.includes('n') &&
          'invert-[0.7] brightness-[0.4]'
        }`}
        alt={weather.weather[0].main}
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
      />
      <h2 className="col-span-full text-center text-4xl">
        {name}, {sys?.country}
      </h2>
      <div className="col-[1_/_4] row-start-4">
        <p>Sunrise: {sunrise}</p>
        <p>Sunset: {sunset}</p>
      </div>
      <div className="col-[3_/_-1] row-start-4">
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
      <p className="col-span-full text-center mt-2.5 lg:mt-auto">
        {date} | {time}
      </p>
    </div>
  );
}
