import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ScrollView, FlatList } from "react-native";

//const creada para mostrar imagenes en el perfil solo como muestra

const DATA = [
  {
    id: "1",
    imagen: require("../../assets/Profile/photo1.jpg"),
  },
  {
    id: "2",
    imagen: require("../../assets/Profile/photo2.jpg"),
  },
  {
    id: "3",
    imagen: require("../../assets/Profile/photo3.jpg"),
  },
  {
    id: "4",
    imagen: require("../../assets/Profile/photo4.jpg"),
  },
  {
    id: "5",
    imagen: require("../../assets/Profile/photo5.jpg"),
  },
  {
    id: "6",
    imagen: require("../../assets/Profile/photo6.jpg"),
  },
  {
    id: "7",
    imagen: require("../../assets/Profile/photo7.jpg"),
  },
];

// const creada para que se vean las imagenes en el flatlist

const Item = ({ imagen }) => (
  <View style={styles.imageCardContainer}>
    <Image style={styles.imageCard} source={imagen} />
  </View>
);

export default function Profile({ navigation }) {

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.closebuttom} onPress={() => navigation.replace('Login')}>
            <Text style={styles.textClose}>Cerrar Sesion</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("../../assets/Profile/woman2.jpeg")} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>Britney Sandoval</Text>
          <Text style={styles.text}>Viajero & Blogger</Text>
          <Text style={styles.text}>Artes y Moda</Text>
          <Text style={styles.text}>Comunicaciones</Text>
          <Text style={styles.text}>22 años</Text>
        </View>
        <View style={styles.pubs}>
          {
            DATA.map(item => (
              <Item imagen={item.imagen} key={item.id}/>
            ))
          }
        </View>
      </View>
    </ScrollView>
  );
}
const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width : width,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor:"#111111"
  },
  text: {
    color: "#fff",
    fontSize: 15,
    fontWeight : '100',
    textAlign: "center",
  },
  textTitle: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 24,
    paddingBottom: 15,
    textAlign: "center",
  },
  textContainer: {
    marginTop: 15,
    paddingLeft: 50,
    paddingRight: 50,
    marginBottom: 15,
  },
  pubs : {
    display : 'flex',
    flexDirection : 'row',
    flexWrap : 'wrap',
    width : width
  },
  imageCard: {
    height: '100%',
    width: '100%',
  },
  imageCardContainer: {
    borderRadius: 15,
    shadowColor: "#fff",
    shadowOffset: {
      width: 14,
      height: 14,
    },
    shadowOpacity: 50,
    shadowRadius: 20,
    elevation: 10,
    width: "46%",
    height: height * 0.3,
    backgroundColor: "#48464F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    overflow : 'hidden',
    marginHorizontal: '2%',
    marginVertical : 10
  },
  header: {
    display : 'flex',
    flexDirection : 'column',
    width : width,
    height : 100,
    justifyContent: "center",
    padding : 10
  },
  closebuttom: {
    color: "#0085E6",
    padding: 10,
    alignSelf : 'flex-end'
  },
  textClose: {
    color: "#0085E6",
    fontStyle: "normal",
    fontWeight: "regular",
    textAlign: "right",
    fontSize: 16,
  }
});
