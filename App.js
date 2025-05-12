import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Image, TextInput, TouchableOpacity, SafeAreaView, ImageBackground, Alert, Pressable, Text, View } from 'react-native';
const imgExterna= {uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'};

export default function App() {
  const [text, useText] = useState();
  const alertar = ()=>{
    Alert.alert(text);//NO USAR ALERT
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Image source={imgExterna} style={styles.Image}/>
        <Text style={{fontSize:25}}>Martín Zilbersztein</Text>
        <Text style={{fontSize:20}}>Frontend developer</Text>
        <TextInput style={styles.textInput} placeholder='Enter a message' onChangeText={useText} value={text}/>
        <TouchableOpacity style={styles.touchableOpacity} onPress={alertar}>
          <Text style={styles.botonTexto}>Contactar</Text>
        </TouchableOpacity>
        <Pressable style={styles.pressable}>
          <Text>Hola!</Text>
        </Pressable>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
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
    backgroundColor:'white',
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
  textInput:{
    borderBottomWidth : 1.0,
    borderTopWidth:1.0,
    borderLeftWidth:1.0,
    borderRightWidth:1.0,
    borderRadius:9,
    width:'80%',
    height:'9%',
    marginTop:'5%'
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
    color: 'white',
    textAlign:'center',
    fontSize:20
  },
  pressable:{
    marginTop:10,
    backgroundColor:'white',
    borderRadius:10,
    borderBottomWidth : 1.0,
    borderTopWidth:1.0,
    borderLeftWidth:1.0,
    borderRightWidth:1.0,
    width:'80%',
    height:'10%',
    justifyContent:'center',
    alignItems:'center'
  }
});
