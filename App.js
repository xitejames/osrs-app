import RunescapeApp from './Navigation'
import * as Expo from 'expo'
import React, { Component } from 'react'
import { Root } from 'native-base'
import { createAppContainer } from 'react-navigation'
const AppContainer = createAppContainer(RunescapeApp)

export default class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        fontLoaded: false,
        isReady: false,
      }
    }
    
    async componentWillMount() {      
        await Expo.Font.loadAsync({
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
        })
        this.setState({ fontLoaded: true, isReady: true })
    }
    
    render() {
      if (!this.state.fontLoaded) {
        return (
          <Expo.AppLoading/>
        )
      }
      return (
        <Root>
          <AppContainer />
        </Root>
      )
    }
  }