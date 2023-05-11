import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import cancel from '../../assets/Icons/cancelIcon.png'
import chat from '../../assets/Icons/chatIcon.png'
import like from '../../assets/Icons/likeIcon.png'

export default function MainViewButtons({swiperRef}) {
  return (
    <View style={styles.mainView}>
        <TouchableOpacity style={styles.button} onPress={() => {swiperRef.current.swipeLeft()}}>
            <Image style={styles.cancel} source={cancel}/>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.button, backgroundColor : '#0085E6'}} onPress={() => {swiperRef.current.swipeTop()}}>
            <Image style={styles.chat} source={chat}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {swiperRef.current.swipeRight()}}>
            <Image style={styles.like} source={like}/>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    mainView : {
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
        position : 'absolute',
        bottom : '5%',
        left : 0
    },
    button : {
        padding : 0,
        margin : 15,
        width : 60,
        height : 60,
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 50,
        backgroundColor : '#D9D9D9'
    },
})