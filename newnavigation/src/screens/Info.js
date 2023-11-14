import {StyleSheet, Text, View, ScrollView, SafeAreaView} from "react-native";
import React from "react";
import {Avatar, ListItem} from '@rneui/themed';

//solo para prueba
const list = [
  {
    name: 'Cardedeu Hotel',
    avatar_url: "https://scontent.fsal5-1.fna.fbcdn.net/v/t39.30808-6/384991557_329178799791717_4197602345780280922_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fn5ltKm9PL4AX8cu0SU&_nc_oc=AQkQR_NLlq_ec-P5o8fUF0MYS_y5fFMLx71l5OEdsK1UES1qhcqHQZOHAEAx45v3Zzw&_nc_ht=scontent.fsal5-1.fna&oh=00_AfCyvrk_xiNXHqKGsqubvtOEeBdrcDycyomWfnVclEoBFA&oe=65577C5B",
    subtitle: 'Km 2 Calle Los Planes, Lago de Coatepeque, El Congo, Santa Ana.                                            (+503 7603-5206)'
  },
  {
    name: 'Equinoccio Hotel',
    avatar_url: 'https://scontent.fsal5-1.fna.fbcdn.net/v/t39.30808-6/294181765_727639621886112_8339099938119035788_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LUPiTAlmE4kAX8N9qy3&_nc_ht=scontent.fsal5-1.fna&oh=00_AfCz-HBUmSUcPthh3LM5aD-klv6BcrmsYf9Ls2bZpVX5pg&oe=6556FFD9',
    subtitle: 'Calle Circunvalación, El Congo, Santa Ana. (+503 7939-4965)'
  },
  {
    name: 'Hostal Solé',
    subtitle: '2a Avenida Sur entre 5ta. y 7ta. calle Poniente, Santa Ana.                                                            (+503 2421-7433)',
    avatar_url: 'https://scontent.fsal5-1.fna.fbcdn.net/v/t39.30808-6/402622172_831025279029269_9025407903889207157_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NAAzsccVWaIAX-6dsA1&_nc_ht=scontent.fsal5-1.fna&oh=00_AfBowJdXxxhCsogqVDvMWmuTYHwknYdd8ayquNg44Pu1RQ&oe=65571978',
},
{
    name: 'Hotel Cabañas Campo Bello',
    subtitle: 'Cerro Verde, Cantón Las Lomas, Santa Ana. (+503 7729-3778)',
    avatar_url: 'https://scontent.fsal1-1.fna.fbcdn.net/v/t39.30808-6/326202379_896858431455115_8673860338489469107_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Zwrq3tkqbzQAX-tTQDH&_nc_ht=scontent.fsal1-1.fna&oh=00_AfB8GUWLtUosmfOOYlT6pd4FWqvIdQ1Q36u7k-KGBKEauQ&oe=6558164E',
},
{
    name: 'Hotel Remfort Business Class',
    subtitle: 'Avenida Independencia Sur y 11° Calle Poniente #48 Santa Ana, Santa Ana.                                    (+503 7736-8671)',
    avatar_url: 'https://scontent.fsal1-1.fna.fbcdn.net/v/t39.30808-6/302511332_490629869739592_4870749801496644983_n.png?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=G0Icq2eJBs8AX_7G48D&_nc_ht=scontent.fsal1-1.fna&oh=00_AfDwcKbgxde6fXvArWULZsl6iRWUbF0itORep2fQMi1FFQ&oe=65572581',
},
{
    name: 'Hostal Las Puertas',
    subtitle: '5a Calle Poniente 2a Avenida Sur, Santa Ana. (+503 7650-7145)',
    avatar_url: 'https://scontent.fsal5-1.fna.fbcdn.net/v/t39.30808-6/303339758_516636297134551_1181592614014293419_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=SI8ynjxs5ToAX_-kdv8&_nc_ht=scontent.fsal5-1.fna&oh=00_AfDMdxqOnsyRLuVGhPsn1Ge_bhH_7iKPAcAYqE0Qc79Axw&oe=65582AE6',
},];

export default function Info() {
  return (
    <SafeAreaView containerStyle={{backgroundColor: 'black', marginVertical : 30, marginBottom:10,}}>
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.heading}>Hoteles Populares</Text>
      <Text style={styles.heading2}>¡Descubre hoteles y lugares donde puedes alojarte!</Text>
  {
    list.map((l, i) => (
      <ListItem key={i} bottomDivider containerStyle={{backgroundColor: 'transparent', marginVertical : 30, marginBottom:10,}}>
        <Avatar style={styles.photo} source={{uri: l.avatar_url}} />
        <ListItem.Content style={styles.list}>
          <ListItem.Title style={styles.title}>{l.name}</ListItem.Title>
          <ListItem.Subtitle style={styles.description}>{l.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }
</View>
</ScrollView>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    color:"black",
    paddingStart:10
},

title: {
    fontSize: 20,
    paddingLeft:7,
    color: 'white',
    fontWeight:"bold"
},
list:{
  backgroundColor:"black",
},
description: {
    fontSize: 17,
    padding:5,
    fontStyle: 'normal',
    color:"#fff",
  fontWeight : '100',
},
photo: {
    height: 90,
    width: 90,
    backgroundColor:"black"
},
heading: {
  color: "white",
  fontSize: 30,
  textAlign: "center",
  fontWeight: "bold",
  marginTop: 20,
  margin:5
},
heading2: {
  color: "white",
  fontSize: 20,
  textAlign: "center",
  fontWeight: "normal",
  margin:5
},
paragraph: {
  fontSize: 13,
  textAlign: "justify",
  lineHeight: 24,
  marginTop: 20,
  margin:20,
},
});
