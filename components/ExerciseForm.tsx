
import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { PressableText } from "./styled/PressableText";

export type ExerciseFormData = {
  name: string,
  duration: string,
  type: string,
  reps?: string
}

type WorkoutProps = {
  onSubmit: (form: ExerciseFormData) => void
}

const selectionItems = ["exercise", "break", "stretch"]

export default function ExerciseForm({
  onSubmit
}: WorkoutProps) {
  const { control, handleSubmit } = useForm();
  const [ isSelectionOn, setSelectionOn ] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.rowContainer}>
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
                placeholderTextColor={"rgba(0,0,0,0.4)"}
                placeholder="Name"
              />
            }
          />
          <Controller
            control={control}
            rules={{
              required: true
            }}
            name="duration"
            render={({ field: {onChange, value}}) =>
              <TextInput
                onChangeText={onChange}
                value={value}
                style={styles.input}
                placeholderTextColor={"rgba(0,0,0,0.4)"}
                placeholder="Duration"
              />
            }
          />
        </View>
        <View style={styles.rowContainer}>
          <Controller
            control={control}
            name="reps"
            render={({ field: {onChange, value}}) =>
              <TextInput
                onChangeText={onChange}
                value={value}
                style={styles.input}
                placeholderTextColor={"rgba(0,0,0,0.4)"}
                placeholder="Repetitions"
              />
            }
          />
          <Controller
            control={control}
            rules={{
              required: true
            }}
            name="type"
            render={({ field: {onChange, value}}) =>
              <View style={{flex: 1}}>
                { isSelectionOn ?
                  <View>
                    { selectionItems.map(selection =>
                      <PressableText
                        key={selection}
                        style={styles.selection}
                        text={selection}
                        onPressIn={() => {
                          onChange(selection)
                          setSelectionOn(false)}
                        }
                      />
                    )}
                  </View> :
                  <TextInput
                    onPressIn={() => setSelectionOn(true)}
                    style={styles.input}
                    value={value}
                    placeholderTextColor={"rgba(0,0,0,0.4)"}
                    placeholder="Type"
                  />
                }
              </View>
            }
          />
        </View>
        <PressableText
          style={{marginTop: 10}}
          text="Add Exercise"
          onPress={handleSubmit((data) => {
            onSubmit(data as ExerciseFormData);
          })}
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
    flex: 1,
    margin: 2,
    borderWidth: 1,
    height: 30,
    padding: 5,
    borderRadius: 5,
    borderColor: "rgba(0,0,0, 0.4)",
  },
  rowContainer: {
    flexDirection: "row"
  },
  selection: {
    margin: 2,
    padding: 3,
    alignSelf: "center"
  }
})
