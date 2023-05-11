import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
// Screens
import Login from '../screens/Login'
import MainNavigation from './MainNavigation'

const Stack = createStackNavigator()

export default function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName='Main' screenOptions={{ headerShown : false }}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Main' component={MainNavigation}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})