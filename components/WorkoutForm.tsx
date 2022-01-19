
import { View, Text, StyleSheet } from "react-native";

export default function WorkoutForm() {

  return (
    <View style={styles.container}>
      <Text>
        Exercise Form
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10
  }
})
