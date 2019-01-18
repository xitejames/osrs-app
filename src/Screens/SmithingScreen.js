import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    ScrollView,
} from "react-native";
import Icon from'react-native-vector-icons/MaterialIcons';
import cUser  from'../components/CurrentUser';
import Levels from'../components/levelbrackets';





export default class SmithingScreen extends React.Component {
    static 	navigationOptions = {
        headerTitle:
        <View style={{ justifyContent:'space-between', flexDirection:'row' }}>
            <Image source={require('../../assets/osrs.png')}
            style={{ maxHeight: 60, maxWidth: 130}} />
            <Text> SmithingPage </Text>		
        </View>,
        
    };	
    
    constructor(props) {
        super(props);
        this.state = {
            levelToGet:'',
            experianceToGet:'',
            currentLevel:'',
            currentExperience:'',
        };
        
        this.state.currentLevel = cUser.findSkillLevel("Smithing");
        this.state.currentExperience = cUser.findSkillExperience("Smithing");
        this.state.levelToGet = cUser.findSkillLevel("Smithing");
        this.state.experianceToGet = cUser.findSkillExperience("Smithing");
        this.updateSkill();

    }

    updateSkill(){
        Levels.setCurrentSkill('Smithing');
    }

    resetAll(){
        this.state.currentLevel = cUser.findSkillLevel("Smithing");
        this.state.currentExperience = cUser.findSkillExperience("Smithing");
        this.state.levelToGet = cUser.findSkillLevel("Smithing");
        this.state.experianceToGet = cUser.findSkillExperience("Smithing");
        this.updateSkill();
    }

