import { debounce, fetchLocation } from "@/utils/features";
import { useState } from "react";

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const debouncedSearch = debounce((text) => {
    console.log(text);
  }, 2000);

  function handleChange(e) {
    setValue(e.target.value);
    debouncedSearch(e.target.value);
  }

  const inputProps = {
    value,
    onChange: handleChange,
  };

  return inputProps;
}
