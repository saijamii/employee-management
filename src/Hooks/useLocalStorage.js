import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== undefined && item !== null && item !== ""
        ? JSON.parse(item)
        : initialValue;
    } catch (error) {
      console.error("Error retrieving data from local storage:", error);
      return initialValue;
    }
  });

  console.log(storedValue, "storedValue");

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error saving data to local storage:", error);
    }
  }, [storedValue, key]);

  return [storedValue, setStoredValue];
}
