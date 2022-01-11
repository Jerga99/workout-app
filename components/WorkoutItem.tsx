
import { View, Text } from "react-native";
import { Workout } from "../types/data";

export default function WorkoutItem({item}: {item: Workout}) {
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.difficulty}</Text>
    </View>
  )
}

