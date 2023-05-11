import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MaskedView from '@react-native-masked-view/masked-view'
import { LinearGradient } from 'expo-linear-gradient'

const { width, height } = Dimensions.get('screen')

export default function Card({user}) {

  const [descriptionDisplayed, setDescriptionDisplayed] = useState(false)

  return (
    <View key={user.id} style={styles.card}>
      <Image source={{uri : user.image}} style={styles.image}/>
      <View style={styles.userData}>
          <Text style={styles.userName}>{user.userName}</Text>
          <Text style={styles.userSubtitle}>{user.userSubtitle}</Text>
          <View style={styles.descriptionView}>
          <MaskedView
                  maskElement={<Text style={styles.description}>{user.photoDescription}</Text>}>    
                  <TouchableOpacity onPress={() => setDescriptionDisplayed(prev => !prev)}>
                      <LinearGradient 
                          colors={['#ffffff', descriptionDisplayed ? '#ffffff' : 'transparent']}
                          start={{x : 0, y : 0}}
                          end={{x : 0, y : 1}} >
                          <Text style={{...styles.description, opacity : 0, height : descriptionDisplayed ? 'auto' : 100}}>{user.photoDescription}</Text>
                      </LinearGradient>
                  </TouchableOpacity>
              </MaskedView>
          </View>
      </View>
  </View>
  )
}

const styles = StyleSheet.create({
  main : {
    flex : 1,
    padding : 2,
    width : width,
    height : height,
    position : 'relative'
  },
  card : {
    width : width,
    height : height,
    padding : 0,
    margin : 0,
  },
  image : {
    width : width,
    height : height,
    position : 'absolute',
    zIndex : 100,
    padding : 0,
  },
  userData : {
    paddingHorizontal : 20,
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'flex-end',
    position : 'absolute',
    width : width,
    height : height / 3,
    bottom : height / 4,
    backgroundColor : 'transparent',
    zIndex : 100
  },
  userName : {
    color : 'white',
    fontSize : 32,
    fontWeight : 'bold',
    marginVertical : 5
  },
  userSubtitle : {
    color : 'white',
    fontSize : 20,
    fontWeight : 100,
    marginVertical : 5
  },
  descriptionView : {
    overflowY : 'hidden',
    alignSelf : 'flex-end'
  },
  description : {
    fontSize : 16,
    lineHeight : 20,
    marginVertical : 5,
    marginBottom : 0
  }
})