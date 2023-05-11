import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
// screens
import MainView from '../screens/MainView'
import MainNavigation from './MainNavigation'

const Stack = createStackNavigator()

export default function HomeCardNavigation() {
  return (
    <Stack.Navigator initialRouteName='MainNavigation' screenOptions={{ headerShown : false }}>
        <Stack.Screen name='MainNavigation' component={MainNavigation} />
        <Stack.Screen name='MainView' component={MainView} />
    </Stack.Navigator>
  )
}