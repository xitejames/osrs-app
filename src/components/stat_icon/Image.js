import React from 'react';
import {  Image, } from 'react-native';

class SkillIcon extends React.Component {

    getPath(skillName){

        switch(skillName){
            case 'Attack':return(
                <Image source={require('../../../assets/Skill_Icons/Attack.png')} 
                style={{ maxHeight: 50, maxWidth: 50 }} />
            );
            case 'Agility':return(
                <Image source={require('../../../assets/Skill_Icons/Agility.png')} 
                style={{ maxHeight: 50, maxWidth: 50 }} />
            );
            case 'Construction':return(
                <Image source={require('../../../assets/Skill_Icons/Construction.png')} 
                style={{ maxHeight: 50, maxWidth: 50 }} />
            );
            case 'Cooking':return(
                <Image source={require('../../../assets/Skill_Icons/Cooking.png')} 
                style={{ maxHeight: 50, maxWidth: 50 }} />
            );
            case 'Crafting':return(
                <Image source={require('../../../assets/Skill_Icons/Crafting.png')} 
                style={{ maxHeight: 50, maxWidth: 50 }} />
            );
            case 'Defence':return(
                <Image source={require('../../../assets/Skill_Icons/Defence.png')} 
                style={{ maxHeight: 50, maxWidth: 50 }} />
            );
            case 'Farming':return(
                <Image source={require('../../../assets/Skill_Icons/Farming.png')} 
                style={{ maxHeight: 50, maxWidth: 50 }} />
            );
            case 'Firemaking':return(
                <Image source={require('../../../assets/Skill_Icons/Firemaking.png')} 
                style={{ maxHeight: 50, maxWidth: 50 }} />
            );
            case 'Fletching':return(
                <Image source={require('../../../assets/Skill_Icons/Fletching.png')} 
                style={{ maxHeight: 50, maxWidth: 50 }} />
            );  
            case 'Fishing':return(
                <Image source={require('../../../assets/Skill_Icons/Fishing.png')} 
                style={{ maxHeight: 50, maxWidth: 50 }} />
            );            
            case 'Herblore':return(
                <Image source={require('../../../assets/Skill_Icons/Herblore.png')} 
                style={{ maxHeight: 50, maxWidth: 50 }} />
            );
            case 'Hitpoints':return(
                <Image source={require('../../../assets/Skill_Icons/Hitpoints.png')} 
                style={{ maxHeight: 50, maxWidth: 50 }} />
            );
            case 'Hunter':return(
                <Image source={require('../../../assets/Skill_Icons/Hunter.png')} 
                style={{ maxHeight: 50, maxWidth: 50 }} />
            );
            case 'Magic':return(
                <Image source={require('../../../assets/Skill_Icons/Magic.png')} 
                style={{ maxHeight: 50, maxWidth: 50 }} />
            );
            case 'Mining':return(
                <Image source={require('../../../assets/Skill_Icons/Mining.png')} 
                style={{ maxHeight: 50, maxWidth: 50 }} />
            );
            case 'Prayer':return(
                <Image source={require('../../../assets/Skill_Icons/Prayer.png')} 
                style={{ maxHeight: 50, maxWidth: 50 }} />
            );
            case 'Ranged':return(
                <Image source={require('../../../assets/Skill_Icons/Ranged.png')} 
                style={{ maxHeight: 50, maxWidth: 50 }} />
            );
            case 'Runecrafting':return(
                <Image source={require('../../../assets/Skill_Icons/Runecrafting.png')} 
                style={{ maxHeight: 50, maxWidth: 50 }} />
            );
            case 'Slayer':return(
                <Image source={require('../../../assets/Skill_Icons/Slayer.png')} 
                style={{ maxHeight: 50, maxWidth: 50 }} />
            );
            case 'Overall':return(
                <Image source={require('../../../assets/Skill_Icons/Skills.png')} 
                style={{ maxHeight: 50, maxWidth: 50 }} />
            );
            case 'Smithing':return(
                <Image source={require('../../../assets/Skill_Icons/Smithing.png')} 
                style={{ maxHeight: 50, maxWidth: 50 }} />
            );
            case 'Strength':return(
                <Image source={require('../../../assets/Skill_Icons/Strength.png')} 
                style={{ maxHeight: 50, maxWidth: 50 }} />
            );
            case 'Thieving':return(
                <Image source={require('../../../assets/Skill_Icons/Thieving.png')} 
                style={{ maxHeight: 50, maxWidth: 50 }} />
            );
            case 'Woodcutting':return(
                <Image source={require('../../../assets/Skill_Icons/Woodcutting.png')} 
                style={{ maxHeight: 50, maxWidth: 50 }} />
            );
        }
    }

	
    
}
const skillIcon = new SkillIcon();
export default skillIcon;