import React from 'react';

class FiremakingExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: {},
        };

        this.experience = {
            Tasks: [
                { Pic: require('../../../assets/Images/item_Icons/firemaking/Logs.png'), Name: 'Logs', Level: 1, XP: 40 },
                { Pic: require('../../../assets/Images/item_Icons/firemaking/Achey_tree_logs.png'), Name: 'Achey tree logs', Level: 1, XP: 40 },
                { Pic: require('../../../assets/Images/item_Icons/firemaking/Oak_logs.png'), Name: 'Oak logs', Level: 15, XP: 60 },
                { Pic: require('../../../assets/Images/item_Icons/firemaking/Willow_logs.png'), Name: 'Willow logs', Level: 30, XP: 90 },
                { Pic: require('../../../assets/Images/item_Icons/firemaking/Teak_logs.png'), Name: 'Teak logs', Level: 35, XP: 105 },
                { Pic: require('../../../assets/Images/item_Icons/firemaking/Arctic_pine_logs.png'), Name: 'Arctic pine logs', Level: 42, XP: 125 },
                { Pic: require('../../../assets/Images/item_Icons/firemaking/Maple_logs.png'), Name: 'Maple logs', Level: 45, XP: 135 },
                { Pic: require('../../../assets/Images/item_Icons/firemaking/Mahogany_logs.png'), Name: 'Mahogany logs', Level: 50, XP: 157.5 },
                { Pic: require('../../../assets/Images/item_Icons/firemaking/Yew_logs.png'), Name: 'Yew logs', Level: 60, XP: 202.5 },
                { Pic: require('../../../assets/Images/item_Icons/firemaking/Magic_logs.gif'), Name: 'Magic logs', Level: 75, XP: 303.8 },
                { Pic: require('../../../assets/Images/item_Icons/firemaking/Redwood_logs.png'), Name: 'Redwood logs', Level: 90, XP: 350 },                          
            ]
        };
    }
    
    getFiremakingExperienceTable() {
        return this.experience;
    }

	
    
}
const firemakingXP = new FiremakingExperience();
export default firemakingXP;