import { useState } from 'react';
import { StyleSheet, Image, TextInput, View, TouchableOpacity, Alert, Pressable, Text } from 'react-native';
import { Button } from 'react-native-paper';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Tarjeta(){
  const [text, useText] = useState("");
  const [color, setColor] = useState('white');
  const fotoPerfil= require('./fotoPerfil.jpg');
  const alertar = ()=>{
    Alert.alert(text);//NO USAR ALERT
  }
  return (
    <>
      <Image source={fotoPerfil} style={styles.Image}/>
      <Text style={{fontSize:25, fontFamily:'times new roman', fontWeight:'bold', marginTop:10}}>Martín Zilbersztein</Text>
      <Text style={{fontSize:20, fontStyle:'italic'}}>Frontend developer</Text>
      <View style={styles.view}>
        <AntDesign name="github" size={34} color="black" />
        <AntDesign name="linkedin-square" size={34} color="black" style={{marginLeft:'10%'}}/>
        <AntDesign name="mail" size={34} color="black" style={{marginLeft:'10%'}}/>
        <AntDesign name="phone" size={34} color="black" style={{marginLeft:'10%'}}/>
      </View>
      <TextInput style={[styles.textInput, styles.entrada]} placeholder='Enter a message' onChangeText={useText} value={text}/>
      <TouchableOpacity style={styles.touchableOpacity} onPress={alertar}>
        <Text style={[styles.botonTexto, {color: 'white'}]}>Contactar</Text>
      </TouchableOpacity>
      <Button mode="contained" style={styles.pressable} onPressIn={() => setColor('cyan')} onPressOut={() => setColor('white')}>
        <Text style={[styles.botonTexto, {color: color}]}>Ver portfolio</Text>
      </Button>
    </>
  );
}

const styles = StyleSheet.create({
  view:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    marginTop: '5%'
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
    width: '80%',
    height: '10%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  }
});