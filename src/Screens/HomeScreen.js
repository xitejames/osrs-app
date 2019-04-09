import React, { Component } from 'react';
import { Content, Footer, Container, Row, Col } from "native-base";
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import * as Expo from "expo";
import { PageFooter } from '../Components/Footer'
import { HomescreenCard } from '../Components/Cards'
import updates from '../api/Updates'

export default class HomeScreen extends Component {
   
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
      <PageFooter nav={this.props.navigation}/>
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

