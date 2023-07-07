import { fetchLocation } from "@/utils/features";
import { useState } from "react";
import { useDebounce } from "./useDebounce";

export default function useInput(initialValue) {
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
