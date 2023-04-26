import { StyleSheet, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'

export default function ProfleImage({image}) {
    return (
        <View style={styles.button}>
            <Image source={{uri : image}} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    button : {
        alignContent : 'center',
        justifyContent : 'center',
        width : 30,
        height : 30,
        borderRadius : 50,
        overflow : 'hidden'
    },
    image : {
        width : '100%',
        height : '100%'
    }
})