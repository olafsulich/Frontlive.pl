import { useEffect, useRef, useCallback } from 'react';
import { randomNumber } from './randomNumber';

export const useRandomInterval = (
  callback: () => void,
  minDelay: number | null,
  maxDelay: number | null,
) => {
  const timeoutId = useRef<null | number>(null);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (typeof minDelay === 'number' && typeof maxDelay === 'number') {
      const handleTick = () => {
        const nextTickAt = randomNumber(minDelay, maxDelay);
        timeoutId.current = window.setTimeout(() => {
          savedCallback.current();
          handleTick();
        }, nextTickAt);
      };
      handleTick();
    }
    return () => {
      if (typeof timeoutId.current === 'number') {
        window.clearTimeout(timeoutId.current);
      }
    };
  }, [minDelay, maxDelay]);

  const cancel = useCallback(() => {
    if (typeof timeoutId.current === 'number') {
      window.clearTimeout(timeoutId.current);
    }
  }, []);

  return cancel;
};
