import { useEffect, useState } from 'react';

export const useLocalStorage = (key: string, initialValue: any = null) => {
  const [value, setValue] = useState(() => {
    try {
      const localValue = localStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    const stringifiedValue = JSON.stringify(value);
    localStorage.setItem(key, stringifiedValue);
  }, [key, value]);

  return [value, setValue];
};
