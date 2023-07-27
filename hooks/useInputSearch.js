import { fetchLocation } from "@/utils/features";
import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
import useStore from "./useStore";

export default function useInputSearch(initialValue) {
  const { setSearchResult } = useStore();
  const [value, setValue] = useState(initialValue);
  const searchResult = useDebounce(value.trim(), fetchLocation);

  useEffect(() => {
    setSearchResult(searchResult);
  }, [searchResult]);

  function handleChange(e) {
    typeof e === "string" ? setValue("") : setValue(e.target.value);
  }

  const inputProps = {
    value,
    onChange: handleChange,
  };

  return inputProps;
}
