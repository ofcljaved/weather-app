import { debounce, fetchLocation } from "@/utils/features";
import { useState } from "react";

const debouncedSearch = debounce((text) => {
  console.log(text);
});

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    if (typeof e === "string") {
      setValue("");
    } else {
      setValue(e.target.value);
      debouncedSearch(e.target.value);
    }
  }

  const inputProps = {
    value,
    onChange: handleChange,
  };

  return inputProps;
}