import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import { 
  HomeScreen, 
  SkillScreen,
  AgilityScreen, 
  ConstructionScreen,  
  CookingScreen, 
  CraftingScreen,
  FarmingScreen, 
  FiremakingScreen, 
  FishingScreen,
  FletchingScreen,
  HerbloreScreen,
  HunterScreen,
  MagicScreen,
  MiningScreen,
  PrayerScreen,
  RunecraftingScreen,
  SmithingScreen,
  ThievingScreen,
  WoodcuttingScreen,

} from './src/Screens'


const RunescapeApp = createStackNavigator({
  Home: HomeScreen,   
  Skill: SkillScreen,
  Agility: AgilityScreen,
  Construction: ConstructionScreen,
  Cooking: CookingScreen,
  Crafting: CraftingScreen,
  Farming: FarmingScreen,
  Firemaking: FiremakingScreen,
  Fishing: FishingScreen,
  Fletching: FletchingScreen,
  Herblore: HerbloreScreen,  
  Hunter: HunterScreen,
  Magic: MagicScreen,
  Mining: MiningScreen,
  Prayer: PrayerScreen,
  Runecrafting: RunecraftingScreen,
  Smithing: SmithingScreen,
  Thieving: ThievingScreen,
  Woodcutting: WoodcuttingScreen,

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
