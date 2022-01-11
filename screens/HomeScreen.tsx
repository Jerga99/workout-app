
import { View, Text, StyleSheet, FlatList } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import data from "../data.json";

export default function HomeScreen({navigation}: NativeStackHeaderProps) {

  const renderItem = ({item}: {item: any}) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.difficulty}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      {/* <Text>I am home screen</Text> */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.slug}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})
