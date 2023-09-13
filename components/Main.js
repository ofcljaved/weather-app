'use client';
import EarthCanvas from '@/components/EarthCanvas';
import WeatherContent from '@/components/WeatherContent';
import SearchDialog from '@/components/SearchDialog';
import SearchFooter from '@/components/SearchFooter';
import useGeoLocation from '@/hooks/useGeoLocation';

export default function Main({ weather, children }) {
  // const position = useGeoLocation();
  return (
    <>
      <main className="grid grid-cols-2 w-full lg:w-fit justify-self-center justify-items-center lg:justify-items-start">
        {weather ? <WeatherContent weather={weather} /> : children}
        {/* <EarthCanvas />  */}
      </main>
      <SearchDialog>
        <SearchFooter />
      </SearchDialog>
    </>
  );
}
