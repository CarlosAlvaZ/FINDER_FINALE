import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DESING_VARS from '../MainDesignVariables'
// Screens
import Home from '../screens/Home'
import MainView from '../screens/MainView'
import Search from '../screens/Search'
import Add from '../screens/Add'
import Chat from '../screens/Chat'
import Profile from '../screens/Profile'
// Components
import AddButton from '../components/AddButton'
import ProfileImage from '../components/ProfileImage'
import fetchUserData from '../components/fetchUserData'


// Tab Navigator
const Tab = createBottomTabNavigator()

const userDataSource = '../provisionalData/provisionalProfile.json'

export default function MainNavigation() {

    const [ userData, setUserData ] = useState({})

    useEffect(()=>{
        const data = require(userDataSource)
        setUserData(data.user)
    }, [])

  return (
    <Tab.Navigator initialRouteName='Home'
        screenOptions={ ({route}) => ({
            headerShown : false,
            tabBarStyle : {
                backgroundColor : '#000',
                height : 80,
                paddingBottom : 24,
                paddingTop : 4,
            },
            tabBarIcon : ({focused}) => {
                if ( route.name == 'Home' ) {
                    return <Image source={require('../../assets/Icons/homeIcon.png')} style={ { width : 20, height : 20, tintColor : focused ? DESING_VARS.MAIN_COLOR : DESING_VARS.CLEAR} }/>
                } else if ( route.name == 'Search' ) {
                    return <Image source={require('../../assets/Icons/searchIcon.png')} style={ { width : 20, height : 20, tintColor : focused ? DESING_VARS.MAIN_COLOR : DESING_VARS.CLEAR} }/>
                } else if ( route.name == 'Chat' ) {
                    return <Image source={require('../../assets/Icons/chatIcon.png')} style={ { width : 20, height : 20, tintColor : focused ? DESING_VARS.MAIN_COLOR : DESING_VARS.CLEAR} }/>
                }
            }
        }) }    
    >
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Search' component={Search}/>
        <Tab.Screen name='Add'  component={Add} options={{
            tabBarIcon : ()=><Image source={require('../../assets/Icons/addIcon.png')} />,
            tabBarButton : props => <AddButton {...props} />,
            tabBarLabel : () => null
        }}/>
        <Tab.Screen name='Chat' component={Chat}/>
        <Tab.Screen name='Profile' component={Profile} options={{
            tabBarIcon : () => <ProfileImage image={userData.profile_image} />
        }}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})