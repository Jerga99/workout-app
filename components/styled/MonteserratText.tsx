
import { Text } from "react-native";

export function MontserratText({children}: {children: any}) {

  return (
    <Text style={{fontFamily: "montserrat"}}>
      {children}
    </Text>
  )
}
