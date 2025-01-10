import { useCallback, useEffect, useRef } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Timeout } from '@tanstack/react-router/dist/cjs/utils';

const useDebounceHandler = (callback: (params: string | number) => void, delay: number) => {
  const timeoutRef = useRef<Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback = useCallback(
    (params: string | number) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callback(params);
      }, delay);
    },
    [callback, delay],
  );

  return debouncedCallback;
};

export default useDebounceHandler;
