
import { useState } from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
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
  const [isModalVisible, setModalVisible] = useState(false);
  const workout = useWorkoutBySlug(route.params.slug);

  if (!workout) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{workout.name}</Text>
      <PressableText
        onPress={() => setModalVisible(true)}
        text="Check Sequence"
      />
      <Modal
        visible={isModalVisible}
        transparent={false}
        animationType="fade"
      >
        <View style={styles.centerView}>
          <Text>Hello There!</Text>
          <PressableText
            onPress={() => setModalVisible(false)}
            text="Close"
          />
        </View>
      </Modal>
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
  },
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
