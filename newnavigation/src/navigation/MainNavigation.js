import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DESING_VARS from '../MainDesignVariables'
// Screens
import Search from '../screens/Search'
import Add from '../screens/Add'
import Profile from '../screens/Profile'
// Components
import AddButton from '../components/AddButton'
import ProfileImage from '../components/ProfileImage'
import Feed from '../screens/Feed'
import Info from '../screens/Info'


// Tab Navigator
const Tab = createBottomTabNavigator()

// Ubicación de los datos provisionales
const userDataSource = '../provisionalData/provisionalProfile.json'

// Navegación principal de tab bar
export default function MainNavigation() {

    const [ userData, setUserData ] = useState({})

    useEffect(()=>{
        const data = require(userDataSource)
        setUserData(data.user)
    }, [])

  return (
    <Tab.Navigator initialRouteName='Feed'
        screenOptions={ ({route}) => ({
            headerShown : false,
            tabBarStyle : {
                backgroundColor : '#000',
                height : 80,
                paddingBottom : 24,
                paddingTop : 5,
                display : 'flex'
            },
            tabBarIcon : ({focused}) => {
                // Se recibe el nombre de la ruta actual y el estado (focused).
                // Si la ruta es igual a la evaluada, se devuelve un icono con el tint azul,
                // de otra forma se devuelve con un tint blanco.
                if ( route.name == 'Feed' ) {
                    return <Image source={require('../../assets/Icons/homeIcon.png')} style={ { width : 20, height : 20, tintColor : focused ? DESING_VARS.MAIN_COLOR : DESING_VARS.CLEAR} }/>
                } else if ( route.name == 'Search' ) {
                    return <Image source={require('../../assets/Icons/searchIcon.png')} style={ { width : 20, height : 20, tintColor : focused ? DESING_VARS.MAIN_COLOR : DESING_VARS.CLEAR} }/>
                } else if ( route.name == 'Info' ) {
                    return <Image source={require('../../assets/Icons/info.png')} style={ { width : 20, height : 20, tintColor : focused ? DESING_VARS.MAIN_COLOR : DESING_VARS.CLEAR} }/>
                }
            }
        }) }    
    >
        <Tab.Screen name='Feed' component={Feed}/>
        <Tab.Screen name='Search' component={Search}/>
        <Tab.Screen name='Add'  component={Add} options={{
            // Icono de más
            tabBarIcon : ()=><Image source={require('../../assets/Icons/addIcon.png')} />,
            // Boton creado para tener el estilo definido en los mockups.
            tabBarButton : props => <AddButton {...props} />,
            tabBarLabel : () => null
        }}/>
        <Tab.Screen name='Info' component={Info}/>
        <Tab.Screen name='Profile' component={Profile} options={{
            // Icono con la imagen del perfil de usuario.
            tabBarIcon : () => <ProfileImage image={userData.profile_image} />
        }}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})