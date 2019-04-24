import React, { Component } from 'react';
import { 
  Content, 
  Footer, 
  Container, 
  Row,
  Col, 
  Header 
} from "native-base";
import { 
  View, 
  Text, 
  ActivityIndicator,
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
    const { fontLoaded, articles, loaded } = this.state
    if(!loaded){
      return(
        <Container style={styles.container} >
          <Content style={styles.content}>
            <ActivityIndicator style={styles.indicator}
            size={'large'}
            color="black"
            />
          </Content>
        </Container>
      );
    }
    if(!fontLoaded){
      return(
        <Container style={styles.container} >
          <Content style={styles.content}>
            <ActivityIndicator style={styles.indicator} 
            size={'large'}
						color="black"
            />
          </Content>
        </Container>
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
        <View style={styles.header}>
        </View>
      </Header>
    <Content style={styles.content}  scrollEnabled={true}>
      <Row>
        <Text style={styles.h1Text}> Recent News </Text> 
      </Row>
      <Row style={{ paddingTop: 15, paddingBottom: 15 }}>
          {articles !== undefined && 
          <HomescreenCard articles={articles} />}
      </Row>
      </Content>
      <Footer>
            <PageFooter nav={this.props.navigation}/>  
      </Footer>
    </Container>
    );
  }
}

