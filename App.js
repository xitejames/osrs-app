import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import RunescapeApp from './Navigation'


const AppContainer = createAppContainer(RunescapeApp)

class App extends Component {


  render() {
    return <AppContainer />
  }
}

export default App