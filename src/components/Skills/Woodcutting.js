import React from 'react';

class WoodcuttingExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: {},
        };

        this.experience = {
            Tasks: [
                { Name: 'Logs', Level: 1, XP: 25 },
                { Name: 'Achey tree logs', Level: 1, XP: 25 },
                { Name: 'Oak logs', Level: 15, XP: 37.5 },
                { Name: 'Willow logs', Level: 30, XP: 67.5 },
                { Name: 'Teak logs', Level: 35, XP: 85 },
                { Name: 'Bark', Level: 45, XP: 82.5 },
                { Name: 'Maple logs', Level: 45, XP: 100 },
                { Name: 'Mahogany logs', Level: 50, XP: 125 },
                { Name: 'Arctic pine logs', Level: 54, XP: 40 },
                { Name: 'Yew logs', Level: 60, XP: 175 },
                { Name: 'Sulliusceps', Level: 65, XP: 127 },
                { Name: 'Magic logs', Level: 75, XP: 250 },
                { Name: 'Redwood logs', Level: 90, XP: 380 },                          
            ]
        };
    }
    
    getWoodcuttingExperienceTable() {
        return this.experience;
    }

	
    
}
const woodcuttingXP = new WoodcuttingExperience();
export default woodcuttingXP;