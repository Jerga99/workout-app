
import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { PressableText } from "./styled/PressableText";

export type ExerciseForm = {
  name: string,
  duration: string
}

type WorkoutProps = {
  onSubmit: (form: ExerciseForm) => void
}

export default function WorkoutForm({
  onSubmit
}: WorkoutProps) {

  const [form, setForm] = useState({
    name: "",
    duration: ""
  })

  const onChangeText = (name: string) => (text: string) => {
    setForm({
      ...form,
      [name]: text
    })
  }

  return (
    <View style={styles.container}>
      <Text>
        Exercise Form
      </Text>
      <View>
        <TextInput
          onChangeText={onChangeText("name")}
          value={form.name}
          style={styles.input}
        />
        <TextInput
          onChangeText={onChangeText("duration")}
          value={form.duration}
          style={styles.input}
        />
        <PressableText
          text="Submit"
          onPress={() => onSubmit(form)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})
