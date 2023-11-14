import React, {useState, useRef} from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native'
import LoginButton from '../components/LoginButton'
import COlORS from '../MainDesignVariables'

import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config';

const { width, height } = Dimensions.get('screen')

export default function RegisterStep1({navigation}) {

  const passwordCheckRef = useRef(null)

  const [secured, setSecured] = useState(true)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAcount = () => {
    if (password === passwordCheck) {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Cuenta Creada')
        const user = userCredential.user;
        console.log(user)
        navigation.navigate('RegisterStep2')
      })
      .catch(error => {
        console.log(error)
        Alert.alert(error.message)
      })
    } else {
      passwordCheckRef.current.focus()
    }
  }

  return (
    <ScrollView style={styles.mainContainer} contentContainerStyle={{alignItems : 'center'}} showsVerticalScrollIndicator={false} alwaysBounceVertical={true}>
      <Image source={require('../../assets/logo.png')} style={styles.logo}/>

      <View style={styles.mainCard}>
        <Text style={styles.title}>Registrarme:</Text>

        <View style={styles.inputSnippet}>
          <Image source={require('../../assets/Icons/UserIcon.png')}/>
          <TextInput placeholder='Correo Electrónico' placeholderTextColor='#8D8D8D' style={styles.textInput} onChangeText={(text) => setEmail(text)}/>
        </View>

        <View style={styles.inputSnippet}>
          <TouchableOpacity style={styles.inputButton} onPress={()=>setSecured(prev=>!prev)}>
            {
              secured ?
                <Image source={require('../../assets/Icons/EyeIcon.png')} />
              :
                <Image source={require('../../assets/Icons/EyeClosedIcon.png')} /> 
            }
          </TouchableOpacity>
          <TextInput placeholder='Contraseña' secureTextEntry={secured}  placeholderTextColor='#8D8D8D' style={styles.textInput} autoCapitalize="none" autoCorrect={false} onChangeText={(text) => setPassword(text)}/>
        </View>

        <View style={styles.inputSnippet}>
          <TouchableOpacity style={styles.inputButton} onPress={()=>setSecured(prev=>!prev)}>
            {
              secured ?
                <Image source={require('../../assets/Icons/EyeIcon.png')} />
              :
                <Image source={require('../../assets/Icons/EyeClosedIcon.png')} /> 
            }
          </TouchableOpacity>
          <TextInput ref={passwordCheckRef} placeholder='Repetir Contraseña' secureTextEntry={secured}  placeholderTextColor='#8D8D8D' style={styles.textInput} autoCapitalize="none" autoCorrect={false} onChangeText={(text) => setPasswordCheck(text)}/>
        </View>

        <LoginButton content={'Registrarse'} action={() => handleCreateAcount()}/>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainContainer : {
    flex : 1,
    backgroundColor : COlORS.SCREEN_COLOR
  },
  logo : {
    marginTop : '25%',
    marginBottom : '10%',
    width:200,
    height:73
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
    marginTop : 30,
    fontWeight:"bold"
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
  caption : {
    fontSize : 16,
    fontWeight : 300,
    marginBottom : 20
  },
  registerButton : {
    padding : 0,
    margin : 0,
  },
  registerText : {
    color : COlORS.SCREEN_COLOR,
    textDecorationColor : COlORS.SCREEN_COLOR,
    textDecorationLine : 'underline',
    fontSize : 16,
    fontWeight : 500,
  }
})