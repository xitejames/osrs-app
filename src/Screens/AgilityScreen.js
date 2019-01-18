import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    ScrollView,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import cUser  from '../components/CurrentUser';
import Levels from '../components/levelbrackets';





export default class AgilityScreen extends React.Component {
    static 	navigationOptions = {
        headerTitle:
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <Image source={require('../../assets/osrs.png')}
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
        };
        
        this.state.currentLevel = cUser.findSkillLevel("Agility");
        this.state.currentExperience = cUser.findSkillExperience("Agility");
        this.state.levelToGet = cUser.findSkillLevel("Agility");
        this.state.experianceToGet = cUser.findSkillExperience("Agility");
        this.updateSkill();

    }

    updateSkill(){
        Levels.setCurrentSkill('Agility');
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

                <ScrollView> 
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Gnome Stronghold  </Text>
                        <Text style={styles.textItem}>Level to use: {Levels.findSkillLevelByName('Gnome Stronghold ')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Gnome Stronghold ')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Gnome Stronghold '), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Draynor Village Rooftop </Text>
                        <Text style={styles.textItem}>Level to use: {Levels.findSkillLevelByName('Draynor Village Rooftop')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Draynor Village Rooftop')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Draynor Village Rooftop'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Al Kharid Rooftop </Text>
                        <Text style={styles.textItem}>Level to use: {Levels.findSkillLevelByName('Al Kharid Rooftop')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Al Kharid Rooftop')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Al Kharid Rooftop'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>

                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Varrock Rooftop </Text>
                        <Text style={styles.textItem}>Level to use: {Levels.findSkillLevelByName('Varrock Rooftop')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Varrock Rooftop')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Varrock Rooftop'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Penguin  </Text>
                        <Text style={styles.textItem}>Level to use: {Levels.findSkillLevelByName('Penguin ')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Penguin ')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Penguin '), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Barbarian Outpost </Text>
                        <Text style={styles.textItem}>Level to use: {Levels.findSkillLevelByName('Barbarian Outpost')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Barbarian Outpost')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Barbarian Outpost'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Canifis Rooftop </Text>
                        <Text style={styles.textItem}>Level to use: {Levels.findSkillLevelByName('Canifis Rooftop')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Canifis Rooftop')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Canifis Rooftop'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Ape Atoll </Text>
                        <Text style={styles.textItem}>Level to use: {Levels.findSkillLevelByName('Ape Atoll')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Ape Atoll')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Ape Atoll'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Falador Rooftop </Text>
                        <Text style={styles.textItem}>Level to use: {Levels.findSkillLevelByName('Falador Rooftop')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Falador Rooftop')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Falador Rooftop'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>

                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Wilderness </Text>
                        <Text style={styles.textItem}>Level to use: {Levels.findSkillLevelByName('Wilderness')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Wilderness')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Wilderness'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>

                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Seers Village Rooftop </Text>
                        <Text style={styles.textItem}>Level to use: {Levels.findSkillLevelByName('Seers Village Rooftop')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Seers Village Rooftop')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Seers Village Rooftop'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>

                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Werewolf  </Text>
                        <Text style={styles.textItem}>Level to use: {Levels.findSkillLevelByName('Werewolf ')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Werewolf ')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Werewolf '), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Pollnivneach Rooftop </Text>
                        <Text style={styles.textItem}>Level to use: {Levels.findSkillLevelByName('Pollnivneach Rooftop')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Pollnivneach Rooftop')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Pollnivneach Rooftop'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                  
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Rellekka Rooftop </Text>
                        <Text style={styles.textItem}>Level to use: {Levels.findSkillLevelByName('Rellekka Rooftop')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Rellekka Rooftop')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Rellekka Rooftop'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Ardougne Rooftop </Text>
                        <Text style={styles.textItem}>Level to use: {Levels.findSkillLevelByName('Ardougne Rooftop')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Ardougne Rooftop')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Ardougne Rooftop'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                </ScrollView>
                
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
    },
    inputText: {
        fontSize: 15,   
        backgroundColor: '#625200' 
    },
});