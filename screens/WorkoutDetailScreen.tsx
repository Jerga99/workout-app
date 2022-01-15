
import { View, Text, StyleSheet } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
import { Modal } from "../components/styled/Modal";
import { PressableText } from "../components/styled/PressableText";

type DetailParams = {
  route: {
    params: {
      slug: string
    }
  }
}

type Navigation = NativeStackHeaderProps & DetailParams

export default function WorkoutDetailScreen({route}: Navigation) {
  const workout = useWorkoutBySlug(route.params.slug);

  if (!workout) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{workout.name}</Text>
      <Modal
        activator={() =>
          <PressableText
            onPress={() => {alert("Opening")}}
            text="Check Sequence"
          />
        }
      />

      <Modal />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold"
  }
})
