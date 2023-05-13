import { useEffect, useState } from 'react';

import { AnyObject } from '@domain/utils';

export const useDebounce = (value: AnyObject, delay = 1000): AnyObject => {
  const [debouncedValue, setDebouncedValue] = useState<AnyObject>(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};
