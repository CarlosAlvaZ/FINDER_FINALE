import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import RegisterStep1 from '../screens/RegisterStep1'
import RegisterStep2 from '../screens/RegisterStep2'

const Stack = createStackNavigator()

export default function RegisterStack() {
  return (
    <Stack.Navigator initialRouteName='RegisterStep1' screenOptions={{ headerShown : false }}>
        <Stack.Screen name='RegisterStep1' component={RegisterStep1}/>
        <Stack.Screen name='RegisterStep2' component={RegisterStep2} />
    </Stack.Navigator>    
  )
}