"use client";
import EarthCanvas from "@/components/EarthCanvas";
import WeatherContent from "@/components/WeatherContent";
import SearchDialog from "@/components/SearchDialog";
import SearchInput from "@/components/SearchInput";
import SearchFooter from "@/components/SearchFooter";
import SearchContent from "@/components/SearchContent";
import useGeoLocation from "@/hooks/useGeoLocation";
import useDialog from "@/hooks/useDialog";
import useInputSearch from "@/hooks/useInputSearch";
import useKeyNavigation from "@/hooks/useKeyNavigation";
import { updateUrlParams } from "@/utils/features";
import { useRouter } from "next/navigation";

export default function Main({ children }) {
  const position = useGeoLocation();
  const dialog = useDialog();
  const { value, onChange, searchResult } = useInputSearch("");
  const { selected, onKeyDown, parentRef } = useKeyNavigation(
    searchResult,
    dialog
  );

  const router = useRouter();

  const handleClick = () => {
    dialog.current.close();
    const pathname = updateUrlParams(searchResult.result[selected]);
    router.push(pathname);
  };
  return (
    <>
      <main className="grid grid-cols-2 w-fit justify-self-center">
        {position ? <WeatherContent /> : children}
        {/* <EarthCanvas />  */}
      </main>
      <SearchDialog dialogRef={dialog}>
        <SearchInput value={value} onChange={onChange} onKeyDown={onKeyDown} />
        <SearchContent
          content={searchResult}
          selected={selected}
          parentRef={parentRef}
          onClick={handleClick}
        />
        <SearchFooter />
      </SearchDialog>
    </>
  );
}
