import { createStackNavigator } from 'react-navigation'
import {
  HomeScreen,
} from './src/Screens'

const RunescapeApp = createStackNavigator(
  {
    Home: HomeScreen,

  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
    headerTransparent: true,
    },
  }
)

export default RunescapeApp
