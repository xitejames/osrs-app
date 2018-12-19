import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    ScrollView,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import cUser  from '../components/CurrentUser';
import Levels from '../components/levelbrackets';





export default class MiningScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            levelToGet: '',
            experianceToGet: '',
            currentLevel:'',
            currentExperience: '',
        };
        
        this.state.currentLevel = cUser.findSkillLevel(15);
        this.state.currentExperience = cUser.findSkillExperience(15);
        this.state.levelToGet = cUser.findSkillLevel(15);
        this.state.experianceToGet = cUser.findSkillExperience(15);
        this.updateSkill();

    }

    updateSkill(){
        Levels.setCurrentSkill('Mining');
    }

    resetAll(){
        this.state.currentLevel = cUser.findSkillLevel(15);
        this.state.currentExperience = cUser.findSkillExperience(15);
        this.state.levelToGet = cUser.findSkillLevel(15);
        this.state.experianceToGet = cUser.findSkillExperience(15);
        this.updateSkill();
    }

    render() {
        return (
            <View style={styles.container}
            showsVerticalScrollIndicator={true}>
                <View styles={styles.navBar}>
                    <View>
                        <Text>Mining level: </Text>
                        <TextInput
                        onChangeText={(currentLevel) => {
							this.setState({ currentLevel });
                            this.setState({ currentExperience: Levels.findOverallXpByLevel(currentLevel) })

						}}
                        value={this.state.currentLevel}
                        ></TextInput>
                    </View>
                    <View >
                        <Text>Mining experience: </Text>
                        <TextInput
                        onChangeText={(currentExperience) => {
							this.setState({ currentExperience });
                            this.setState({ currentLevel: Levels.findOverallLevelByXp(currentExperience) })
						}}
                        value={this.state.currentExperience}
                        ></TextInput>
                    </View>
                    <View>
                        <Text>Mining level to get: </Text>
                        <TextInput
                        onChangeText={(levelToGet) => {
							this.setState({ levelToGet });
                            this.setState({ experianceToGet: Levels.findOverallXpByLevel(levelToGet) })
						}}
                        value={this.state.levelToGet}
                        ></TextInput>                    
                    </View>
                    <View >
                        <Text>Mining experience to get: </Text>
                        <TextInput
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
                        <Text style={styles.statText}>Name: Clay </Text>
                        <Text style={styles.statText}>Level to mine: {Levels.findSkillLevelByName('Clay')}</Text>
                        <Text style={styles.statText}>Experience: {Levels.findSkillXpByName('Clay')}</Text>
                        <Text style={styles.statText}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Clay'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statText}>Name: Rune essence </Text>
                        <Text style={styles.statText}>Level to mine: {Levels.findSkillLevelByName('Rune essence')}</Text>
                        <Text style={styles.statText}>Experience: {Levels.findSkillXpByName('Rune essence')}</Text>
                        <Text style={styles.statText}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Rune essence'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statText}>Name: Copper </Text>
                        <Text style={styles.statText}>Level to mine: {Levels.findSkillLevelByName('Copper')}</Text>
                        <Text style={styles.statText}>Experience: {Levels.findSkillXpByName('Copper')}</Text>
                        <Text style={styles.statText}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Copper'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>

                    <View style={styles.statItem}>
                        <Text style={styles.statText}>Name: Tin </Text>
                        <Text style={styles.statText}>Level to mine: {Levels.findSkillLevelByName('Tin')}</Text>
                        <Text style={styles.statText}>Experience: {Levels.findSkillXpByName('Tin')}</Text>
                        <Text style={styles.statText}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Tin'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statText}>Name: Limetone </Text>
                        <Text style={styles.statText}>Level to mine: {Levels.findSkillLevelByName('Limetone')}</Text>
                        <Text style={styles.statText}>Experience: {Levels.findSkillXpByName('Limetone')}</Text>
                        <Text style={styles.statText}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Limetone'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statText}>Name: Iron </Text>
                        <Text style={styles.statText}>Level to mine: {Levels.findSkillLevelByName('Iron')}</Text>
                        <Text style={styles.statText}>Experience: {Levels.findSkillXpByName('Iron')}</Text>
                        <Text style={styles.statText}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Iron'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statText}>Name: Silver </Text>
                        <Text style={styles.statText}>Level to mine: {Levels.findSkillLevelByName('Silver')}</Text>
                        <Text style={styles.statText}>Experience: {Levels.findSkillXpByName('Silver')}</Text>
                        <Text style={styles.statText}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Silver'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statText}>Name: Pure essence </Text>
                        <Text style={styles.statText}>Level to mine: {Levels.findSkillLevelByName('Pure essence')}</Text>
                        <Text style={styles.statText}>Experience: {Levels.findSkillXpByName('Pure essence')}</Text>
                        <Text style={styles.statText}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Pure essence'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statText}>Name: Coal </Text>
                        <Text style={styles.statText}>Level to mine: {Levels.findSkillLevelByName('Coal')}</Text>
                        <Text style={styles.statText}>Experience: {Levels.findSkillXpByName('Coal')}</Text>
                        <Text style={styles.statText}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Coal'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>

                    <View style={styles.statItem}>
                        <Text style={styles.statText}>Name: Sandstone (5kg) </Text>
                        <Text style={styles.statText}>Level to mine: {Levels.findSkillLevelByName('Sandstone (5kg)')}</Text>
                        <Text style={styles.statText}>Experience: {Levels.findSkillXpByName('Sandstone (5kg)')}</Text>
                        <Text style={styles.statText}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Sandstone (5kg)'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statText}>Name: Sandstone (10kg) </Text>
                        <Text style={styles.statText}>Level to mine: {Levels.findSkillLevelByName('Sandstone (10kg)')}</Text>
                        <Text style={styles.statText}>Experience: {Levels.findSkillXpByName('Sandstone (10kg)')}</Text>
                        <Text style={styles.statText}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Sandstone (10kg)'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statText}>Name: Gem mining </Text>
                        <Text style={styles.statText}>Level to mine: {Levels.findSkillLevelByName('Gem mining')}</Text>
                        <Text style={styles.statText}>Experience: {Levels.findSkillXpByName('Gem mining')}</Text>
                        <Text style={styles.statText}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Gem mining'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>

                    <View style={styles.statItem}>
                        <Text style={styles.statText}>Name: Gold </Text>
                        <Text style={styles.statText}>Level to mine: {Levels.findSkillLevelByName('Gold')}</Text>
                        <Text style={styles.statText}>Experience: {Levels.findSkillXpByName('Gold')}</Text>
                        <Text style={styles.statText}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Gold'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statText}>Name: Granite (500g) </Text>
                        <Text style={styles.statText}>Level to mine: {Levels.findSkillLevelByName('Granite (500g)')}</Text>
                        <Text style={styles.statText}>Experience: {Levels.findSkillXpByName('Granite (500g)')}</Text>
                        <Text style={styles.statText}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Granite (500g)'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statText}>Name: Granite (2kg) </Text>
                        <Text style={styles.statText}>Level to mine: {Levels.findSkillLevelByName('Granite (2kg)')}</Text>
                        <Text style={styles.statText}>Experience: {Levels.findSkillXpByName('Granite (2kg)')}</Text>
                        <Text style={styles.statText}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Granite (2kg)'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>

                <View style={styles.statItem}>
                        <Text style={styles.statText}>Name: Granite (5kg) </Text>
                        <Text style={styles.statText}>Level to mine: {Levels.findSkillLevelByName('Granite (5kg)')}</Text>
                        <Text style={styles.statText}>Experience: {Levels.findSkillXpByName('Granite (5kg)')}</Text>
                        <Text style={styles.statText}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Granite (5kg)'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statText}>Name: Mithril </Text>
                        <Text style={styles.statText}>Level to mine: {Levels.findSkillLevelByName('Mithril')}</Text>
                        <Text style={styles.statText}>Experience: {Levels.findSkillXpByName('Mithril')}</Text>
                        <Text style={styles.statText}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Mithril'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statText}>Name: Adamanite </Text>
                        <Text style={styles.statText}>Level to mine: {Levels.findSkillLevelByName('Adamanite')}</Text>
                        <Text style={styles.statText}>Experience: {Levels.findSkillXpByName('Adamanite')}</Text>
                        <Text style={styles.statText}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Adamanite'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                  
                    <View style={styles.statItem}>
                        <Text style={styles.statText}>Name: Runeite </Text>
                        <Text style={styles.statText}>Level to mine: {Levels.findSkillLevelByName('Runeite')}</Text>
                        <Text style={styles.statText}>Experience: {Levels.findSkillXpByName('Runeite')}</Text>
                        <Text style={styles.statText}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Runeite'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statText}>Name: Amethyst </Text>
                        <Text style={styles.statText}>Level to mine: {Levels.findSkillLevelByName('Amethyst')}</Text>
                        <Text style={styles.statText}>Experience: {Levels.findSkillXpByName('Amethyst')}</Text>
                        <Text style={styles.statText}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Amethyst'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>

                </ScrollView>
                
            </View>             
        );
    }      

}
const styles = StyleSheet.create({
	container: {
        flex: 1,
        flexDirection: 'row',
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

	},
	statText: {

	},
});