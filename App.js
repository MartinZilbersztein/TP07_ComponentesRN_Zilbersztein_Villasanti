import { StyleSheet, SafeAreaView, ImageBackground, View } from 'react-native';
import Tarjeta from './Tarjeta.js';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.aa}>
      <ImageBackground style={styles.imagen} resizeMode='cover' source={{uri: 'https://media.istockphoto.com/id/1362473128/es/vector/viejo-r%C3%BAstico-sucio-desordenado-desgastado-escala-de-grises-claro-o-blanco-color-grunge.jpg?s=612x612&w=0&k=20&c=hEF1k6eMGmIETny4tE9irRSqQrnG07m_CL7k2MFCF3s='}}>
        <SafeAreaView style={styles.view} id='mainContainer'>
        <Tarjeta />
        </SafeAreaView>
      </ImageBackground>
      <StatusBar backgroundColor='green'/>
    </View>
  );
}

const styles = StyleSheet.create({
  aa:{
    flex:1,
  },
  imagen: {
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
  }
});
