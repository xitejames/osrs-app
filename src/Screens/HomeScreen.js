import React, { Component } from 'react';
import { Content, Footer, Container, Row, Col, Button, Header } from "native-base";
import { StyleSheet, View, Text, ActivityIndicator,Dimensions } from 'react-native'
import * as Expo from "expo";
import { PageFooter } from '../Components/Footer'
import { HomescreenCard } from '../Components/Cards'
import updates from '../api/Updates'

export default class HomeScreen extends Component {
	static navigationOptions = {
    headerTransparent: true,
    headerBackgroundTransitionPreset: 'fade',
    headerTitle: (
      <View>
        <Button onPress={() => navigation.navigate('Home')} transparent
          accessible={true}
          accessibilityLabel="Home"
          accessibilityHint={"Navigate to the home screen"}
          accessibilityRole="button"
          accessibilityTraits="button"
        >
          <Text
            style={{ fontFamily: 'Roboto_medium', color: '#000', fontSize: 18 }}
          >
            Home
        </Text>
        </Button>
      </View>
    ),
  }



  constructor(props) {
    super(props);
  }
  state = {
    loaded: false,
    fontLoaded: false,
    articles: []
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    await updates.findUpdates()
    const newArticles = await updates.getArticles()
    this.setState({ fontLoaded: true, articles:newArticles, loaded: true });
  }

  render() {
    const { width, height } = Dimensions.get('window')
    const maxWidth = width / 3.5
    const maxHeight = height / 4.5
    const { fontLoaded, articles, loaded } = this.state
    if(!loaded){
      return(
        <View>
          <Text>Loading</Text>
          <ActivityIndicator />
        </View>
      );
    }
    if(!fontLoaded){
      return(
        <View>
          <Text>Loading Font</Text>
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
      <Row style={{ marginTop: 30 }}>
        <Col>
          <Text style={{
            fontSize: 16,
            textDecorationLine: 'underline',
            fontFamily: 'Roboto_medium',
            color: '#000',
          }}>
            Recent News
          </Text> 
          {articles !== undefined && 
          <HomescreenCard articles={articles} />}
        </Col>
      </Row>
      </Content>
      <Footer>
            <PageFooter nav={this.props.navigation}/>  
      </Footer>
    </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

