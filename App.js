import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import HomeScreen from './src/Screens/HomeScreen'
import MiningScreen from './src/Screens/MiningScreen'
import AgilityScreen from './src/Screens/AgilityScreen';
import SmithingScreen from './src/Screens/SmithingScreen';


const RunescapeApp = createStackNavigator({
  Home: HomeScreen,   
  Mining: MiningScreen,
  Agility: AgilityScreen,
  Smithing: SmithingScreen,

});

const App = createAppContainer(RunescapeApp);
//exports the code above
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
