import { StyleSheet,} from 'react-native';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import { 
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

} from './src/Screens/Skills'
import {
  HomeScreen,
  MapScreen
} from './src/Screens'
import {QuestScreen} from './src/Screens/Quests'
import {ExchangeScreen} from './src/Screens/Exchange'

const RunescapeApp = createStackNavigator({
  Home: HomeScreen,   
  Quest: QuestScreen,
  Exchange: ExchangeScreen,
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
  WorldMap: MapScreen,

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
