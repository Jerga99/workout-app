
import { Text, useColorScheme } from "react-native";
import { PressableText, PressableTextProps } from "./PressableText";


export function PressableThemeText(props: PressableTextProps) {

  const colorScheme = useColorScheme();
  const color = colorScheme === "light" ? "#000" : "#fff";

  return (
    <PressableText
      {...props}
      style={[props.style, { color }]}
    />
  )
}
