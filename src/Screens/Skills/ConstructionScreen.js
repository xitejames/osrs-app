import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
} from "react-native";
import {
	Container,
	Content,
	Header,
    Footer,
    Item,
    Label,
	Input,
	Col,
	Row
 } from 'native-base'
import cUser  from '../../Classes/CurrentUser';
import Levels from '../../Classes/levelbrackets';
import styles from '../../Styles/style'
import { PageFooter } from '../../Components/Footer'
import { navigationOptions } from '../../Components/Headers/header'

export default class ConstructionScreen extends React.Component {
    static navigationOptions = navigationOptions

    constructor(props) {
        super(props);
        this.state = {
            levelToGet: '',
            experianceToGet: '',
            currentLevel:'',
            currentExperience: '',
            itemCurrent: {},
        };
        
        this.state.currentLevel = cUser.findSkillLevel("Construction");
        this.state.currentExperience = cUser.findSkillExperience("Construction");
        this.state.levelToGet = cUser.findSkillLevel("Construction");
        this.state.experianceToGet = cUser.findSkillExperience("Construction");
        this.updateSkill();

    }


    updateSkill(){
        Levels.setCurrentSkill('Construction');
        this.state.itemCurrent = Levels.getCurrentSkillTasks();
    }

    resetAll(){
        this.state.currentLevel = cUser.findSkillLevel("Construction");
        this.state.currentExperience = cUser.findSkillExperience("Construction");
        this.state.levelToGet = cUser.findSkillLevel("Construction");
        this.state.experianceToGet = cUser.findSkillExperience("Construction");
        this.updateSkill();
    }

    render() {
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
                <Content style={styles.content}>
					<Item stackedLabel={true}>
						<Label style={styles.text} >
						Current Level 
						</Label>
                        <View style={styles.searchInputContainer}>
                            <Input
                                placeholder="Enter Level..."
                                value={this.state.currentLevel}
                                onChangeText={(currentLevel) => {
                                    this.setState({ currentLevel });
                                    this.setState({ currentExperience: Levels.findOverallXpByLevel(currentLevel) })
                                }}
                                placeholderTextColor="#FFFF00"
                                style={styles.searchInput}
                            />
                        </View>
					</Item>
                    <Item stackedLabel={true}>
						<Label style={styles.text} >
						Current Experience 
						</Label>
                        <View style={styles.searchInputContainer}>
                            <Input
                                placeholder="Enter Experience..."
                                value={this.state.currentExperience}
                                onChangeText={(currentExperience) => {
                                    this.setState({ currentExperience });
                                    this.setState({ currentLevel: Levels.findOverallLevelByXp(currentExperience) })
                                }}
                                placeholderTextColor="#FFFF00"
                                style={styles.searchInput}
                            />
                        </View>
					</Item>
                    <Item stackedLabel={true}>
						<Label style={styles.text} >
						Level to get
						</Label>
                        <View style={styles.searchInputContainer}>
                            <Input
                                placeholder="Enter Level to get..."
                                value={this.state.levelToGet}
                                onChangeText={(levelToGet) => {
                                    this.setState({ levelToGet });
                                    this.setState({ experianceToGet: Levels.findOverallXpByLevel(levelToGet) })
                                }}
                                placeholderTextColor="#FFFF00"
                                style={styles.searchInput}
                            />
                        </View>
					</Item>
                    <Item stackedLabel={true}>
						<Label style={styles.text} >
						Experience to get 
						</Label>
                        <View style={styles.searchInputContainer}>
                            <Input
                                placeholder="Enter Level..."
                                value={this.state.experianceToGet}
                                onChangeText={(experianceToGet) => {
                                    this.setState({ experianceToGet });
                                    this.setState({ levelToGet: Levels.findOverallLevelByXp(experianceToGet) })
                                }}
                                placeholderTextColor="#FFFF00"
                                style={styles.searchInput}
                            />
                        </View>
					</Item>
                    <FlatList
                        data={this.state.itemCurrent}            
                        extraData={this.state}             
                        renderItem={({ item }) => (                           
                        <Row style={{ margin: 10 }}>
                            <Col>
                                <Text style={styles.text}>Name: {`${item.Name }`} </Text>
                                <Text style={styles.text}>Level to build: {`${item.Level }`}</Text>
                                <Text style={styles.text}>Experience: {`${item.XP }`}</Text>
                                <Text style={styles.text}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName(`${item.Name }`), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                            </Col>
                            <Col>
                                <Image 
                                resizeMode={'contain'}
                                style={styles.itemImage}
                                source={item.Pic} 
                                />
                            </Col>   
                        </Row>                 
                        
                        )}  
                        keyExtractor={item => item.Name}
                    />
                </Content>
                <Footer>
                    <PageFooter nav={this.props.navigation}/>  
                </Footer>
              </Container>
    
            )

    }      

}
