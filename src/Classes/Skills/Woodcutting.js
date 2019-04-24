import React from 'react';

class WoodcuttingExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: {},
        };

        this.experience = {
            Tasks: [
                { Pic: require('../../../assets/Images/item_Icons/woodcutting/Logs.png'), Name: 'Logs', Level: 1, XP: 25 },
                { Pic: require('../../../assets/Images/item_Icons/woodcutting/Achey_tree_logs.png'), Name: 'Achey tree logs', Level: 1, XP: 25 },
                { Pic: require('../../../assets/Images/item_Icons/woodcutting/Oak_logs.png'), Name: 'Oak logs', Level: 15, XP: 37.5 },
                { Pic: require('../../../assets/Images/item_Icons/woodcutting/Willow_logs.png'), Name: 'Willow logs', Level: 30, XP: 67.5 },
                { Pic: require('../../../assets/Images/item_Icons/woodcutting/Teak_logs.png'), Name: 'Teak logs', Level: 35, XP: 85 },
                { Pic: require('../../../assets/Images/item_Icons/woodcutting/Bark.png'), Name: 'Bark', Level: 45, XP: 82.5 },
                { Pic: require('../../../assets/Images/item_Icons/woodcutting/Maple_logs.png'), Name: 'Maple logs', Level: 45, XP: 100 },
                { Pic: require('../../../assets/Images/item_Icons/woodcutting/Mahogany_logs.png'), Name: 'Mahogany logs', Level: 50, XP: 125 },
                { Pic: require('../../../assets/Images/item_Icons/woodcutting/Arctic_pine_logs.png'), Name: 'Arctic pine logs', Level: 54, XP: 40 },
                { Pic: require('../../../assets/Images/item_Icons/woodcutting/Yew_logs.png'), Name: 'Yew logs', Level: 60, XP: 175 },
                { Pic: require('../../../assets/Images/item_Icons/woodcutting/Mushroom.png'), Name: 'Sulliusceps', Level: 65, XP: 127 },
                { Pic: require('../../../assets/Images/item_Icons/woodcutting/Magic_logs.gif'), Name: 'Magic logs', Level: 75, XP: 250 },
                { Pic: require('../../../assets/Images/item_Icons/woodcutting/Redwood_logs.png'), Name: 'Redwood logs', Level: 90, XP: 380 },                          
            ]
        };
    }
    
    getWoodcuttingExperienceTable() {
        return this.experience;
    }

	
    
}
const woodcuttingXP = new WoodcuttingExperience();
export default woodcuttingXP;