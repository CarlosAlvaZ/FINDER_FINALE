import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import HomeCardNavigation from './src/navigation/HomeCardNavigation'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light'/>
      <StackNavigation/>
    </NavigationContainer>
  );
}
