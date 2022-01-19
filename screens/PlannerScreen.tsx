
import { View, StyleSheet } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import WorkoutForm from "../components/WorkoutForm";

export default function PlannerScreen({navigation}: NativeStackHeaderProps) {

  return (
    <View style={styles.container}>
      <WorkoutForm />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
})
