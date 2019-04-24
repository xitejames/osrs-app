import React from 'react';

class MiningExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: {},
        };

        this.experience = {
            Tasks: [
                { Pic: require('../../../assets/Images/item_Icons/mining/Clay.png'),Name: 'Clay', Level: 1, XP: 5 },
                { Pic: require('../../../assets/Images/item_Icons/mining/Rune_essence.png'),Name: 'Rune essence', Level: 1, XP: 5 },
                { Pic: require('../../../assets/Images/item_Icons/mining/Copper_ore.png'),Name: 'Copper', Level: 1, XP: 17.5 },
                { Pic: require('../../../assets/Images/item_Icons/mining/Tin_ore.png'),Name: 'Tin', Level: 1, XP: 17.5 },
                { Pic: require('../../../assets/Images/item_Icons/mining/Limestone.png'),Name: 'Limestone', Level: 10, XP: 26.5 },
                { Pic: require('../../../assets/Images/item_Icons/mining/Iron_ore.png'),Name: 'Iron', Level: 15, XP: 35 },
                { Pic: require('../../../assets/Images/item_Icons/mining/Silver_ore.png'),Name: 'Silver', Level: 20, XP: 40 },
                { Pic: require('../../../assets/Images/item_Icons/mining/Pure_essence.png'),Name: 'Pure essence', Level: 30, XP: 5 },
                { Pic: require('../../../assets/Images/item_Icons/mining/Coal.png'),Name: 'Coal', Level: 30, XP: 50 },
                { Pic: require('../../../assets/Images/item_Icons/mining/Pay-dirt.png'),Name: 'Pay-dirt', Level: 30, XP: 60 },
                { Pic: require('../../../assets/Images/item_Icons/mining/Sandstone_(1kg).png'),Name: 'Sandstone (1kg)', Level: 35, XP: 30 },
                { Pic: require('../../../assets/Images/item_Icons/mining/Sandstone_(2kg).png'),Name: 'Sandstone (2kg)', Level: 35, XP: 40 },
                { Pic: require('../../../assets/Images/item_Icons/mining/Sandstone_(5kg).png'),Name: 'Sandstone (5kg)', Level: 35, XP: 50 },
                { Pic: require('../../../assets/Images/item_Icons/mining/Sandstone_(10kg).png'),Name: 'Sandstone (10kg)', Level: 35, XP: 60 },                
                { Pic: require('../../../assets/Images/item_Icons/mining/Uncut_ruby.png'),Name: 'Gem mining', Level: 40, XP: 65 },
                { Pic: require('../../../assets/Images/item_Icons/mining/Gold_ore.png'),Name: 'Gold', Level: 40, XP: 65 },
                { Pic: require('../../../assets/Images/item_Icons/mining/Granite_(500g).png'),Name: 'Granite (500g)', Level: 45, XP: 50 },
                { Pic: require('../../../assets/Images/item_Icons/mining/Granite_(2kg).png'),Name: 'Granite (2kg)', Level: 45, XP: 60 },
                { Pic: require('../../../assets/Images/item_Icons/mining/Granite_(5kg).png'),Name: 'Granite (5kg)', Level: 45, XP: 75 },
                { Pic: require('../../../assets/Images/item_Icons/mining/Mithril_ore.png'),Name: 'Mithril', Level: 55, XP: 80 },                
                { Pic: require('../../../assets/Images/item_Icons/mining/Adamantite_ore.png'),Name: 'Adamanite', Level: 70, XP: 95 },
                { Pic: require('../../../assets/Images/item_Icons/mining/Runite_ore.png'),Name: 'Runeite', Level: 85, XP: 125 },
                { Pic: require('../../../assets/Images/item_Icons/mining/Amethyst.png'),Name: 'Amethyst', Level: 92, XP: 240 },                
            ]
        };
    }
    
    getMiningExperienceTable() {
        return this.experience;
    }

	
    
}
const miningXP = new MiningExperience();
export default miningXP;