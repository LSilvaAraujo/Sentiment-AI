import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Home } from './assets/src/screens/Home/index';

export default function App() {
  return (
    <>
      <StatusBar style="auto" backgroundColor="transparent" translucent />
      <Home/>
    </>
  );
}

const styles = StyleSheet.create({
  // Caso queira adicionar algum estilo global aqui
});
