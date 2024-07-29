import { useEffect, useState } from "react";

function useStorage(key: string) {
  const [error, setError] = useState("");

  const setItem = (value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getItem = () => {
    const value = localStorage.getItem(key);
    if (!value) {
      return undefined;
    }

    return value;
  };

  const removeItem = () => {
    localStorage.removeItem(key);
  };

  useEffect(() => {
    if (!window.localStorage) {
      return setError("LocalStorage not available");
    }

    return () => {
      setError("");
    };
  }, []);

  return { error, setItem, getItem, removeItem };
}

export default useStorage;
