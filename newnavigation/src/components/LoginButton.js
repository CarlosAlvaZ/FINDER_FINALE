import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../MainDesignVariables'

export default function LoginButton({content, action}) {
  return (
    <TouchableOpacity style={styles.button} onPress={action}>
        <Text style={styles.text}>
            {content}
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button : {
        backgroundColor : COLORS.SCREEN_COLOR,
        padding : 20,
        width : '100%',
        borderRadius : 5
    },
    text : {
        color : 'white',
        fontSize : 20,
        fontWeight : 500,
        textAlign : 'center'
    }
})