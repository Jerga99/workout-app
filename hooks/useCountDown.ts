import { useState, useEffect } from "react";

export function useCountDown(
  idx: number,
  initialCount: number
) {
  const [countDown, setCountDown] = useState(initialCount);

  useEffect(() => {
    if (idx == -1) { return; }

    const intervalId = window.setInterval(() => {
      setCountDown((count) => {
        console.log(count);
        return count - 1;
      })
    }, 100)

    return () => window.clearInterval(intervalId)
  }, [idx])

  useEffect(() => {
    setCountDown(initialCount);
  }, [initialCount])

  return countDown;
}
