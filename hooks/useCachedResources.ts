
import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { getData, storeData, containsKey } from "../storage";
import data from "../data.json";

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        const hasWorkouts = await containsKey("workout-data");
        if (!hasWorkouts) {
          console.log("Storing data")
          await storeData("workout-data", data);
        }
        await Font.loadAsync({
          "montserrat": require("../assets/fonts/Montserrat-Regular.ttf"),
          "montserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf"),
        })
      } catch (e) {
        console.warn(e);
      } finally {
        const workouts = await getData("workout-data");
        console.log(workouts);
        setIsLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, [])

  return isLoadingComplete;
}
