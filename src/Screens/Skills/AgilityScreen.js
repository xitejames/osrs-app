import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    FlatList,
    TouchableOpacity,
} from "react-native";
import cUser  from '../../Classes/CurrentUser';
import Levels from '../../Classes/levelbrackets';
import Icon from 'react-native-vector-icons/MaterialIcons';





export default class AgilityScreen extends React.Component {
    static 	navigationOptions = {
        headerTitle:
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <Image source={require('../../../assets/osrs.png')}
            style={{ maxHeight: 60, maxWidth: 130}} />
            <Text> Agility Screen </Text>		
        </View>,
        
    };	
    
    constructor(props) {
        super(props);
        this.state = {
            levelToGet: '',
            experianceToGet: '',
            currentLevel:'',
            currentExperience: '',
            itemCurrent: {},
            currentImage: '',

        };
        
        this.state.currentLevel = cUser.findSkillLevel("Agility");
        this.state.currentExperience = cUser.findSkillExperience("Agility");
        this.state.levelToGet = cUser.findSkillLevel("Agility");
        this.state.experianceToGet = cUser.findSkillExperience("Agility");
        this.updateSkill();

    }

    updateSkill(){
        Levels.setCurrentSkill('Agility');
        this.state.itemCurrent = Levels.getCurrentSkillTasks();
    }

    findImage(image){
        test = image.split(' ').join('_')
        newUrl = '../../../assets/Skill_Items/Agility/'+test+ '.png'
        this.currentImage = newUrl
        console.log(newUrl)
        return newUrl
    }

    resetAll(){
        this.state.currentLevel = cUser.findSkillLevel("Agility");
        this.state.currentExperience = cUser.findSkillExperience("Agility");
        this.state.levelToGet = cUser.findSkillLevel("Agility");
        this.state.experianceToGet = cUser.findSkillExperience("Agility");
        this.updateSkill();
    }

    render() {
        return (
            <View style={styles.container}
            showsVerticalScrollIndicator={true}>
                <View styles={styles.navBar}>
                    <View style={styles.headItem}>
                        <Text style={styles.textItem}>Agility level: </Text>
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
                        <Text style={styles.textItem} >Agility experience: </Text>
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
                        <Text style={styles.textItem}>Agility level to get: </Text>
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
                        <Text style={styles.textItem}>Agility experience to get: </Text>
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
                            extradata={this.state}                        
                            renderItem={({ item }) => (                          
                            <View style={styles.statBar} >                              
                                
                                <View style={styles.statItem}>
                                        <Text style={styles.textItem}>
                                            Name: {`${item.Name }`}                                             
                                        </Text>
                                        <Text style={styles.textItem}>Level to burn: {`${item.Level }`}</Text>
                                        <Text style={styles.textItem}>Experience: {`${item.XP }`}</Text>
                                        <Text style={styles.textItem}>Actions Left: {
                                            Levels.findActionsToLevel(Levels.findSkillXpByName(`${item.Name }`), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                                </View>  
                                <View style={styles.statImage}>
                                <Image source={require('../../../assets/Skill_Items/Agility/Al_Kharid_Rooftop.png')}/>
                                </View> 
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
    	backgroundColor: '#625341',
	},
	navBar: {

	},
	body: {
		flex: 1
	},
	statBar: {
        flexDirection: 'row',
	},
	statItem: {
        margin: 10,
        flex: 0.5,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    statImage: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headItem: {
        marginLeft: 10,
        marginTop: 5,
        marginRight: 10,
    },
    textItem: {
        fontSize: 15,
		color: '#FF0'    
    },
    inputText: {
        fontSize: 15,   
        backgroundColor: '#625200' 
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
		color: '#FF0'
	},
});