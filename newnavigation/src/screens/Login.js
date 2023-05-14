import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native'
import LoginButton from '../components/LoginButton'
import COlORS from '../MainDesignVariables'

import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config';

const { width, height } = Dimensions.get('screen')

export default function Login({navigation}) {

  const [secured, setSecured] = useState(true)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignIn = () => {
    if (email != '' && password != '') {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Sesion iniciada')
        const user = userCredential.user;
        console.log(user)
        navigation.replace('Main');
      })
      .catch(error => {
        Alert.alert(error.message)
        console.log(error.message)
      })
    } else {
      Alert.alert('Ingrese su email y contraseña')
    }
  }

  return (
    <ScrollView style={styles.mainContainer} contentContainerStyle={{alignItems : 'center'}} showsVerticalScrollIndicator={false} alwaysBounceVertical={true}>
      <Image source={require('../../assets/logo.png')} style={styles.logo}/>

      <View style={styles.mainCard}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.inputSnippet}>
          <Image source={require('../../assets/Icons/UserIcon.png')}/>
          <TextInput placeholder='Correo Electrónico' placeholderTextColor='#8D8D8D' style={styles.textInput} textContentType='emailAddress' onChangeText={(text) => setEmail(text)}/>
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

        <LoginButton content={'Ingresar'} action={() => handleSignIn()}/>

        <View style={styles.captionContainer}>
          <Text style={styles.caption}>Aun no tengo cuenta </Text>
          <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register')}><Text style={styles.registerText}>Registrarme</Text></TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainContainer : {
    flex : 1,
    backgroundColor : COlORS.MAIN_COLOR
  },
  logo : {
    marginTop : '25%',
    marginBottom : '10%'
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
    marginTop : 30
  },
  inputSnippet : {
    width : '100%',
    display : 'flex',
    flexDirection : 'row',
    borderBottomColor : COlORS.MAIN_COLOR,
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
    color : COlORS.MAIN_COLOR,
    textDecorationColor : COlORS.MAIN_COLOR,
    textDecorationLine : 'underline',
    fontSize : 16,
    fontWeight : 500,
  }
})