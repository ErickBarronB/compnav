import { StyleSheet, Text, View } from 'react-native';
import react, { useState } from 'react';

import AppLoading from "expo-app-loading"
import GameScreen from "./src/screens/game-screen"
import { Header } from './src/components/index';
import StartGame from './src/screens/start-game';
import { useFonts } from "expo-font"

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [Loaded] =useFonts({
    openSans: require("./assets/fonts/OpenSans-Regular.ttf"),
    openSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
    openSansLight: require("./assets/fonts/OpenSans-Light.ttf"),
    openSansMedium: require("./assets/fonts/OpenSans-Medium.ttf"),
  });

  if (!Loaded) return <AppLoading/>



  const handlerStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

let content = <StartGame onStartGame={handlerStartGame} />;

if (userNumber) {
  content = <GameScreen userOptions={userNumber}/>;
}

  return (
    <View style={styles.container}>
    <Header title="Adivina el numero" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
