import { useInsertionEffect, useRef } from "react";

function useLatest<T>(value: T) {
  const valueRef = useRef(value);

  useInsertionEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef;
}

export { useLatest };
