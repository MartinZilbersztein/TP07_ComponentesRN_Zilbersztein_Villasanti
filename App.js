import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Image, TextInput, TouchableOpacity, SafeAreaView, ImageBackground, Alert, Pressable, Text, View } from 'react-native';

const imgExterna= {uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'};

export default function App() {
  const [text, useText] = useState();
  const alertar = ()=>{
    Alert.alert(text);//NO USAR ALERT
  }
  const cambiarFondo = ()=>{
  }
  const presionado = (presion) => {
  }
  return (
    <ImageBackground style={styles.container} resizeMode='cover' source={{uri: 'https://media.istockphoto.com/id/1362473128/es/vector/viejo-r%C3%BAstico-sucio-desordenado-desgastado-escala-de-grises-claro-o-blanco-color-grunge.jpg?s=612x612&w=0&k=20&c=hEF1k6eMGmIETny4tE9irRSqQrnG07m_CL7k2MFCF3s='}}>
      <SafeAreaView style={styles.view} id='mainContainer'>
        <Image source={imgExterna} style={styles.Image}/>
        <Text style={{fontSize:25, fontFamily:'times new roman'}}>Martín Zilbersztein</Text>
        <Text style={{fontSize:20}}>Frontend developer</Text>
        <TextInput style={[styles.textInput, styles.entrada]} placeholder='Enter a message' onChangeText={useText} value={text}/>
        <TouchableOpacity style={styles.touchableOpacity} onPress={alertar}>
          <Text style={[styles.botonTexto, {color: 'white'}]}>Contactar</Text>
        </TouchableOpacity>
        <Pressable style={[styles.pressable, styles.entrada]} onPressIn={() => presionado(true)} onPressOut={() => presionado(false)} onPress={cambiarFondo}>
          <Text style={styles.botonTexto}>Ver portfolio</Text>
        </Pressable>
        <StatusBar style="auto" />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    display:'flex'
  },
  view:{
    backgroundColor: 'white',
    width:'70%',
    height:'55%',
    alignItems:'center',
    borderRadius:30
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
  }
});
