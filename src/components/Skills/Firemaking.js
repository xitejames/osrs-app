import React from 'react';

class FiremakingExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: {},
        };

        this.experience = {
            Tasks: [
                { Name: 'Logs', Level: 1, XP: 40 },
                { Name: 'Achey tree logs', Level: 1, XP: 40 },
                { Name: 'Oak logs', Level: 15, XP: 60 },
                { Name: 'Willow logs', Level: 30, XP: 90 },
                { Name: 'Teak logs', Level: 35, XP: 105 },
                { Name: 'Arctic pine logs', Level: 42, XP: 125 },
                { Name: 'Maple logs', Level: 45, XP: 135 },
                { Name: 'Mahogany logs', Level: 50, XP: 157.5 },
                { Name: 'Yew logs', Level: 60, XP: 202.5 },
                { Name: 'Magic logs', Level: 75, XP: 303.8 },
                { Name: 'Redwood logs', Level: 90, XP: 350 },                          
            ]
        };
    }
    
    getFiremakingExperienceTable() {
        return this.experience;
    }

	
    
}
const firemakingXP = new FiremakingExperience();
export default firemakingXP;