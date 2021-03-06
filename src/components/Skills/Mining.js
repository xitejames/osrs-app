import React from 'react';

class MiningExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: {},
        };

        this.experience = {
            Tasks: [
                { Name: 'Clay', Level: 1, XP: 5 },
                { Name: 'Rune essence', Level: 1, XP: 5 },
                { Name: 'Copper', Level: 1, XP: 17.5 },
                { Name: 'Tin', Level: 1, XP: 17.5 },
                { Name: 'Limestone', Level: 10, XP: 26.5 },
                { Name: 'Iron', Level: 15, XP: 35 },
                { Name: 'Silver', Level: 20, XP: 40 },
                { Name: 'Pure essence', Level: 30, XP: 5 },
                { Name: 'Coal', Level: 30, XP: 50 },
                { Name: 'Pay-dirt', Level: 30, XP: 60 },
                { Name: 'Sandstone (1kg)', Level: 35, XP: 30 },
                { Name: 'Sandstone (2kg)', Level: 35, XP: 40 },
                { Name: 'Sandstone (5kg)', Level: 35, XP: 50 },
                { Name: 'Sandstone (10kg)', Level: 35, XP: 60 },                
                { Name: 'Gem mining', Level: 40, XP: 65 },
                { Name: 'Gold', Level: 40, XP: 65 },
                { Name: 'Granite (500g)', Level: 45, XP: 50 },
                { Name: 'Granite (2kg)', Level: 45, XP: 60 },
                { Name: 'Granite (5kg)', Level: 45, XP: 75 },
                { Name: 'Mithril', Level: 55, XP: 80 },                
                { Name: 'Adamanite', Level: 70, XP: 95 },
                { Name: 'Runeite', Level: 85, XP: 125 },
                { Name: 'Amethyst', Level: 92, XP: 240 },                
            ]
        };
    }
    
    getMiningExperienceTable() {
        return this.experience;
    }

	
    
}
const miningXP = new MiningExperience();
export default miningXP;