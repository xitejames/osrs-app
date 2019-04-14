import React, { Component } from 'react';
import { 
  Content, 
  Footer, 
  Container, 
  Row,
  Col, 
  Button, 
  Header 
} from "native-base";
import { 
  View, 
  Text, 
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native'
import * as Expo from "expo";
import { PageFooter } from '../Components/Footer'
import { HomescreenCard } from '../Components/Cards'
import updates from '../api/Updates'
import styles from '../Styles/style'
import { homeNavigationOptions } from '../Components/Headers/homeHeader'

export default class HomeScreen extends Component {
  static navigationOptions = homeNavigationOptions
  
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
      <Row style={{ marginTop: 15, marginBottom: 15 }}>
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

