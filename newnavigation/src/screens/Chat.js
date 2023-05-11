import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
  Dimensions,
} from "react-native";
import React from "react";
import {Avatar, ListItem} from '@rneui/themed';

//solo para prueba
const CHATS = [
  {
    id: 0,
    user: "Karla Ramirez",
    message: "hola",
    photo: require("../../assets/photoChats/mujer1.jpg"),
  },
  {
    id: 1,
    user: "Fatima Carpio",
    message: "que tal?",
    photo: require("../../assets/photoChats/mujer2.jpg"),
  },
  {
    id: 2,
    user: "Juan Melendez",
    message: "como estas, bro?",
    photo: require("../../assets/photoChats/hombre1.jpg"),
  },
  {
    id: 3,
    user: "Pepito Colocho",
    message: "Quieres ser mi amigo",
    photo: require("../../assets/photoChats/hombre2.jpg"),
  },
  {
    id: 4,
    user: "Brenda Suarez",
    message: "hey",
    photo: require("../../assets/photoChats/mujer3.jpg"),
  },
  {
    id: 5,
    user: "Karen. R.",
    message: "😏",
    photo: require("../../assets/photoChats/mujer4.jpg"),
  },
];
export default function Chat() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Chats</Text>
          </View>
          {
          CHATS.map((chats, i) => (
            <ListItem key={i} bottomDivider containerStyle={{backgroundColor: 'transparent', marginVertical : 30, marginBottom:10,}}>
                <Avatar rounded source={chats.photo} size={70}/>
                <ListItem.Content> 
                <ListItem.Title style={{color: "#fff", fontWeight: "bold", paddingBottom: 10,}}>{chats.user}</ListItem.Title>
                <ListItem.Subtitle style={{color: "#fff"}}>{chats.message}</ListItem.Subtitle>
                
                </ListItem.Content>
                <ListItem.Chevron color={"white"}  />
            </ListItem>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    padding:8,
    justifyContent: "center",
    
    backgroundColor: "#111111",
  },
  header: {
    
    fontWeight: "bold",
    color: "#fff",
    fontSize: 24,
    paddingBottom: 15,
    textAlign: "center",
    marginTop:50,
  },
  title:{
    color: "#fff", 
    fontSize:30,
    paddingLeft:30,

  },
  chatContainer:{

  }
});
