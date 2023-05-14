import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
// Screens
import Login from '../screens/Login'
import RegisterStack from './RegisterStack'
import HomeCardNavigation from './HomeCardNavigation'

const Stack = createStackNavigator()

export default function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown : false }}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={RegisterStack} />
        <Stack.Screen name='Main' component={HomeCardNavigation}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})