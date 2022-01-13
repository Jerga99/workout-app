import { useEffect, useState } from "react";
import { getWorkouts } from "../storage/workout";
import { Workout } from "../types/data";

export const useWorkouts = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    async function getData() {
      const _workouts = await getWorkouts();
      setWorkouts(_workouts);
    }

    getData();
  }, [])

  return workouts;
}
