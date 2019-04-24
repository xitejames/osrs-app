import React from'react';

class AgilityExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: {},
        };

        this.experience = {
            Tasks: [
                { Pic: require('../../../assets/Images/item_Icons/agility/Gnome_Stronghold.png'), Name:'Gnome Stronghold', Level: 1, XP: 86.5 },
                { Pic: require('../../../assets/Images/item_Icons/agility/Draynor_Village_Rooftop.png'), Name:'Draynor Village Rooftop', Level: 10, XP: 120 },
                { Pic: require('../../../assets/Images/item_Icons/agility/Al_Kharid_Rooftop.png'), Name:'Al Kharid Rooftop', Level: 20, XP: 180 },
                { Pic: require('../../../assets/Images/item_Icons/agility/Varrock_Rooftop.png'), Name:'Varrock Rooftop', Level: 30, XP: 238},
                { Pic: require('../../../assets/Images/item_Icons/agility/Penguin.png'), Name:'Penguin', Level: 30, XP: 540 },
                { Pic: require('../../../assets/Images/item_Icons/agility/Barbarian_Outpost.png'), Name:'Barbarian Outpost', Level: 15, XP: 152.5 },
                { Pic: require('../../../assets/Images/item_Icons/agility/Canifis_Rooftop.png'), Name:'Canifis Rooftop', Level: 40, XP:  240},
                { Pic: require('../../../assets/Images/item_Icons/agility/Ape_Atoll.png'), Name:'Ape Atoll', Level: 48, XP: 580 },
                { Pic: require('../../../assets/Images/item_Icons/agility/Falador_Rooftop.png'), Name:'Falador Rooftop', Level: 50, XP: 440 },
                { Pic: require('../../../assets/Images/item_Icons/agility/Wilderness.png'), Name:'Wilderness', Level: 52, XP: 571 },
                { Pic: require('../../../assets/Images/item_Icons/agility/Seers_Village_Rooftop.png'), Name:'Seers Village Rooftop', Level: 60, XP: 570 },
                { Pic: require('../../../assets/Images/item_Icons/agility/Werewolf.png'), Name:'Werewolf', Level: 60, XP: 730 },
                { Pic: require('../../../assets/Images/item_Icons/agility/Pollnivneach_Rooftop.png'), Name:'Pollnivneach Rooftop', Level: 70, XP: 890 },
                { Pic: require('../../../assets/Images/item_Icons/agility/Rellekka_Rooftop.png'), Name:'Rellekka Rooftop', Level: 80, XP: 780 },                
                { Pic: require('../../../assets/Images/item_Icons/agility/Ardougne_Rooftop.png'), Name:'Ardougne Rooftop', Level: 90, XP: 793 },             
            ]
        };
    }
    
    getAgilityExperienceTable() {
        return this.experience;
    }

	
    
}
const agilityXP = new AgilityExperience();
export default agilityXP;