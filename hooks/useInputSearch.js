import { fetchLocation } from "@/utils/features";
import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
import useKeyNavigation from "./useKeyNavigation";

export default function useInputSearch(initialValue) {
  const [value, setValue] = useState(initialValue);
  const searchResult = useDebounce(value.trim(), fetchLocation);
  const { selected, onKeyDown, setSelected, parentRef } =
    useKeyNavigation(searchResult);

  function handleChange(e) {
    typeof e === "string" ? setValue("") : setValue(e.target.value);
  }
  useEffect(() => {
    setSelected(0);
  }, [searchResult]);

  const inputProps = {
    value,
    onChange: handleChange,
    searchResult,
    selected,
    onKeyDown,
    parentRef,
  };

  return inputProps;
}
