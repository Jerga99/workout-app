
import { useEffect } from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({navigation}: any) {

  useEffect(() => {
    console.log("Rending Home Screen");
  }, [])

  return (
    <View>
      <Text>I am home screen</Text>
      <Button
        title="Go to Planner"
        onPress={() => navigation.navigate("Planner") }
      />
    </View>
  )
}
