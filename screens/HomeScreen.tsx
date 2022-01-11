
import { View, Text, StyleSheet } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import data from "../data.json";

export default function HomeScreen({navigation}: NativeStackHeaderProps) {

  return (
    <View style={styles.container}>
      <Text>I am home screen</Text>
      <Text>{ JSON.stringify(data) }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})
