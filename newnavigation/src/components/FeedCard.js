import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function FeedCard({user, navigation, height}) {
  return (
    <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate('MainView', {showUserById : user.id})}>
            <Image source={{ uri : user.image }} style={styles.image} />
            <Text style={styles.text}>{user.userName}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    card : {
        maxHeight : 500,
        width : '46%',
        borderRadius : 10,
        overflow : 'hidden',
        marginVertical : 5,
        marginHorizontal : '2%'
    },
    image : {
        minHeight : 250
    }
})