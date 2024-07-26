import { useEffect, useState } from "react";

type Value = number | string | null;

const useDebounce = (value: Value, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<Value>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};
export default useDebounce;
