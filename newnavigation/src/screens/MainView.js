import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import Card from '../components/Card'
import MainViewButtons from '../components/MainViewButtons'

import { LinearGradient } from 'expo-linear-gradient'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function MainView({ navigation }) {
  
  const swiperRef = useRef(null)
  const [requireNewPubs, setRequireNewPubs] = useState(true)
  const [users, setUsers] = useState([{
    id : 0,
    userName : "",
    userSubtitle : "",
    photoDescription : "",
    image : ""
  }])

  useEffect(() => {
    if (requireNewPubs == true) {
      const fetchedUsers = require('../provisionalData/provisionaPublicationData.json')
      setUsers(fetchedUsers)
      setRequireNewPubs(false)
    }
  }, [requireNewPubs])
  return (
    <>
    <View style={styles.container}>
      
      <View style={styles.backOverlay}>
        <LinearGradient
          style={styles.overlayGradient}
          colors={['black', 'transparent']}
          start={{x : 0, y : 0}}
          end={{ x : 0, y : 1 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('../../assets/Icons/backArrowIcon.png')}/>
            </TouchableOpacity>
        </LinearGradient>
      </View>

      {
        !requireNewPubs &&
        
        <>
        <Swiper
            ref={swiperRef}
            cards={users}
            renderCard={(user) => {
              return (
                  <Card user={user}/>
                )
            }}
            onSwipedLeft={cardIndex => {console.log('Dislike to ', users[cardIndex].id)}}
            onSwipedRight={cardIndex => {console.log('Liked to ', users[cardIndex].id)}}
            onSwipedTop={cardIndex => {console.log('Send Message to ', users[cardIndex].id)}}
            onSwipedAll={() => {setRequireNewPubs(true)}}
            cardIndex={0}
            backgroundColor={'transparent'}
            cardHorizontalMargin={0}
            cardVerticalMargin={0}
            animateCardOpacity
            disableBottomSwipe={true}
            stackSize= {3}>
              <View style={{flex : 1, display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
                <Text style={{ textAlign : 'center', color : 'white', fontSize : 16, fontWeight : 100 }}>Cargando nuevas publicaciones...</Text>
              </View>
            </Swiper>
          <MainViewButtons swiperRef={swiperRef}/>
        </>
        
      }
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  backOverlay : {
    position : 'absolute',
    height : '15%',
    width : '100%',
    left : 0,
    top : 0,
    zIndex : 1,
  },
  overlayGradient : {
    flex : 1,
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    paddingHorizontal : 20
  },
  container: {
    position : 'relative',
    flex: 1,
    backgroundColor: "#1E1E1E"
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "transparent",
    justifyContent: "center",
    backgroundColor: "white"
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  }
})