import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    ScrollView,
    FlatList,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import cUser  from '../Classes/CurrentUser';
import Levels from '../Classes/levelbrackets';





export default class MagicScreen extends React.Component {
    static 	navigationOptions = {
        headerTitle:
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <Image source={require('../../assets/osrs.png')}
            style={{ maxHeight: 60, maxWidth: 130}} />
            <Text> Magic Screen </Text>		
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
        };
        
        this.state.currentLevel = cUser.findSkillLevel("Magic");
        this.state.currentExperience = cUser.findSkillExperience("Magic");
        this.state.levelToGet = cUser.findSkillLevel("Magic");
        this.state.experianceToGet = cUser.findSkillExperience("Magic");
        this.updateSkill();

    }


    updateSkill(){
        Levels.setCurrentSkill('Magic');
        this.state.itemCurrent = Levels.getCurrentSkillTasks();
    }

    resetAll(){
        this.state.currentLevel = cUser.findSkillLevel("Magic");
        this.state.currentExperience = cUser.findSkillExperience("Magic");
        this.state.levelToGet = cUser.findSkillLevel("Magic");
        this.state.experianceToGet = cUser.findSkillExperience("Magic");
        this.updateSkill();
    }

    render() {
        return (
            <View style={styles.container}
            showsVerticalScrollIndicator={true}>
                <View styles={styles.navBar}>
                    <View style={styles.headItem}>
                        <Text style={styles.textItem}>Magic level: </Text>
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
                        <Text style={styles.textItem} >Magic experience: </Text>
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
                        <Text style={styles.textItem}>Magic level to get: </Text>
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
                        <Text style={styles.textItem}>Magic experience to get: </Text>
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
        color: '#FF0'      

    },
    inputText: {
        fontSize: 15,   
        backgroundColor: '#625200' 
    },
});