import React from 'react';

class SmithingExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: {},
        };
        this.experience = {
            Tasks: [
                { Pic: require('../../../assets/Images/item_Icons/smithing/Bronze_bar.png'), Name: 'Bronze bar (Smelt)', Level: 1, XP: 6.25 },
                { Pic: require('../../../assets/Images/item_Icons/smithing/Bronze_dagger.png'), Name: 'Bronze (Smith 1 Bar)', Level: 1, XP: 12.5 },
                { Pic: require('../../../assets/Images/item_Icons/smithing/Bronze_scimitar.png'), Name: 'Bronze (Smith 2 Bars)', Level: 5, XP: 25 },
                { Pic: require('../../../assets/Images/item_Icons/smithing/Bronze_warhammer.png'), Name: 'Bronze (Smith 3 Bars)', Level: 9, XP: 37.5 },
                { Pic: require('../../../assets/Images/item_Icons/smithing/Iron_bar.png'), Name: 'Iron bar (Smelt)', Level: 15, XP: 12.5 },              
                { Pic: require('../../../assets/Images/item_Icons/smithing/Iron_dagger.png'), Name: 'Iron (Smith 1 Bar)', Level: 15, XP: 25 },
                { Pic: require('../../../assets/Images/item_Icons/smithing/Bronze_platebody.png'), Name: 'Bronze (Smith 5 Bars)', Level: 18, XP: 62.5 },      
                { Pic: require('../../../assets/Images/item_Icons/smithing/Bronze_bar.png'), Name: 'Silver bar (Smelt)', Level: 20, XP: 13.7 },
                { Pic: require('../../../assets/Images/item_Icons/smithing/Iron_scimitar.png'), Name: 'Iron (Smith 2 Bars)', Level: 20, XP: 50 },       
                { Pic: require('../../../assets/Images/item_Icons/smithing/Iron_warhammer.png'), Name: 'Iron (Smith 3 Bars)', Level: 24, XP: 75 },
                { Pic: require('../../../assets/Images/item_Icons/smithing/Oil_lantern_frame.png'), Name: 'Oil lantern frame', Level: 25, XP: 25 },
                { Pic: require('../../../assets/Images/item_Icons/smithing/Steel_bar.png'), Name: 'Steel bar (Smelt)', Level: 30, XP: 17.5 },              
                { Pic: require('../../../assets/Images/item_Icons/smithing/Steel_dagger.png'), Name: 'Steel (Smith 1 Bar)', Level: 30, XP: 37.5 }, 
                { Pic: require('../../../assets/Images/item_Icons/smithing/Iron_platebody.png'), Name: 'Iron (Smith 5 Bars)', Level: 33, XP: 125 },    
                { Pic: require('../../../assets/Images/item_Icons/smithing/Cannonball.png'), Name: 'CannonBalls', Level: 35, XP: 25.5 },   
                { Pic: require('../../../assets/Images/item_Icons/smithing/Steel_scimitar.png'), Name: 'Steel (Smith 2 Bars)', Level: 35, XP: 75 },   
                { Pic: require('../../../assets/Images/item_Icons/smithing/Steel_warhammer.png'), Name: 'Steel (Smith 3 Bars)', Level: 39, XP: 112.5 },
                { Pic: require('../../../assets/Images/item_Icons/smithing/Gold_bar.png'), Name: 'Gold bar (blast furance)', Level: 40, XP: 56.2 },
                { Pic: require('../../../assets/Images/item_Icons/smithing/Goldsmith_gauntlets.png'), Name: 'Gold bar (Smelt)', Level: 40, XP: 22.5 },
                { Pic: require('../../../assets/Images/item_Icons/smithing/Steel_platebody.png'), Name: 'Steel (Smith 5 Bars)', Level: 48, XP: 187.5 }, 
                { Pic: require('../../../assets/Images/item_Icons/smithing/Bullseye_lantern_(unf).png'), Name: 'Bullseye lantern (unf)', Level: 49, XP: 37.5 },                
                { Pic: require('../../../assets/Images/item_Icons/smithing/Mithril_bar.png'), Name: 'Mithril bar (Smelt)', Level: 50, XP: 50 },              
                { Pic: require('../../../assets/Images/item_Icons/smithing/Mithril_dagger.png'), Name: 'Mithril (Smith 1 Bar)', Level: 50, XP: 50 }, 
                { Pic: require('../../../assets/Images/item_Icons/smithing/Mithril_scimitar.png'), Name: 'Mithril (Smith 2 Bars)', Level: 55, XP: 100 },   
                { Pic: require('../../../assets/Images/item_Icons/smithing/Mithril_warhammer.png'), Name: 'Mithril (Smith 3 Bars)', Level: 59, XP: 150 },
                { Pic: require('../../../assets/Images/item_Icons/smithing/Dragon_sq_shield.png'), Name: 'Dragon sq shield', Level: 60, XP: 75 },
                { Pic: require('../../../assets/Images/item_Icons/smithing/Mithril_platebody.png'), Name: 'Mithril (Smith 5 Bars)', Level: 68, XP: 250 }, 
                { Pic: require('../../../assets/Images/item_Icons/smithing/Adamantite_bar.png'), Name: 'Adamant bar (Smelt)', Level: 70, XP: 37.5 },              
                { Pic: require('../../../assets/Images/item_Icons/smithing/Adamant_dagger.png'), Name: 'Adamant (Smith 1 Bar)', Level: 70, XP: 62.5 }, 
                { Pic: require('../../../assets/Images/item_Icons/smithing/Adamant_scimitar.png'), Name: 'Adamant (Smith 2 Bars)', Level: 76, XP: 125 },       
                { Pic: require('../../../assets/Images/item_Icons/smithing/Adamant_warhammer.png'), Name: 'Adamant (Smith 3 Bars)', Level: 79, XP: 187.5 },
                { Pic: require('../../../assets/Images/item_Icons/smithing/Runite_bar.png'), Name: 'Runite bar (Smelt)', Level: 85, XP: 50 },              
                { Pic: require('../../../assets/Images/item_Icons/smithing/Rune_dagger.png'), Name: 'Runite (Smith 1 Bar)', Level: 85, XP: 75 }, 
                { Pic: require('../../../assets/Images/item_Icons/smithing/Adamant_platebody.png'), Name: 'Adamant (Smith 5 Bars)', Level: 88, XP: 312.5 }, 
                { Pic: require('../../../assets/Images/item_Icons/smithing/Rune_scimitar.png'), Name: 'Runite (Smith 2 Bars)', Level: 90, XP: 150 },   
                { Pic: require('../../../assets/Images/item_Icons/smithing/Dragonfire_shield.png'), Name: 'Dragonfire shield', Level: 90, XP: 2000 }, 
                { Pic: require('../../../assets/Images/item_Icons/smithing/Rune_warhammer.png'), Name: 'Runite (Smith 3 Bars)', Level: 94, XP: 225 },
                { Pic: require('../../../assets/Images/item_Icons/smithing/Rune_platebody.png'), Name: 'Runite (Smith 5 Bars)', Level: 99, XP: 375 }, 
            ]
        };
    }
    
    getSmithingExperienceTable() {
        return this.experience;
    }

	
    
}
const smithingXP = new SmithingExperience();
export default smithingXP;