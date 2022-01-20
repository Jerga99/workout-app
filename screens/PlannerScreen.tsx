
import { View, StyleSheet } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import ExerciseForm, { ExerciseFormData } from "../components/ExerciseForm";
import { SequenceItem, SequenceType } from "../types/data";

export default function PlannerScreen({navigation}: NativeStackHeaderProps) {

  const handleFormSubmit = (form: ExerciseFormData) => {
    const sequenceItem: SequenceItem = {
      slug: form.name + Date.now(),
      name: form.name,
      type: form.type as SequenceType,
      duration: Number(form.duration)
    };

    if (form.reps) {
      sequenceItem.reps = Number(form.reps)
    }

    console.log(sequenceItem);
  }

  return (
    <View style={styles.container}>
      <ExerciseForm
        onSubmit={handleFormSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
})
