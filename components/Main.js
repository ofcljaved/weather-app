"use client";
import EarthCanvas from "@/components/EarthCanvas";
import WeatherContent from "@/components/WeatherContent";
import SearchDialog from "@/components/SearchDialog";
import SearchInput from "@/components/SearchInput";
import SearchFooter from "@/components/SearchFooter";
import SearchContent from "@/components/SearchContent";
import useGeoLocation from "@/hooks/useGeoLocation";
import useInputSearch from "@/hooks/useInputSearch";

export default function Main({ children }) {
  const position = useGeoLocation();
  const { value, onChange, searchResult, selected, onKeyDown, parentRef } =
    useInputSearch("");

  return (
    <>
      <main className="grid grid-cols-2 w-fit justify-self-center">
        {position ? <WeatherContent /> : children}
        {/* <EarthCanvas />  */}
      </main>
      <SearchDialog>
        <SearchInput value={value} onChange={onChange} onKeyDown={onKeyDown} />
        <SearchContent
          content={searchResult}
          selected={selected}
          parentRef={parentRef}
        />
        <SearchFooter />
      </SearchDialog>
    </>
  );
}
