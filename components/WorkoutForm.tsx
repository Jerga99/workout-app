
import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";
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

  const { control } = useForm();

  return (
    <View style={styles.container}>
      <Text>
        Exercise Form
      </Text>
      <View>
        <Controller
          control={control}
          rules={{
            required: true
          }}
          name="name"
          render={({ field: {onChange, value}}) =>
            <TextInput
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          }
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
