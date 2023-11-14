import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import LoginButton from '../components/LoginButton'
import COlORS from '../MainDesignVariables'

import * as ImagePicker from 'expo-image-picker'

const { width, height } = Dimensions.get('screen')

export default function RegisterStep1({navigation}) {

  const [image, setImage] = useState(null)
  const [genero, setGenero] = useState()
  const [userName, setUserName] = useState('')
  const [age, setAge] = useState('')
  const [ocupation, setOcupation] = useState('')
  const [tel, setTel] = useState('')

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
    }
  }

  const finish = () => {
    if (image === null) {
      Alert.alert('Debe agregarse una imagen de usuario')
    } else if (userName == '') {
      Alert.alert('Ingrese un nombre de usuario')
    } else if (age == '') {
      Alert.alert('Ingrese su edad')
    } else if (ocupation == '') {
      Alert.alert('Ingrese su ocupación')
    } else if (tel == '') {
      Alert.alert('Ingrese su número telefónico')
    } else {
      navigation.replace('Main')
    }
  }

  return (
    <ScrollView style={styles.mainContainer} contentContainerStyle={{alignItems : 'center'}} showsVerticalScrollIndicator={false} alwaysBounceVertical={true}>
      <Text style={styles.title}>Información Personal: </Text>

      <View style={styles.mainCard}>

        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={() => pickImage()} style={styles.imagePicker}>
            {
              image ?
                <Image source={{ uri : image }} style={styles.uploaded} />
              :
                <Image source={require('../../assets/Icons/cameraIcon.png')} style={styles.image} />
            }
          </TouchableOpacity>
        </View>

        <View style={styles.inputSnippet}>
          <TextInput placeholder='Elije un nombre de usuario' placeholderTextColor='#8D8D8D' style={styles.textInput} onChangeText={text => setUserName(text)}/>
        </View>

        <View style={styles.inputSnippetDouble}>
            <View style={styles.pickerSnippet}>
              <Picker selectedValue={genero} onValueChange={(itemValue, itemIndex) => setGenero(itemValue)} style={styles.picker} mode='dropdown'>
                <Picker.Item label='Hombre' value='Hombre'></Picker.Item>
                <Picker.Item label='Mujer' value='Hombre' />
                <Picker.Item label='Prefiero no decirlo' value='Prefiero no decirlo' />
              </Picker>
            </View>

            <View style={styles.inputAgeContainer}>
              <TextInput placeholder='Edad' placeholderTextColor='#8D8D8D' style={styles.inputAge} keyboardType='phone-pad' onChangeText={text => setAge(text)}/>
            </View>
        </View>

        <View style={styles.inputSnippet}>
          <TextInput placeholder='Ocupación' placeholderTextColor='#8D8D8D' style={styles.textInput} onChangeText={text => setOcupation(text)}/>
        </View>

        <View style={styles.inputSnippet}>
          <TextInput placeholder='Numero Telefónico' placeholderTextColor='#8D8D8D' style={styles.textInput} keyboardType='phone-pad' onChangeText={text => setTel(text)}/>
        </View>


        <LoginButton content={'Finalizar'} action={() => finish()}/>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainContainer : {
    flex : 1,
    backgroundColor : COlORS.SCREEN_COLOR
  },
  mainCard : {
    flex : 1,
    width : '100%',
    minHeight : (height * 80) / 100,
    backgroundColor : 'white',
    padding : '12%',
    borderTopRightRadius : 60,
    borderTopLeftRadius : 60,
    display : 'flex',
    alignItems : 'center',
    gap : 60,
    elevation : 200
  },
  title : {
    fontSize : 30,
    fontWeight : 400,
    marginTop : '20%',
    marginBottom : '15%',
    color : 'white',
    fontWeight:"bold"
  },
  imageContainer : {
    width : 150,
    height : 150,
    backgroundColor : '#2C2C2C',
    borderRadius : 100,
    overflow : 'hidden'
  },
  imagePicker : {
    flex : 1,
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center'
  },
  uploaded : {
    width : '100%',
    height : '100%'
  },
  inputSnippet : {
    width : '100%',
    display : 'flex',
    flexDirection : 'row',
    borderBottomColor : COlORS.SCREEN_COLOR,
    borderBottomWidth : 3,
    padding : 10,
    gap : 10,
    borderRadius : 2
  },
  textInput : {
    fontSize : 16
  },
  captionContainer : {
    flex : 1,
    display : 'flex',
    flexDirection : 'row',
    alignItems : 'baseline'
  },
  inputSnippetDouble : {
    width : '100%',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'space-between'
  },
  pickerSnippet : {
    width : '45%',
    padding : 0,
    margin : 0,
    borderBottomColor : COlORS.SCREEN_COLOR,
    borderBottomWidth : 3,
    borderRadius : 2
  },
  picker : {
    width : '100%',
    borderBottomColor : COlORS.SCREEN_COLOR,
    borderBottomWidth : 3,
  },
  inputAgeContainer : {
    width : '45%',
    display : 'flex',
    flexDirection : 'row',
    borderBottomColor : COlORS.SCREEN_COLOR,
    borderBottomWidth : 3,
    padding : 10,
    gap : 10,
    borderRadius : 2
  },
  inputAge : {
    fontSize : 16
  }
})