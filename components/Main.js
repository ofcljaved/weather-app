'use client';
import EarthCanvas from '@/components/EarthCanvas';
import SearchDialog from '@/components/SearchDialog';
import SearchFooter from '@/components/SearchFooter';
import WeatherContent from '@/components/WeatherContent';

export default function Main({ weather, children }) {
  return (
    <>
      <main className="grid grid-cols-2 w-full justify-self-center justify-items-center lg:justify-items-end">
        {weather ? <WeatherContent weather={weather} /> : children}
        <EarthCanvas />
      </main>
      <SearchDialog>
        <SearchFooter />
      </SearchDialog>
    </>
  );
}
