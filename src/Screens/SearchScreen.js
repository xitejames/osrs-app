import React, { Component } from 'react';
import { 
  Content, 
  Footer, 
  Container, 
  Header,
  Row,
  Input,
  Button
} from "native-base";
import { 
  View, 
  Text, 
  ActivityIndicator,
  TouchableOpacity,
  Linking,
  Alert
} from 'react-native'
import { PageFooter } from '../Components/Footer'
import { navigationOptions } from '../Components/Headers/header'
import styles from '../Styles/style'
import wiki from '../api/wiki'

export default class MapScreen extends Component {
	static navigationOptions = navigationOptions

  constructor(props) {
    super(props);
  }
  state = {
    loaded: false,
    searchQuery: ''
  }
  async componentWillMount() {
    this.setState({ loaded: true });
  }

  searchWiki() {
    const query = this.state.searchQuery

    Alert.alert(
      'Wiki Search',
      'Searching for: ' + query,
      [
        {
          text: 'Cancel Wiki Search',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Search', 
        onPress: () => Linking.openURL(wiki.parseForWiki(this.state.searchQuery))},
      ],
      {cancelable: false},
    );
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
      scrollEnabled={false}>
      <Row>
        <View style={styles.searchInputContainer}>
          <Input
            placeholder="Search for a item..."
            value={this.state.searchQuery}
            onSubmitEditing={() => this.searchWiki()}
            onChangeText={(searchQuery) => {
              this.setState({ searchQuery });
            }}
            returnKeyType="search"
            placeholderTextColor="#FFFF00"
            style={styles.searchInputSpecial}
          />
        </View>
      </Row>
      </Content>
      <Footer>
            <PageFooter nav={this.props.navigation}/>  
      </Footer>
    </Container>
    );
  }
}


