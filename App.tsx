import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import Navigation from "./navigation"

export default function App() {
  const isLoaded = useCachedResources();
  const colorScheme = useColorScheme();

  if (isLoaded) {
    return (
      <>
        <Navigation colorScheme={colorScheme} />
        <StatusBar style="auto" />
      </>
    );
  } else {
    return null;
  }
}