    render() {
        return (
            <View style={styles.container}
            showsVerticalScrollIndicator={true}>
                <View styles={styles.navBar}>
                    <View style={styles.headItem}>
                        <Text style={styles.textItem}>Smithing level: </Text>
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
                        <Text style={styles.textItem} >Smithing experience: </Text>
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
                        <Text style={styles.textItem}>Smithing level to get: </Text>
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
                        <Text style={styles.textItem}>Smithing experience to get: </Text>
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
                        <Text style={styles.textItem}>Name: Bronze bar </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Bronze bar')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Bronze bar')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Bronze bar'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Bronze axe </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Bronze axe')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Bronze axe')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Bronze axe'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Bronze dagger </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Bronze dagger')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Bronze dagger')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Bronze dagger'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Bronze mace </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Bronze mace')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Bronze mace')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Bronze mace'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Bronze med helm </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Bronze med helm')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Bronze med helm')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Bronze med helm'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Bronze bolts (unf) </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Bronze bolts (unf)')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Bronze bolts (unf)')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Bronze bolts (unf)'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Bronze nails </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Bronze nails')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Bronze nails')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Bronze nails'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Bronze sword </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Bronze sword')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Bronze sword')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Bronze sword'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Bronze wire  </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Bronze wire')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Bronze wire')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Bronze wire'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Bronze dart tip </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Bronze dart tip')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Bronze dart tip')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Bronze dart tip'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Bronze arrowtips </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Bronze arrowtips')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Bronze arrowtips')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Bronze arrowtips'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Bronze scimitar </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Bronze scimitar')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Bronze scimitar')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Bronze scimitar'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Bronze javelin heads </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Bronze javelin heads')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Bronze javelin heads')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Bronze javelin heads'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Bronze longsword </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Bronze longsword')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Bronze longsword')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Bronze longsword'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Bronze limbs </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Bronze limbs')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Bronze limbs')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Bronze limbs'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Bronze knife </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Bronze knife')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Bronze knife')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Bronze knife'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Bronze full helm </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Bronze full helm')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Bronze full helm')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Bronze full helm'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Bronze sq shield </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Bronze sq shield')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Bronze sq shield')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Bronze sq shield'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Bronze warhammer </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Bronze warhammer')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Bronze warhammer')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Bronze warhammer'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Bronze battleaxe </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Bronze battleaxe')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Bronze battleaxe')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Bronze battleaxe'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Bronze chainbody </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Bronze chainbody')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Bronze chainbody')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Bronze chainbody'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Bronze kiteshield </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Bronze kiteshield')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Bronze kiteshield')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Bronze kiteshield'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Bronze claws </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Bronze claws')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Bronze claws')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Bronze claws'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Bronze 2h sword </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Bronze 2h sword')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Bronze 2h sword')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Bronze 2h sword'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Iron bar </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Iron bar')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Iron bar')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Iron bar'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Iron dagger </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Iron dagger')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Iron dagger')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Iron dagger'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Iron axe </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Iron axe')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Iron axe')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Iron axe'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Bronze platelegs </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Bronze platelegs')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Bronze platelegs')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Bronze platelegs'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Bronze plateskirt </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Bronze plateskirt')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Bronze plateskirt')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Bronze plateskirt'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Iron spit </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Iron spit')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Iron spit')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Iron spit'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Iron mace </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Iron mace')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Iron mace')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Iron mace'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Iron bolts (unf) </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Iron bolts (unf)')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Iron bolts (unf)')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Iron bolts (unf)'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Bronze platebody </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Bronze platebody')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Bronze platebody')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Bronze platebody'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Iron med helm </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Iron med helm')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Iron med helm')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Iron med helm'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Iron nails </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Iron nails')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Iron nails')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Iron nails'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Iron dart tip </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Iron dart tip')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Iron dart tip')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Iron dart tip'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Iron sword </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Iron sword')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Iron sword')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Iron sword'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Silver bar </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Silver bar')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Silver bar')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Silver bar'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Iron arrowtips</Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Iron arrowtips')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Iron arrowtips')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Iron arrowtips'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Iron scimitar </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Iron scimitar')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Iron scimitar')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Iron scimitar'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Iron longsword </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Iron longsword')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Iron longsword')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Iron longsword'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Iron javelin heads </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Iron javelin heads')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Iron javelin heads')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Iron javelin heads'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Iron full helm </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Iron full helm')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Iron full helm')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Iron full helm'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Iron knife </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Iron knife')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Iron knife')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Iron knife'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Iron limbs </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Iron limbs')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Iron limbs')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Iron limbs'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Iron sq shield </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Iron sq shield')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Iron sq shield')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Iron sq shield'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Iron warhammer </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Iron warhammer')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Iron warhammer')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Iron warhammer'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Iron battleaxe </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Iron battleaxe')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Iron battleaxe')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Iron battleaxe'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Oil lantern frame </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Oil lantern frame')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Oil lantern frame')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Oil lantern frame'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Iron chainbody </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Iron chainbody')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Iron chainbody')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Iron chainbody'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Iron kiteshield </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Iron kiteshield')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Iron kiteshield')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Iron kiteshield'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Iron claws </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Iron claws')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Iron claws')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Iron claws'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Iron 2h sword </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Iron 2h sword')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Iron 2h sword')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Iron 2h sword'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Steel bar </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Steel bar')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Steel bar')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Steel bar'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Steel dagger </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Steel dagger')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Steel dagger')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Steel dagger'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Iron plateskirt </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Iron plateskirt')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Iron plateskirt')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Iron plateskirt'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Iron platelegs </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Iron platelegs')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Iron platelegs')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Iron platelegs'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Steel axe </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Steel axe')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Steel axe')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Steel axe'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Steel mace </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Steel mace')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Steel mace')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Steel mace'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Iron platebody </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Iron platebody')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Iron platebody')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Iron platebody'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Steel med helm </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Steel med helm')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Steel med helm')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Steel med helm'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Steel bolts (unf) </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Steel bolts (unf)')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Steel bolts (unf)')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Steel bolts (unf)'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Steel dart tip </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Steel dart tip')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Steel dart tip')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Steel dart tip'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Steel nails </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Steel nails')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Steel nails')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Steel nails'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Steel sword </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Steel sword')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Steel sword')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Steel sword'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Cannonball </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Cannonball')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Cannonball')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Cannonball'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Steel scimitar </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Steel scimitar')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Steel scimitar')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Steel scimitar'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Steel arrowtips </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Steel arrowtips')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Steel arrowtips')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Steel arrowtips'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Steel limbs </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Steel limbs')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Steel limbs')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Steel limbs'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Steel studs </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Steel studs')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Steel studs')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Steel studs'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Steel longsword </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Steel longsword')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Steel longsword')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Steel longsword'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Steel javelin heads </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Steel javelin heads')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Steel javelin heads')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Steel javelin heads'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Steel knife </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Steel knife')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Steel knife')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Steel knife'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Steel full helm </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Steel full helm')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Steel full helm')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Steel full helm'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Steel sq shield </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Steel sq shield')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Steel sq shield')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Steel sq shield'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Steel warhammer </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Steel warhammer')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Steel warhammer')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Steel warhammer'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Steel battleaxe </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Steel battleaxe')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Steel battleaxe')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Steel battleaxe'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Gold bar (blast furance) </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Gold bar (blast furance)')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Gold bar (blast furance)')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Gold bar (blast furance)'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Gold bar </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Gold bar')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Gold bar')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Gold bar'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Steel chainbody </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Steel chainbody')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Steel chainbody')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Steel chainbody'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Steel kiteshield </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Steel kiteshield')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Steel kiteshield')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Steel kiteshield'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Steel claws </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Steel claws')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Steel claws')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Steel claws'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Steel 2h sword </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Steel 2h sword')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Steel 2h sword')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Steel 2h sword'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Steel platelegs </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Steel platelegs')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Steel platelegs')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Steel platelegs'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Steel plateskirt </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Steel plateskirt')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Steel plateskirt')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Steel plateskirt'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Steel platebody </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Steel platebody')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Steel platebody')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Steel platebody'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Bullseye lantern (unf) </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Bullseye lantern (unf)')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Bullseye lantern (unf)')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Bullseye lantern (unf)'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Mithril dagger </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Mithril dagger')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Mithril dagger')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Mithril dagger'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Mithril bar </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Mithril bar')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Mithril bar')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Mithril bar'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Mithril axe </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Mithril axe')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Mithril axe')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Mithril axe'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Mithril mace </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Mithril mace')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Mithril mace')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Mithril mace'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Mithril med helm </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Mithril med helm')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Mithril med helm')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Mithril med helm'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Mithril bolts (unf) </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Mithril bolts (unf)')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Mithril bolts (unf)')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Mithril bolts (unf)'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Mithril sword </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Mithril sword')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Mithril sword')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Mithril sword'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Mithril dart tip </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Mithril dart tip')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Mithril dart tip')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Mithril dart tip'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Mithril nails </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Mithril nails')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Mithril nails')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Mithril nails'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Mithril arrowtips </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Mithril arrowtips')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Mithril arrowtips')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Mithril arrowtips'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Mithril scimitar </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Mithril scimitar')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Mithril scimitar')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Mithril scimitar'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Mithril longsword </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Mithril longsword')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Mithril longsword')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Mithril longsword'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Mithril javelin heads </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Mithril javelin heads')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Mithril javelin heads')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Mithril javelin heads'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Mithril limbs </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Mithril limbs')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Mithril limbs')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Mithril limbs'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Mithril full helm </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Mithril full helm')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Mithril full helm')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Mithril full helm'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Mithril knife </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Mithril knife')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Mithril knife')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Mithril knife'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Mithril sq shield </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Mithril sq shield')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Mithril sq shield')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Mithril sq shield'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Mithril warhammer </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Mithril warhammer')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Mithril warhammer')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Mithril warhammer'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Dragon sq shield </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Dragon sq shield')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Dragon sq shield')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Dragon sq shield'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Mithril battleaxe </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Mithril battleaxe')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Mithril battleaxe')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Mithril battleaxe'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Mithril chainbody </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Mithril chainbody')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Mithril chainbody')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Mithril chainbody'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Mithril kiteshield </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Mithril kiteshield')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Mithril kiteshield')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Mithril kiteshield'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Mithril claws </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Mithril claws')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Mithril claws')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Mithril claws'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Mithril 2h sword </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Mithril 2h sword')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Mithril 2h sword')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Mithril 2h sword'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Mithril plateskirt </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Mithril plateskirt')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Mithril plateskirt')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Mithril plateskirt'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Mithril platelegs </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Mithril platelegs')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Mithril platelegs')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Mithril platelegs'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Mithril platebody </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Mithril platebody')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Mithril platebody')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Mithril platebody'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Adamantite bar </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Adamantite bar')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Adamantite bar')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Adamantite bar'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Adamant dagger </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Adamant dagger')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Adamant dagger')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Adamant dagger'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Adamant axe </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Adamant axe')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Adamant axe')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Adamant axe'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Adamant mace </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Adamant mace')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Adamant mace')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Adamant mace'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Adamant bolts (unf) </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Adamant bolts (unf)')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Adamant bolts (unf)')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Adamant bolts (unf)'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Adamant med helm </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Adamant med helm')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Adamant med helm')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Adamant med helm'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Adamant dart tip </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Adamant dart tip')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Adamant dart tip')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Adamant dart tip'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Adamant sword </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Adamant sword')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Adamant sword')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Adamant sword'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Adamantite nails  </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Adamantite nails')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Adamantite nails')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Adamantite nails'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Adamant arrowtips </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Adamant arrowtips')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Adamant arrowtips')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Adamant arrowtips'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Adamant scimitar </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Adamant scimitar')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Adamant scimitar')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Adamant scimitar'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Adamantite limbs </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Adamantite limbs')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Adamantite limbs')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Adamantite limbs'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Adamant longsword </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Adamant longsword')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Adamant longsword')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Adamant longsword'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Adamant javelin heads </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Adamant javelin heads')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Adamant javelin heads')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Adamant javelin heads'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Adamant full helm </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Adamant full helm')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Adamant full helm')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Adamant full helm'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Adamant knife </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Adamant knife')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Adamant knife')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Adamant knife'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Adamant sq shield </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Adamant sq shield')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Adamant sq shield')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Adamant sq shield'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Adamant warhammer </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Adamant warhammer')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Adamant warhammer')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Adamant warhammer'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Adamant battleaxe </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Adamant battleaxe')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Adamant battleaxe')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Adamant battleaxe'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Adamant chainbody </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Adamant chainbody')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Adamant chainbody')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Adamant chainbody'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Adamant kiteshield </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Adamant kiteshield')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Adamant kiteshield')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Adamant kiteshield'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Adamant claws </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Adamant claws')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Adamant claws')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Adamant claws'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Adamant 2h sword </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Adamant 2h sword')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Adamant 2h sword')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Adamant 2h sword'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Runite bar </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Runite bar')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Runite bar')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Runite bar'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Runite dagger </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Runite dagger')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Runite dagger')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Runite dagger'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Runite axe </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Runite axe')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Runite axe')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Runite axe'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Adamant plateskirt </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Adamant plateskirt')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Adamant plateskirt')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Adamant plateskirt'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Adamant platelegs </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Adamant platelegs')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Adamant platelegs')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Adamant platelegs'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Runite mace </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Runite mace')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Runite mace')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Runite mace'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Runite bolts (unf) </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Runite bolts (unf)')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Runite bolts (unf)')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Runite bolts (unf)'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Runite med helm </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Runite med helm')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Runite med helm')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Runite med helm'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Adamant platebody </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Adamant platebody')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Adamant platebody')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Adamant platebody'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Runite sword </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Runite sword')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Runite sword')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Runite sword'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Runite nails </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Runite nails')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Runite nails')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Runite nails'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Runite dart tip </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Runite dart tip')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Runite dart tip')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Runite dart tip'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Runite arrowtips </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Runite arrowtips')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Runite arrowtips')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Runite arrowtips'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Runite scimitar </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Runite scimitar')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Runite scimitar')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Runite scimitar'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Dragonfire shield </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Dragonfire shield')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Dragonfire shield')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Dragonfire shield'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>                    
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Runite longsword </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Runite longsword')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Runite longsword')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Runite longsword'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Runite javelin heads </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Runite javelin heads')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Runite javelin heads')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Runite javelin heads'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Runite limbs </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Runite limbs')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Runite limbs')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Runite limbs'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Runite knife </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Runite knife')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Runite knife')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Runite knife'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Runite full helm </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Runite full helm')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Runite full helm')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Runite full helm'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Runite sq shield </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Runite sq shield')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Runite sq shield')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Runite sq shield'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Runite warhammer </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Runite warhammer')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Runite warhammer')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Runite warhammer'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Runite battleaxe </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Runite battleaxe')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Runite battleaxe')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Runite battleaxe'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: CRune chainbodylay </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Runite chainbody')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Runite chainbody')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Runite chainbody'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Runite kiteshield </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Runite kiteshield')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Runite kiteshield')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Runite kiteshield'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Runite claws  </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Runite claws')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Runite claws')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Runite claws'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Runite platebody </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Runite platebody')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Runite platebody')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Runite platebody'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Runite plateskirt </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Runite plateskirt')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Runite plateskirt')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Runite plateskirt'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Runite platelegs </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Runite platelegs')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Runite platelegs')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Runite platelegs'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.textItem}>Name: Runite 2h sword </Text>
                        <Text style={styles.textItem}>Level to mine: {Levels.findSkillLevelByName('Runite 2h sword')}</Text>
                        <Text style={styles.textItem}>Experience: {Levels.findSkillXpByName('Runite 2h sword')}</Text>
                        <Text style={styles.textItem}>Actions Left: {Levels.findActionsToLevel( Levels.findSkillXpByName('Runite 2h sword'), this.state.currentExperience ,this.state.experianceToGet)}</Text>                        
                    </View>                
                    
                </ScrollView>
                
            </View>             
        );
    }      

}
const styles = StyleSheet.create({
	container: {
        flex: 1,
        flexDirection:'column',
    	backgroundColor:'#625341',
	},
	navBar: {

	},
	body: {
		flex: 1
	},
	statBar: {
        flexDirection:'row',
        justifyContent:'space-around',
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
        backgroundColor:'#625200' 
    },
});