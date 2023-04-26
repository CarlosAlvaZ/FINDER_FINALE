import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import DESIGN_VARS from '../MainDesignVariables'

export default function AddButton({children, onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={styles.children}>
            {children}
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button : {
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : DESIGN_VARS.MAIN_COLOR,
        width : 50,
        height : 50,
        borderRadius : 50,
        padding : 8,
    },
    children : {
        width : 20,
        height : 20,
    }
})