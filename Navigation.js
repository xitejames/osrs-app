import { createStackNavigator } from 'react-navigation'
import {
  HomeScreen,
  MiningScreen,
} from './src/Screens'

const RunescapeApp = createStackNavigator(
  {
    Home: HomeScreen,   
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
