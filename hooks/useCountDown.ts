import { useState, useEffect, useRef } from "react";

export function useCountDown(
  idx: number,
  initialCount: number
) {
  const intervalRef = useRef<number>();
  const [countDown, setCountDown] = useState(initialCount);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (idx == -1) { return; }

    setIsRunning(true);
    intervalRef.current = window.setInterval(() => {
      setCountDown((count) => {
        return count - 1;
      })
    }, 10)

    return cleanup;
  }, [idx])

  useEffect(() => {
    setCountDown(initialCount);
  }, [initialCount])

  useEffect(() => {
    if (countDown === 0) {
      cleanup();
    }
  }, [countDown])

  const cleanup = () => {
    if (intervalRef.current) {
      setIsRunning(false);
      window.clearInterval(intervalRef.current)
      intervalRef.current = undefined
    }
  }

  return {
    countDown,
    isRunning,
    stop: cleanup
  };
}
