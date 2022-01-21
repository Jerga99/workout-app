import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import Navigation from "./navigation"

export default function App() {
  const isLoaded = useCachedResources();
  const theme = useColorScheme();

  console.log(theme);

  if (isLoaded) {
    return (
      <>
        <Navigation />
        <StatusBar style="auto" />
      </>
    );
  } else {
    return null;
  }
}
