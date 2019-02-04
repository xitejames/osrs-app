import { createStackNavigator } from 'react-navigation'
import {
  HomeScreen,
  SkillScreen,
  MiningScreen,
} from './src/Screens'

const RunescapeApp = createStackNavigator(
  {
    Home: HomeScreen,
    Skill: SkillScreen,   
    Mining: MiningScreen,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
    headerTransparent: true,
    },
  }
)

export default RunescapeApp
