import { useEffect, useState } from "react";

export function useDebounce(value, func, delay = 500) {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      try {
        const result = await func(value);
        result ? setResult({ result }) : setResult(null);
      } catch (error) {
        setResult({ error: error.message });
      }
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, func, delay]);

  return result;
}
