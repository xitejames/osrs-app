import React from 'react';
import {  Image, } from 'react-native';
import styles from '../../Styles/style'

class SkillIcon extends React.Component {

    getPath(skillName){

        switch(skillName){
            case 'Attack':return(
                <Image source={require('../../../assets/Images/Skill_Icons/Attack.png')} 
                style={styles.baseIcon} />
            );
            case 'Agility':return(
                <Image source={require('../../../assets/Images/Skill_Icons/Agility.png')} 
                style={styles.baseIcon} />
            );
            case 'Construction':return(
                <Image source={require('../../../assets/Images/Skill_Icons/Construction.png')} 
                style={styles.baseIcon} />
            );
            case 'Cooking':return(
                <Image source={require('../../../assets/Images/Skill_Icons/Cooking.png')} 
                style={styles.baseIcon} />
            );
            case 'Crafting':return(
                <Image source={require('../../../assets/Images/Skill_Icons/Crafting.png')} 
                style={styles.baseIcon} />
            );
            case 'Defence':return(
                <Image source={require('../../../assets/Images/Skill_Icons/Defence.png')} 
                style={styles.baseIcon} />
            );
            case 'Farming':return(
                <Image source={require('../../../assets/Images/Skill_Icons/Farming.png')} 
                style={styles.baseIcon} />
            );
            case 'Firemaking':return(
                <Image source={require('../../../assets/Images/Skill_Icons/Firemaking.png')} 
                style={styles.baseIcon} />
            );
            case 'Fletching':return(
                <Image source={require('../../../assets/Images/Skill_Icons/Fletching.png')} 
                style={styles.baseIcon} />
            );  
            case 'Fishing':return(
                <Image source={require('../../../assets/Images/Skill_Icons/Fishing.png')} 
                style={styles.baseIcon} />
            );            
            case 'Herblore':return(
                <Image source={require('../../../assets/Images/Skill_Icons/Herblore.png')} 
                style={styles.baseIcon} />
            );
            case 'Hitpoints':return(
                <Image source={require('../../../assets/Images/Skill_Icons/Hitpoints.png')} 
                style={styles.baseIcon} />
            );
            case 'Hunter':return(
                <Image source={require('../../../assets/Images/Skill_Icons/Hunter.png')} 
                style={styles.baseIcon} />
            );
            case 'Magic':return(
                <Image source={require('../../../assets/Images/Skill_Icons/Magic.png')} 
                style={styles.baseIcon} />
            );
            case 'Mining':return(
                <Image source={require('../../../assets/Images/Skill_Icons/Mining.png')} 
                style={styles.baseIcon} />
            );
            case 'Prayer':return(
                <Image source={require('../../../assets/Images/Skill_Icons/Prayer.png')} 
                style={styles.baseIcon} />
            );
            case 'Ranged':return(
                <Image source={require('../../../assets/Images/Skill_Icons/Ranged.png')} 
                style={styles.baseIcon} />
            );
            case 'Runecrafting':return(
                <Image source={require('../../../assets/Images/Skill_Icons/Runecrafting.png')} 
                style={styles.baseIcon} />
            );
            case 'Slayer':return(
                <Image source={require('../../../assets/Images/Skill_Icons/Slayer.png')} 
                style={styles.baseIcon} />
            );
            case 'Overall':return(
                <Image source={require('../../../assets/Images/Skill_Icons/Skills.png')} 
                style={styles.baseIcon} />
            );
            case 'Smithing':return(
                <Image source={require('../../../assets/Images/Skill_Icons/Smithing.png')} 
                style={styles.baseIcon} />
            );
            case 'Strength':return(
                <Image source={require('../../../assets/Images/Skill_Icons/Strength.png')} 
                style={styles.baseIcon} />
            );
            case 'Thieving':return(
                <Image source={require('../../../assets/Images/Skill_Icons/Thieving.png')} 
                style={styles.baseIcon} />
            );
            case 'Woodcutting':return(
                <Image source={require('../../../assets/Images/Skill_Icons/Woodcutting.png')} 
                style={styles.baseIcon} />
            );
        }
    }

	
    
}
const skillIcon = new SkillIcon();
export default skillIcon;