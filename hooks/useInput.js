import { debounce, fetchLocation } from "@/utils/features";
import { useState } from "react";

const debouncedSearch = debounce(fetchLocation);

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  async function handleChange(e) {
    if (typeof e === "string") {
      setValue("");
    } else {
      setValue(e.target.value);
      const searchResult = await debouncedSearch(e.target.value.trim());
      console.log(searchResult);
    }
  }

  const inputProps = {
    value,
    onChange: handleChange,
  };

  return inputProps;
}
