"use client";
import EarthCanvas from "@/components/EarthCanvas";
import WeatherContent from "@/components/WeatherContent";
import SearchDialog from "@/components/SearchDialog";
import SearchFooter from "@/components/SearchFooter";
import useGeoLocation from "@/hooks/useGeoLocation";

export default function Main({ children }) {
  const position = useGeoLocation();
  return (
    <>
      <main className="grid grid-cols-2 w-fit justify-self-center">
        {position ? <WeatherContent /> : children}
        {/* <EarthCanvas />  */}
      </main>
      <SearchDialog>
        <SearchFooter />
      </SearchDialog>
    </>
  );
}
