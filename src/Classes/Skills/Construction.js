import React from 'react';

class ConstructionExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: {},
        };

        this.experience = {
            Tasks: [
                { Pic: require('../../../assets/Images/item_Icons/construction/Plank.png'), Name: 'Plank', Level: 1, XP: 29 },
                { Pic: require('../../../assets/Images/item_Icons/construction/Oak_plank.png'), Name: 'Oak plank', Level: 1, XP: 60 },
                { Pic: require('../../../assets/Images/item_Icons/construction/Teak_plank.png'), Name: 'Teak plank', Level: 1, XP: 90 },
                { Pic: require('../../../assets/Images/item_Icons/construction/Mahogany_plank.png'), Name: 'Mahogany plank', Level: 1, XP: 140 },
                ]
        };
    }
    
    getConstructionExperienceTable() {
        return this.experience;
    }

	
    
}
const constructionXP = new ConstructionExperience();
export default constructionXP;