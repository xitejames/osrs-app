import React from 'react';

class FishingExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: {},
        };

        this.experience = {
            Tasks: [
                { Name: 'Raw Shrimps', Level: 1, XP: 10 },
                { Name: 'Raw sardine', Level: 5, XP: 20 },
                { Name: 'Raw herring', Level: 10, XP: 30 },
                { Name: 'Raw anchovies', Level: 15, XP: 40 },
                { Name: 'Raw mackerel', Level: 16, XP: 20 },
                { Name: 'Raw trout', Level: 20, XP: 50 },
                { Name: 'Raw cod', Level: 23, XP: 45 },
                { Name: 'Raw pike', Level: 25, XP: 60 },
                { Name: 'Raw slimey eel', Level: 28, XP: 65 },
                { Name: 'Raw salmon', Level: 30, XP: 70 },
                { Name: 'Raw tuna', Level: 35, XP: 80 },
                { Name: 'Raw rainbow fish', Level: 38, XP: 80 },
                { Name: 'Raw cave eel', Level: 38, XP: 80 },
                { Name: 'Raw lobster', Level: 40, XP: 90 },
                { Name: 'Raw bass', Level: 46, XP: 100 },
                { Name: 'Leaping trout ', Level: 48, XP: 50 },
                { Name: 'Raw swordfish ', Level: 50, XP: 100 },
                { Name: 'Leaping salmon ', Level: 58, XP: 70 },
                { Name: 'Raw monkfish ', Level: 62, XP: 120 },
                { Name: 'Raw karambwan', Level: 65, XP: 50 },
                { Name: 'Leaping sturgeon', Level: 70, XP: 80 },
                { Name: 'Raw shark ', Level: 76, XP: 110 },
                { Name: 'Raw sea turtle', Level: 79, XP: 38 },
                { Name: 'Raw Manta ray', Level: 81, XP: 46 },
                { Name: 'Raw anglerfish', Level: 82, XP: 120 },
                { Name: 'Raw dark crab', Level: 85, XP: 130 },

                          
            ]
        };
    }
    
    getFishingExperienceTable() {
        return this.experience;
    }

	
    
}
const fishingXP = new FishingExperience();
export default fishingXP;