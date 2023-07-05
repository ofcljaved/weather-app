import { debounce, fetchLocation } from "@/utils/features";
import { useState } from "react";

const debouncedSearch = debounce(fetchLocation);

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const [searchResult, setSearchResult] = useState(null);

  async function handleChange(e) {
    if (typeof e === "string") {
      setValue("");
      return;
    }
    setValue(e.target.value);
    try {
      const result = await debouncedSearch(e.target.value.trim());
      result ? setSearchResult({ result }) : setSearchResult(null);
    } catch (error) {
      console.log(error);
      setSearchResult({ error: error.message });
    }
  }

  const inputProps = {
    value,
    onChange: handleChange,
    searchResult,
  };

  return inputProps;
}
