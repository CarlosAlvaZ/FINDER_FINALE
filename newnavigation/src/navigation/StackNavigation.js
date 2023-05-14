import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
// Screens
import Login from '../screens/Login'
import MainNavigation from './MainNavigation'
import RegisterStack from './RegisterStack'

const Stack = createStackNavigator()

export default function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown : false }}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={RegisterStack} />
        <Stack.Screen name='Main' component={MainNavigation}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})