import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
import FeedCard from '../components/FeedCard'
import { LinearGradient } from 'expo-linear-gradient'

const {width, height} = Dimensions.get('screen')

export default function Home({ navigation }) {

  const [usersFeed, setUsersFeed] = useState([])

  const reStack = () => {
    if(usersFeed.length<100){
      const fetched = require('../provisionalData/povisonaFeed.json')
      setUsersFeed(prev => prev.concat(fetched))
    }
  }

  useEffect(() => {
    reStack()
    return (
      setUsersFeed([])
    )
  }, [])

  return (
    <View style={styles.mainContainer}>
      <View style={styles.blackOverlay}>
        <LinearGradient
            style={styles.overlayGradient}
            colors={['#111111', 'transparent']}
            start={{x : 0, y : 0}}
            end={{ x : 0, y : 1 }}></LinearGradient>
      </View>
      <FlatList 
        data={usersFeed}
        renderItem={({item, index}) => (<FeedCard user={item} navigation={navigation}/>)}
        numColumns={2}
        keyExtractor={item=>{
          let newKey = item.id+Math.floor(Math.random() * 10000)
          return newKey
        }}
        onEndReached={() => reStack()}
        removeClippedSubviews={true}
        ListFooterComponent={<Text style={{textAlign : 'center', marginVertical : 50}}>Cargando...</Text>}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer : {
    width : width,
    height : height,
    position : 'relative',
    zIndex : 10,
    paddingVertical : 30
  },
  blackOverlay : {
    position : 'absolute',
    height : '15%',
    width : '100%',
    left : 0,
    top : 0,
    zIndex : 1
  },
  overlayGradient : {
    flex : 1,
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    paddingHorizontal : 20
  },
  lottie: {
    width: 100,
    height: 100,
    marginVertical : 100
  }
})