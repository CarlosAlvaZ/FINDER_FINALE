import React, {useEffect, useState, useRef} from 'react'
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import FeedCard from '../components/FeedCard'

export default function Search({navigation}) {

  const [searched, setSearched] = useState([])
  const [filter, setFilter] = useState('')

  const inputRef = useRef(null)

  useEffect(()=>{
    let searched = require('../provisionalData/povisonaFeed.json')
    let filtered = searched.filter(item => {
      if(filter=='') {
        return true
      } else {
        return item.userName.toLowerCase().includes(filter.toLowerCase())
      }
    })
    setSearched(filtered)
  }, [filter])

  return (
    <View style={styles.mainContainer}>
      
      <View style={styles.search}>
        <TextInput ref={inputRef} placeholder='Buscar...' style={styles.searchInput} onChangeText={text=>setFilter(text)} placeholderTextColor='white'/>
        <TouchableOpacity style={styles.searchButton}>
          <Image source={require('../../assets/Icons/searchIcon.png')} style={styles.searchIcon}/>
        </TouchableOpacity>
      </View>

      <View style={styles.results}>
        {
          searched.length > 0 ?
            <FlatList 
              data={searched}
              renderItem={({item}) => (<FeedCard user={item} navigation={navigation}/>)}
              numColumns={2}
              keyExtractor={item=>{
                let newKey = item.id+Math.floor(Math.random() * 10000)
                return newKey
              }}
              />
          :
              <Text style={{ color : 'white', textAlign : 'center' }}>No se encontraron resultados</Text>

        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer : {
    backgroundColor : '#111111',
    display : 'flex',
  },
  search : {
    height : 50,
    display : 'flex',
    flexDirection : 'row',
    backgroundColor : '#1E1E1E',
    marginVertical : 40,
    marginHorizontal : 10,
    borderRadius : 15
  },
  searchInput : {
    width : '80%',
    color : 'white',
    padding : 15,
    fontSize : 15
  },
  searchButton : {
    width : '20%',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center'
  },
  searchIcon : {
    width : 25,
    height : 25
  },
  results : {
    minHeight : '80%'
  }
})