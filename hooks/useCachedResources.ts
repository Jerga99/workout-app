
import { useEffect, useState } from "react";


export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    function loadResourcesAndDataAsync() {
      setTimeout(() => {
        setIsLoadingComplete(true)
      }, 3000)
    }

    loadResourcesAndDataAsync();
  }, [])

  return isLoadingComplete;
}
