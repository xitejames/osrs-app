import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import cUser  from '../../Classes/CurrentUser';
import Levels from '../../Classes/levelbrackets';





export default class HerbloreScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            levelToGet: '',
            experianceToGet: '',
            currentLevel:'',
            currentExperience: '',
            itemCurrent: {},
        };
        
        this.state.currentLevel = cUser.findSkillLevel("Herblore");
        this.state.currentExperience = cUser.findSkillExperience("Herblore");
        this.state.levelToGet = cUser.findSkillLevel("Herblore");
        this.state.experianceToGet = cUser.findSkillExperience("Herblore");
        this.updateSkill();

    }


    updateSkill(){
        Levels.setCurrentSkill('Herblore');
        this.state.itemCurrent = Levels.getCurrentSkillTasks();
    }

    resetAll(){
        this.state.currentLevel = cUser.findSkillLevel("Herblore");
        this.state.currentExperience = cUser.findSkillExperience("Herblore");
        this.state.levelToGet = cUser.findSkillLevel("Herblore");
        this.state.experianceToGet = cUser.findSkillExperience("Herblore");
        this.updateSkill();
    }

    render() {
        return (
            <View style={styles.container}
            showsVerticalScrollIndicator={true}>
                <View styles={styles.navBar}>
                    <View style={styles.headItem}>
                        <Text style={styles.textItem}>Herblore level: </Text>
                        <TextInput
                        style={styles.inputText}                         
                        onChangeText={(currentLevel) => {
							this.setState({ currentLevel });
                            this.setState({ currentExperience: Levels.findOverallXpByLevel(currentLevel) })
						}}
                        value={this.state.currentLevel}
                        ></TextInput>
                    </View>
                    <View style={styles.headItem}>
                        <Text style={styles.textItem} >Herblore experience: </Text>
                        <TextInput
                        style={styles.inputText}
                        onChangeText={(currentExperience) => {
							this.setState({ currentExperience });
                            this.setState({ currentLevel: Levels.findOverallLevelByXp(currentExperience) })
						}}
                        value={this.state.currentExperience}
                        ></TextInput>
                    </View>
                    <View style={styles.headItem}>
                        <Text style={styles.textItem}>Herblore level to get: </Text>
                        <TextInput 
                        style={styles.inputText}
                        onChangeText={(levelToGet) => {
							this.setState({ levelToGet });
                            this.setState({ experianceToGet: Levels.findOverallXpByLevel(levelToGet) })
						}}
                        value={this.state.levelToGet}
                        ></TextInput>                    
                    </View>
                    <View style={styles.headItem}>
                        <Text style={styles.textItem}>Herblore experience to get: </Text>
                        <TextInput
                        style={styles.inputText}
                        onChangeText={(experianceToGet) => {
							this.setState({ experianceToGet });
                            this.setState({ levelToGet: Levels.findOverallLevelByXp(experianceToGet) })
						}}
                        value={this.state.experianceToGet}
                        ></TextInput>
                    </View>
                </View>

                <View style={styles.container}>   
                    <FlatList
                        data={this.state.itemCurrent}       
                        extraData={this.state}                  
                        renderItem={({ item }) => (                           
                        <View style={styles.statItem}>
                                <Text style={styles.textItem}>Name: {`${item.Name }`} </Text>
                                <Text style={styles.textItem}>Level to mine: {`${item.Level }`}</Text>
                                <Text style={styles.textItem}>Experience: {`${item.XP }`}</Text>
                                <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName(`${item.Name }`), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                        </View>                
                        
                        )}  
                        keyExtractor={item => item.Name}
                    />
                </View>
                <View style={styles.tabBar}>
					<TouchableOpacity style={styles.tabItem}
						onPress={() => this.props.navigation.navigate('Home')}>			
						<Icon name="home" size={30} />
						<Text style={styles.tabTitle}>Home</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.tabItem}
						onPress={() => this.props.navigation.navigate('Quest')}>			
						<Icon name="book" size={30} />
						<Text style={styles.tabTitle}>Quests</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.tabItem}
						onPress={() => this.props.navigation.navigate('Skill')}>			
						<Icon name="show-chart" size={30} />
						<Text style={styles.tabTitle}>Skills</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.tabItem}
						onPress={() => this.props.navigation.navigate('Exchange')}>			
						<Icon name="shop" size={30} />
						<Text style={styles.tabTitle}>GE prices</Text>
					</TouchableOpacity>
				</View>		
            </View>             
        );
    }      

}
const styles = StyleSheet.create({
	container: {
        flex: 1,
        flexDirection: 'column',
    	backgroundColor: '#fff',
	},
	navBar: {

	},
	body: {
		flex: 1
	},
	statBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
	},
	statItem: {
        margin: 10,
    },
    headItem: {
        marginLeft: 10,
        marginTop: 5,
        marginRight: 10,
    },
    textItem: {
        fontSize: 15,    
        color: '#000'      

    },
    inputText: {
        fontSize: 15,   
        backgroundColor: '#add8e6' 
    },
    tabBar: {
		height: 60,
		borderTopWidth: 0.5,
		flexDirection: 'row',
		justifyContent: 'space-around',
		position: 'absolute',
		left:0,
		bottom:0,
		right:0,
	},
	tabItem: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	tabTitle: {
		paddingTop: 4,
		fontSize: 11,
		color: '#000'
	},
});