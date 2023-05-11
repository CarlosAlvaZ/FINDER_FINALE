import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Alert, Platform, Image } from 'react-native'

import * as ImagePicker from 'expo-image-picker'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Add() {

  const [image, setImage] = useState(null)
  const [photoStatus, setPhotoStatus] = useState('No se ha seleccionado ninguna imagen.')

  useEffect(() => {
    (async () => {
      if (Platform.OS != 'web') {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()
        if (status != 'granted') {
          Alert.alert('Se necesitan permisos para acceder a la galería')
        }
      }
    })
  }, [])

  const pickImage = async () => {
    
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes : ImagePicker.MediaTypeOptions.All,
      allowsEditing : false,
      aspect : [4, 3],
      quality : 1
    })

    if(!result.canceled) {
      setImage(result.uri)
      setPhotoStatus('Imagen cargada correctamente')
    }
  }
  
  return (
    <View style={styles.mainContainer}>
      <Image source={{ uri : image }} style={styles.image} />
      <Text style={styles.photoStatus}>{photoStatus}</Text>
      <TouchableOpacity onPress={() => pickImage()} style={styles.button}>
        <Text style={styles.buttonText}>Seleccionar Imagen</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer : {
    backgroundColor : '#111111',
    minHeight : '100%',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center'
  },
  button : {
    width : 200,
    height : 60,
    backgroundColor : '#0085E6',
    borderRadius : 5,
    elevation : 10,
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center'
  },
  buttonText : {
    color : 'white',
    fontSize : 15
  },
  photoStatus : {
    color : 'white',
    marginVertical : 30,
    fontWeight : 200
  },
  image : {
    width : 300,
    height : 300,
    backgroundColor : '#393737',
    borderRadius : 10,
  }
})