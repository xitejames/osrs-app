import React from 'react';

class AgilityExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: {},
        };

        this.experience = {
            Tasks: [
                { Name: 'Gnome Stronghold', Level: 1, XP: 86.5 },
                { Name: 'Draynor Village Rooftop', Level: 10, XP: 120 },
                { Name: 'Al Kharid Rooftop ', Level: 20, XP: 180 },
                { Name: 'Varrock Rooftop', Level: 30, XP: 238},
                { Name: 'Penguin ', Level: 30, XP: 540 },
                { Name: 'Barbarian Outpost', Level: 15, XP: 152.5 },
                { Name: 'Canifis Rooftop', Level: 40, XP:  240},
                { Name: 'Ape Atoll ', Level: 48, XP: 580 },
                { Name: 'Falador Rooftop', Level: 50, XP: 440 },
                { Name: 'Wilderness ', Level: 52, XP: 571 },
                { Name: 'Seers Village Rooftop', Level: 60, XP: 570 },
                { Name: 'Werewolf ', Level: 60, XP: 730 },
                { Name: 'Pollnivneach Rooftop', Level: 70, XP: 890 },
                { Name: 'Rellekka Rooftop', Level: 80, XP: 780 },                
                { Name: 'Ardougne Rooftop', Level: 90, XP: 793 },             
            ]
        };
    }
    
    getAgilityExperienceTable() {
        return this.experience;
    }

	
    
}
const agilityXP = new AgilityExperience();
export default agilityXP;