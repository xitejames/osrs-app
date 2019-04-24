import React, { Component } from 'react';
import { 
  Content, 
  Footer, 
  Container, 
  Header 
} from "native-base";
import { 
  View, 
  Text, 
  ActivityIndicator 
} from 'react-native'
import { PageFooter } from '../Components/Footer'
import { navigationOptions } from '../Components/Headers/header'
import styles from '../Styles/style'
import { PictureZoom } from '../Components/PictureZoom/PictureZoom'

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
    const { loaded} = this.state
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

    return(
    <Container style={styles.container}>
      <Header
          transparent
          translucent={true}
          noShadow={true}
          iosBarStyle="light-content"
        >
        <View
          style={styles.header}
        >
        </View>
      </Header>
      <Content 
      scrollEnabled={false}
      style={styles.content}>
          <PictureZoom />
      </Content>
      <Footer>
            <PageFooter nav={this.props.navigation}/>  
      </Footer>
    </Container>
    );
  }
}


