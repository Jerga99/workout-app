
import { useState } from "react";
import { View, Text, Modal as DefaultModal, StyleSheet } from "react-native";
import { PressableText } from "./PressableText";


export function Modal({
  activator: Activator
}: any) {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <DefaultModal
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
      </DefaultModal>
      { Activator ?
        <Activator /> :
        <PressableText
          onPress={() => setModalVisible(true)}
          text="Open"
        />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
