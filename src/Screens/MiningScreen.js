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





export default class MiningScreen extends React.Component {
    static 	navigationOptions = {
        headerTitle:
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <Image source={require('../../assets/osrs.png')}
            style={{ maxHeight: 60, maxWidth: 130}} />
            <Text> MiningPage </Text>		
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
        
        this.state.currentLevel = cUser.findSkillLevel("Mining");
        this.state.currentExperience = cUser.findSkillExperience("Mining");
        this.state.levelToGet = cUser.findSkillLevel("Mining");
        this.state.experianceToGet = cUser.findSkillExperience("Mining");
        this.updateSkill();

    }

    updateSkill(){
        Levels.setCurrentSkill('Mining');
    }

    resetAll(){
        this.state.currentLevel = cUser.findSkillLevel("Mining");
        this.state.currentExperience = cUser.findSkillExperience("Mining");
        this.state.levelToGet = cUser.findSkillLevel("Mining");
        this.state.experianceToGet = cUser.findSkillExperience("Mining");
        this.updateSkill();
    }

    render() {
        return (
            <View style={styles.container}
            showsVerticalScrollIndicator={true}>
                <View styles={styles.navBar}>
                    <View style={styles.headItem}>
                        <Text style={styles.textItem}>Mining level: </Text>
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
                        <Text style={styles.textItem} >Mining experience: </Text>
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
                        <Text style={styles.textItem}>Mining level to get: </Text>
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
                        <Text style={styles.textItem}>Mining experience to get: </Text>
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
                        <Text style={styles.textItem}>Name: Clay </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Clay')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Clay')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Clay'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Rune essence </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Rune essence')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Rune essence')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Rune essence'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Copper </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Copper')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Copper')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Copper'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>

                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Tin </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Tin')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Tin')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Tin'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Limestone </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Limestone')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Limestone')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Limestone'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Iron </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Iron')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Iron')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Iron'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Silver </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Silver')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Silver')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Silver'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Pure essence </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Pure essence')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Pure essence')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Pure essence'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Coal </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Coal')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Coal')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Coal'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>

                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Sandstone (5kg) </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Sandstone (5kg)')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Sandstone (5kg)')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Sandstone (5kg)'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Sandstone (10kg) </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Sandstone (10kg)')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Sandstone (10kg)')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Sandstone (10kg)'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Gem mining </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Gem mining')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Gem mining')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Gem mining'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>

                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Gold </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Gold')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Gold')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Gold'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Granite (500g) </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Granite (500g)')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Granite (500g)')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Granite (500g)'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Granite (2kg) </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Granite (2kg)')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Granite (2kg)')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Granite (2kg)'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>

                <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Granite (5kg) </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Granite (5kg)')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Granite (5kg)')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Granite (5kg)'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Mithril </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Mithril')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Mithril')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Mithril'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Adamanite </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Adamanite')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Adamanite')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Adamanite'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                  
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Runeite </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Runeite')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Runeite')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Runeite'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Amethyst </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Amethyst')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Amethyst')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Amethyst'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
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