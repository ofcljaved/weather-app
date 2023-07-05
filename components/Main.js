"use client";
import EarthCanvas from "@/components/EarthCanvas";
import WeatherContent from "@/components/WeatherContent";
import SearchDialog from "@/components/SearchDialog";
import SearchInput from "@/components/SearchInput";
import SearchFooter from "@/components/SearchFooter";
import SearchContent from "@/components/SearchContent";
import useGeoLocation from "@/hooks/useGeoLocation";
import useInput from "@/hooks/useInput";

export default function Main({ children }) {
  const position = useGeoLocation();
  const { value, onChange, searchResult } = useInput("");

  return (
    <>
      <main className="grid grid-cols-2 w-fit justify-self-center">
        {position ? <WeatherContent /> : children}
        {/* <EarthCanvas />  */}
      </main>
      <SearchDialog>
        <SearchInput value={value} onChange={onChange} />
        <SearchContent content={searchResult} />
        <SearchFooter />
      </SearchDialog>
    </>
  );
}
