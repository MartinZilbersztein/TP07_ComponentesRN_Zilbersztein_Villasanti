import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, TextInput, View, TouchableOpacity, Alert, Pressable, Text } from 'react-native';

export default function Tarjeta(){
  const [text, useText] = useState("");
    const fotoPerfil= require('./fotoPerfil.jpg');
    const github = require('./github.png');
    const email = {uri:'https://static.vecteezy.com/system/resources/previews/021/454/517/non_2x/email-confirmation-app-icon-email-icon-free-png.png'};
    const linkedin = {uri: 'https://commons.wikimedia.org/wiki/File:LinkedIn_logo_initials.png'};
    const telefono = {uri:'https://cdn-icons-png.flaticon.com/512/684/684853.png'};
    const alertar = ()=>{
      console.log("hola"); 
      Alert.alert(text);//NO USAR ALERT
    }
    const cambiarFondo = ()=>{
    }
    const presionado = (presion) => {
      styles.pressable={
        backgroundColor:"black" 
      }
    }
  return (
    <>
      <Image source={fotoPerfil} style={styles.Image}/>
      <Text style={{fontSize:25, fontFamily:'times new roman'}}>Martín Zilbersztein</Text>
      <Text style={{fontSize:20, fontStyle:'italic'}}>Frontend developer</Text>
      <View style={styles.view}>
        <Image source={github} style={styles.imagenesRedes} />
        <Image source={linkedin} style={styles.imagenesRedes} />
        <Image source={email} style={styles.imagenesRedes} />
        <Image source={telefono} style={styles.imagenesRedes} />
      </View>
      <TextInput style={[styles.textInput, styles.entrada]} placeholder='Enter a message' onChangeText={useText} value={text}/>
      <TouchableOpacity style={styles.touchableOpacity} onPress={alertar}>
        <Text style={[styles.botonTexto, {color: 'white'}]}>Contactar</Text>
      </TouchableOpacity>
      <Pressable style={[styles.pressable, styles.entrada]} onPressIn={() => presionado(true)} onPressOut={() => presionado(false)} onPress={cambiarFondo}>
        <Text style={styles.botonTexto}>Ver portfolio</Text>
      </Pressable>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  view:{
    display: 'flex',
    width:'100%',
    height:'10%',
    flexDirection: 'row',
    justifyContent:'center'
  },
  Image:{
    height:'30%',
    width:'50%',
    borderRadius:100,
    marginTop:'5%'
  },
  entrada:{
    borderBottomWidth : 1.0,
    borderTopWidth:1.0,
    borderLeftWidth:1.0,
    borderRightWidth:1.0,
    borderRadius:10
  },
  textInput:{
    width:'80%',
    height:'9%',
    marginTop:'5%',
    padding:'10'
  },
  touchableOpacity:{
    marginTop: 10,
    backgroundColor:'#01A8BB',
    width:'80%',
    height: '10%',
    justifyContent:'center',
    borderRadius:10
  },
  botonTexto:{
    textAlign:'center',
    fontSize:20
  },
  pressable:{
    marginTop:10,
    backgroundColor:'white',
    width: '80%',
    height: '10%',
    justifyContent:'center',
    alignItems:'center'
  },
  imagenesRedes:{
    width:'20%',
    height: '70%'
  }
});