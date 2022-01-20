
import { useState } from "react";
import slugify from "slugify";
import { View, StyleSheet, FlatList } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import ExerciseForm, { ExerciseFormData } from "../components/ExerciseForm";
import ExerciseItem from "../components/ExerciseItem";
import { SequenceItem, SequenceType } from "../types/data";

export default function PlannerScreen({navigation}: NativeStackHeaderProps) {
  const [seqItems, setSeqItems] = useState<SequenceItem[]>([]);

  const handleFormSubmit = (form: ExerciseFormData) => {
    const sequenceItem: SequenceItem = {
      slug: slugify(form.name + " " + Date.now(), {lower: true}),
      name: form.name,
      type: form.type as SequenceType,
      duration: Number(form.duration)
    };

    if (form.reps) {
      sequenceItem.reps = Number(form.reps)
    }

    setSeqItems([...seqItems, sequenceItem]);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={seqItems}
        renderItem={ExerciseItem}
        keyExtractor={item => item.slug}
      />
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
