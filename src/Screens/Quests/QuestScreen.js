import React, { Component } from 'react';
import { 
  Content, 
  Footer, 
  Container, 
  Header,
  Row,
  Col,
  Item,
 } from "native-base";
import { 
  FlatList,
  View, 
  Text, 
  ActivityIndicator,
  TouchableOpacity,
  Linking
} from 'react-native'
import { PageFooter } from '../../Components/Footer'
import { navigationOptions } from '../../Components/Headers/header'
import styles from '../../Styles/style'
import quests from '../../api/quests'
import wiki from '../../api/wiki'

export default class QuestScreen extends Component {
	static navigationOptions = navigationOptions

  constructor(props) {
    super(props);
  }
  state = {
    loaded: false,
    f2pQuestList: [],
    p2pQuestList: []

  }
  async componentWillMount() {
    const f2p = await quests.findF2pQuests()
    const p2p = await quests.findP2pQuests()
    // console.log('F2p quests: ')
    // console.log(f2p)
    // console.log('P2P quests: ')
    // console.log(p2p)
    this.setState({ loaded: true, f2pQuestList: f2p, p2pQuestList: p2p });
  }

  render() {
    const { loaded, f2pQuestList, p2pQuestList  } = this.state

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
        <Item style={{ height: 20, paddingHorizontal: 10, }} stackedLabel={true}>
          <Row>  
            <Col style={{ width: '30%', alignItems: 'center', paddingLeft: 3 }} >
              <Text style={styles.tableText}>Name</Text>
            </Col>      
            <Col style={{ width: '25%', alignItems: 'center', paddingLeft: 3 }} >
              <Text style={styles.tableText}>Difficulty</Text>
            </Col>     
            <Col style={{ width: '20%', alignItems: 'center', paddingLeft: 3 }} >
              <Text style={styles.tableText}>Length</Text>
            </Col>     
            <Col style={{ width: '20%', alignItems: 'center', paddingLeft: 3 }} >
              <Text style={styles.tableText}>Points</Text>
            </Col>     
          </Row>    
        </Item>
      
      <Content style={styles.content}>
      <Row>  
        <Col style={{ alignItems: 'center', paddingBottom: 20 }} >
          <Text style={styles.textHeader}>Free To Play Quests</Text>
        </Col>    
      </Row>  

      <FlatList
      data={f2pQuestList}            
      renderItem={({ item }) => (   
          <Item style={{ marginBottom: 5 }} stackedLabel={true}>
              <Row>  
                <Col style={{ width: '30%', alignItems: 'center', paddingLeft: 3 }} >
                <TouchableOpacity onPress={()=>{Linking.openURL(wiki.parseForWiki(item.Name))}}>
                  <Text style={styles.tableText}>{`${item.Name}`} </Text>
                </TouchableOpacity>
                </Col>      
                <Col style={{ width: '30%', alignItems: 'center', paddingLeft: 3 }} >
                  <Text style={styles.tableText}>{`${item.Difficulty}`} </Text>
                </Col>     
                <Col style={{ width: '20%', alignItems: 'center', paddingLeft: 3 }} >
                  <Text style={styles.tableText}>{`${item.Length}`} </Text>
                </Col>     
                <Col style={{ width: '20%', alignItems: 'center', paddingLeft: 3 }} >
                  <Text style={styles.tableText}>{`${item.QP}`} </Text>
                </Col>     
              </Row>   
          </Item>

          
          )}  
          keyExtractor={item => item.Name}
      />

      <Row>  
        <Col style={{ alignItems: 'center', paddingVertical: 20 }} >
          <Text style={styles.textHeader}>Members Quests</Text>
        </Col>    
      </Row>  


      <FlatList
      data={p2pQuestList}            
      extraData={this.state}             
      renderItem={({ item }) => (   
        <Item style={{ marginBottom: 5 }} stackedLabel={true}>
          <Row>  
            <Col style={{ width: '30%', alignItems: 'center', paddingLeft: 3 }} >
            <TouchableOpacity onPress={()=>{Linking.openURL(wiki.parseForWiki(item.Name))}}>
              <Text style={styles.tableText}>{`${item.Name}`} </Text>
            </TouchableOpacity>
            </Col>      
            <Col style={{ width: '30%', alignItems: 'center', paddingLeft: 3 }} >
              <Text style={styles.tableText}>{`${item.Difficulty}`} </Text>
            </Col>     
            <Col style={{ width: '20%', alignItems: 'center', paddingLeft: 3 }} >
              <Text style={styles.tableText}>{`${item.Length}`} </Text>
            </Col>     
            <Col style={{ width: '20%', alignItems: 'center', paddingLeft: 3 }} >
              <Text style={styles.tableText}>{`${item.QP}`} </Text>
            </Col>     
          </Row>      
        </Item>
          )}  
          keyExtractor={item => item.Name}
      />

      </Content>
      <Footer>
            <PageFooter nav={this.props.navigation}/>  
      </Footer>
    </Container>
    );
  }
}


