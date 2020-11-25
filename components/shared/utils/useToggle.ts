import { useState, useCallback } from 'react';

const useToggle = (initialOn = false) => {
  const [on, setOn] = useState(initialOn);
  const toggle = useCallback(() => {
    setOn((on) => !on);
  }, []);

  const off = useCallback(() => {
    setOn(false);
  }, []);

  return [on, toggle, off] as const;
};

export default useToggle;
