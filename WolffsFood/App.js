import { StyleSheet, Text, View,StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Servicos from './src/telas/Servicos';

import 'react';

export default function App() {
  return (
    
    <View style={styles.container}>
      <LinearGradient colors={['#ff7171', '#ff303c']} style={styles.background}/>

      <StatusBar/>
      
      <Servicos/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    zIndex: -1,
  },
});
