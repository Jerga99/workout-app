import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
// import HomeScreen from './screens/HomeScreen';
import PlannerScreen from './screens/PlannerScreen';

export default function App() {
  return (
    <View>
      {/* <HomeScreen /> */}
      <PlannerScreen />
      <StatusBar style="auto" />
    </View>
  );
}
