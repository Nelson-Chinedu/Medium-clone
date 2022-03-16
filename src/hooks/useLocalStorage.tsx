import { useState, useEffect } from 'react';

const useLocalStorage = (key: string) => {
  const [value, setValue] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem(key);

      try {
        const parsedValue = JSON.parse(storedValue);
        return parsedValue;
      } catch (error) {
        return storedValue;
      }
    }
  });

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (value !== null) {
        const stringifiedValue = JSON.stringify(value);
        localStorage.setItem(key, stringifiedValue);
      }
    }
    return () => {
      isMounted = false;
    };
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
