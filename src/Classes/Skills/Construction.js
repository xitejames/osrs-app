import React from 'react';

class ConstructionExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: {},
        };

        this.experience = {
            Tasks: [
                { Name: 'Plank', Level: 1, XP: 29 },
                { Name: 'Oak plank', Level: 1, XP: 60 },
                { Name: 'Teak plank', Level: 1, XP: 90 },
                { Name: 'Mahogany plank', Level: 1, XP: 140 },
                ]
        };
    }
    
    getConstructionExperienceTable() {
        return this.experience;
    }

	
    
}
const constructionXP = new ConstructionExperience();
export default constructionXP;