
import { View, Text, StyleSheet } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

type DetailParams = {
  route: {
    params: {
      slug: string
    }
  }
}

type Navigation = NativeStackHeaderProps & DetailParams

export default function WorkoutDetailScreen({route}: Navigation) {

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Slug - {route.params.slug}</Text>
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
