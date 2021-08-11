import { useState, useCallback } from 'react';

export const useToggle = (initialOn = false) => {
  const [on, setOn] = useState(initialOn);
  const toggle = useCallback(() => {
    setOn((on) => !on);
  }, []);

  const off = useCallback(() => {
    setOn(false);
  }, []);

  return [on, toggle, off] as const;
};
