import React, { Component } from 'react';
import { Content, Footer, Container, Row, Col, Button, Header } from "native-base";
import { StyleSheet, View, Text, ActivityIndicator,Dimensions } from 'react-native'
import { PageFooter } from '../Components/Footer'
import { navigationOptions } from '../Components/Headers/header'
import styles from '../Styles/style'

export default class MapScreen extends Component {
	static navigationOptions = navigationOptions

  constructor(props) {
    super(props);
  }
  state = {
    loaded: false,
  }
  async componentWillMount() {
    this.setState({ loaded: true });
  }

  render() {
    const { width, height } = Dimensions.get('window')
    const maxWidth = width / 3.5
    const maxHeight = height / 4.5
    const { loaded } = this.state
    if(!loaded){
      return(
        <View>
          <Text>Loading</Text>
          <ActivityIndicator />
        </View>
      );
    }

    return(
    <Container style={styles.container}>
      <Header
          transparent
          translucent={true}
          noShadow={true}
          iosBarStyle="light-content"
        >
        <View
          style={{
            position: 'absolute',
            width: maxWidth,
            height: maxHeight,
            right: 0,
            top: -34
          }}
        >
        </View>
      </Header>
    <Content >

      </Content>
      <Footer>
            <PageFooter nav={this.props.navigation}/>  
      </Footer>
    </Container>
    );
  }
}


