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
import miningXP from '../components/Skills/Mining';




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

    }

    render() {
        return (
            <View style={styles.container}
            showsVerticalScrollIndicator={true}>
                <View styles={styles.navBar}>
                    <View>
                        <Text>Mining level: </Text>
                        <TextInput
                        placeholderTextColor='grey'
                        placeholder={this.state.currentLevel}
                        value={this.state.currentLevel}
                        ></TextInput>
                    </View>
                    <View >
                        <Text>Mining experience: </Text>
                        <TextInput
                        placeholderTextColor='grey'
                        placeholder={this.state.currentExperience}
                        value={this.state.currentExperience}
                        ></TextInput>
                    </View>
                    <View>
                        <Text>Mining level to get: </Text>
                        <TextInput
                        onChangeText={(levelToGet) => {
							this.setState({ levelToGet });
						}}
                        placeholderTextColor='grey'
                        placeholder={this.state.levelToGet}
                        value={this.state.levelToGet}
                        ></TextInput>                    
                    </View>
                    <View >
                        <Text>Mining experience to get: </Text>
                        <TextInput
                        onChangeText={(experianceToGet) => {
							this.setState({ experianceToGet });
						}}
                        placeholderTextColor='grey'
                        placeholder={this.state.experianceToGet}
                        value={this.state.experianceToGet}
                        ></TextInput>
                    </View>
                    </View>

                <ScrollView> 
                    <View styles={styles.statBar}>
                        <View style={styles.statItem}>
                            <Text style={styles.statText}>Name: Clay </Text>
                            <Text style={styles.statText}>Level to mine: {miningXP.findLevelByName('Clay')}</Text>
                            <Text style={styles.statText}>Experience: {miningXP.findXpByName('Clay')}</Text>
                            <Text style={styles.statText}>Actions Left: {miningXP.findActionsToLevel( miningXP.findXpByName('Clay'), this.state.currentExperience ,this.state.levelToGet)}</Text>                        
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statText}>Name: Rune essence </Text>
                            <Text style={styles.statText}>Level to mine: {miningXP.findLevelByName('Rune essence')}</Text>
                            <Text style={styles.statText}>Experience: {miningXP.findXpByName('Rune essence')}</Text>
                            <Text style={styles.statText}>Actions Left: {miningXP.findActionsToLevel( miningXP.findXpByName('Rune essence'), this.state.currentExperience ,this.state.levelToGet)}</Text>                        
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statText}>Name: Copper </Text>
                            <Text style={styles.statText}>Level to mine: {miningXP.findLevelByName('Copper')}</Text>
                            <Text style={styles.statText}>Experience: {miningXP.findXpByName('Copper')}</Text>
                            <Text style={styles.statText}>Actions Left: {miningXP.findActionsToLevel( miningXP.findXpByName('Copper'), this.state.currentExperience ,this.state.levelToGet)}</Text>                        
                        </View>
                    </View>
                    <View styles={styles.statBar}>
                        <View style={styles.statItem}>
                            <Text style={styles.statText}>Name: Tin </Text>
                            <Text style={styles.statText}>Level to mine: {miningXP.findLevelByName('Tin')}</Text>
                            <Text style={styles.statText}>Experience: {miningXP.findXpByName('Tin')}</Text>
                            <Text style={styles.statText}>Actions Left: {miningXP.findActionsToLevel( miningXP.findXpByName('Tin'), this.state.currentExperience ,this.state.levelToGet)}</Text>                        
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statText}>Name: Limetone </Text>
                            <Text style={styles.statText}>Level to mine: {miningXP.findLevelByName('Limetone')}</Text>
                            <Text style={styles.statText}>Experience: {miningXP.findXpByName('Limetone')}</Text>
                            <Text style={styles.statText}>Actions Left: {miningXP.findActionsToLevel( miningXP.findXpByName('Limetone'), this.state.currentExperience ,this.state.levelToGet)}</Text>                        
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statText}>Name: Iron </Text>
                            <Text style={styles.statText}>Level to mine: {miningXP.findLevelByName('Iron')}</Text>
                            <Text style={styles.statText}>Experience: {miningXP.findXpByName('Iron')}</Text>
                            <Text style={styles.statText}>Actions Left: {miningXP.findActionsToLevel( miningXP.findXpByName('Iron'), this.state.currentExperience ,this.state.levelToGet)}</Text>                        
                        </View>
                    </View>
                    <View styles={styles.statBar}>
                        <View style={styles.statItem}>
                            <Text style={styles.statText}>Name: Silver </Text>
                            <Text style={styles.statText}>Level to mine: {miningXP.findLevelByName('Silver')}</Text>
                            <Text style={styles.statText}>Experience: {miningXP.findXpByName('Silver')}</Text>
                            <Text style={styles.statText}>Actions Left: {miningXP.findActionsToLevel( miningXP.findXpByName('Silver'), this.state.currentExperience ,this.state.levelToGet)}</Text>                        
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statText}>Name: Pure essence </Text>
                            <Text style={styles.statText}>Level to mine: {miningXP.findLevelByName('Pure essence')}</Text>
                            <Text style={styles.statText}>Experience: {miningXP.findXpByName('Pure essence')}</Text>
                            <Text style={styles.statText}>Actions Left: {miningXP.findActionsToLevel( miningXP.findXpByName('Pure essence'), this.state.currentExperience ,this.state.levelToGet)}</Text>                        
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statText}>Name: Coal </Text>
                            <Text style={styles.statText}>Level to mine: {miningXP.findLevelByName('Coal')}</Text>
                            <Text style={styles.statText}>Experience: {miningXP.findXpByName('Coal')}</Text>
                            <Text style={styles.statText}>Actions Left: {miningXP.findActionsToLevel( miningXP.findXpByName('Coal'), this.state.currentExperience ,this.state.levelToGet)}</Text>                        
                        </View>
                    </View>
                    <View styles={styles.statBar}>
                        <View style={styles.statItem}>
                            <Text style={styles.statText}>Name: Sandstone (5kg) </Text>
                            <Text style={styles.statText}>Level to mine: {miningXP.findLevelByName('Sandstone (5kg)')}</Text>
                            <Text style={styles.statText}>Experience: {miningXP.findXpByName('Sandstone (5kg)')}</Text>
                            <Text style={styles.statText}>Actions Left: {miningXP.findActionsToLevel( miningXP.findXpByName('Sandstone (5kg)'), this.state.currentExperience ,this.state.levelToGet)}</Text>                        
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statText}>Name: Sandstone (10kg) </Text>
                            <Text style={styles.statText}>Level to mine: {miningXP.findLevelByName('Sandstone (10kg)')}</Text>
                            <Text style={styles.statText}>Experience: {miningXP.findXpByName('Sandstone (10kg)')}</Text>
                            <Text style={styles.statText}>Actions Left: {miningXP.findActionsToLevel( miningXP.findXpByName('Sandstone (10kg)'), this.state.currentExperience ,this.state.levelToGet)}</Text>                        
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statText}>Name: Gem mining </Text>
                            <Text style={styles.statText}>Level to mine: {miningXP.findLevelByName('Gem mining')}</Text>
                            <Text style={styles.statText}>Experience: {miningXP.findXpByName('Gem mining')}</Text>
                            <Text style={styles.statText}>Actions Left: {miningXP.findActionsToLevel( miningXP.findXpByName('Gem mining'), this.state.currentExperience ,this.state.levelToGet)}</Text>                        
                        </View>
                    </View>
                    <View styles={styles.statBar}>
                        <View style={styles.statItem}>
                            <Text style={styles.statText}>Name: Gold </Text>
                            <Text style={styles.statText}>Level to mine: {miningXP.findLevelByName('Gold')}</Text>
                            <Text style={styles.statText}>Experience: {miningXP.findXpByName('Gold')}</Text>
                            <Text style={styles.statText}>Actions Left: {miningXP.findActionsToLevel( miningXP.findXpByName('Gold'), this.state.currentExperience ,this.state.levelToGet)}</Text>                        
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statText}>Name: Granite (500g) </Text>
                            <Text style={styles.statText}>Level to mine: {miningXP.findLevelByName('Granite (500g)')}</Text>
                            <Text style={styles.statText}>Experience: {miningXP.findXpByName('Granite (500g)')}</Text>
                            <Text style={styles.statText}>Actions Left: {miningXP.findActionsToLevel( miningXP.findXpByName('Granite (500g)'), this.state.currentExperience ,this.state.levelToGet)}</Text>                        
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statText}>Name: Granite (2kg) </Text>
                            <Text style={styles.statText}>Level to mine: {miningXP.findLevelByName('Granite (2kg)')}</Text>
                            <Text style={styles.statText}>Experience: {miningXP.findXpByName('Granite (2kg)')}</Text>
                            <Text style={styles.statText}>Actions Left: {miningXP.findActionsToLevel( miningXP.findXpByName('Granite (2kg)'), this.state.currentExperience ,this.state.levelToGet)}</Text>                        
                        </View>
                    </View>                    
                    <View styles={styles.statBar}>
                    <View style={styles.statItem}>
                            <Text style={styles.statText}>Name: Granite (5kg) </Text>
                            <Text style={styles.statText}>Level to mine: {miningXP.findLevelByName('Granite (5kg)')}</Text>
                            <Text style={styles.statText}>Experience: {miningXP.findXpByName('Granite (5kg)')}</Text>
                            <Text style={styles.statText}>Actions Left: {miningXP.findActionsToLevel( miningXP.findXpByName('Granite (5kg)'), this.state.currentExperience ,this.state.levelToGet)}</Text>                        
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statText}>Name: Mithril </Text>
                            <Text style={styles.statText}>Level to mine: {miningXP.findLevelByName('Mithril')}</Text>
                            <Text style={styles.statText}>Experience: {miningXP.findXpByName('Mithril')}</Text>
                            <Text style={styles.statText}>Actions Left: {miningXP.findActionsToLevel( miningXP.findXpByName('Mithril'), this.state.currentExperience ,this.state.levelToGet)}</Text>                        
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statText}>Name: Adamanite </Text>
                            <Text style={styles.statText}>Level to mine: {miningXP.findLevelByName('Adamanite')}</Text>
                            <Text style={styles.statText}>Experience: {miningXP.findXpByName('Adamanite')}</Text>
                            <Text style={styles.statText}>Actions Left: {miningXP.findActionsToLevel( miningXP.findXpByName('Adamanite'), this.state.currentExperience ,this.state.levelToGet)}</Text>                        
                        </View>
                    </View>
                    <View styles={styles.statBar}>                    
                        <View style={styles.statItem}>
                            <Text style={styles.statText}>Name: Runeite </Text>
                            <Text style={styles.statText}>Level to mine: {miningXP.findLevelByName('Runeite')}</Text>
                            <Text style={styles.statText}>Experience: {miningXP.findXpByName('Runeite')}</Text>
                            <Text style={styles.statText}>Actions Left: {miningXP.findActionsToLevel( miningXP.findXpByName('Runeite'), this.state.currentExperience ,this.state.levelToGet)}</Text>                        
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statText}>Name: Amethyst </Text>
                            <Text style={styles.statText}>Level to mine: {miningXP.findLevelByName('Amethyst')}</Text>
                            <Text style={styles.statText}>Experience: {miningXP.findXpByName('Amethyst')}</Text>
                            <Text style={styles.statText}>Actions Left: {miningXP.findActionsToLevel( miningXP.findXpByName('Amethyst'), this.state.currentExperience ,this.state.levelToGet)}</Text>                        
                        </View>
                    </View>
                </ScrollView>
                
            </View>             
        );
    }

    actionsLeftLevel(action){
        let actionsLeft = 0;
        let xp = miningXP.findXpByName(action);
        miningXP.findActionsToLevel(xp, this.currentExperience, this.levelToGet);

        return actionsLeft;
    };
    
    matchXpLevel(type, num){
        if(type == 'XP'){
            console.log(levels.findLevelByXp(num))
            this.setState({ levelToGet: levels.findLevelByXp(num)})
        } else if(type == 'Level'){ 
            console.log(levels.findXpByLevel(num))
            this.setState({ experianceToGet: levels.findXpByLevel(num)})
        }

        

    
    
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