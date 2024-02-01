import { useEffect, useMemo } from "react";
import { useLatest } from "./useLatest";

export function useResizeObserver(fn: ResizeObserverCallback) {
  const memoizedFn = useLatest(fn);

  const resizeObserver = useMemo(
    () =>
      new ResizeObserver((entries, observer) => {
        memoizedFn.current.apply(entries, observer);
      }),
    [memoizedFn]
  );

  useEffect(() => () => resizeObserver.disconnect(), []);

  return resizeObserver;
}
