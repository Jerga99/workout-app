
import { useEffect } from "react";
import { View, Text, Button } from "react-native";

export default function PlannerScreen({navigation}: any) {

  useEffect(() => {
    console.log("Rending Planner Screen");
  }, [])

  return (
    <View>
      <Text>I am planner screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.push("Home")}
      />
    </View>
  )
}
