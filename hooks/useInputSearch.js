import { fetchLocation } from "@/utils/features";
import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
import useKeyNavigation from "./useKeyNavigation";

export default function useInputSearch(initialValue) {
  const [value, setValue] = useState(initialValue);
  const searchResult = useDebounce(value.trim(), fetchLocation);

  function handleChange(e) {
    typeof e === "string" ? setValue("") : setValue(e.target.value);
  }

  const inputProps = {
    value,
    onChange: handleChange,
    searchResult,
  };

  return inputProps;
}
