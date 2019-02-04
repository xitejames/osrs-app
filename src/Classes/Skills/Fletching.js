import React from 'react';

class FletchingExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: {},
        };

        this.experience = {
            Tasks: [
                { Name: 'Arrow shaft (x15)', Level: 1, XP: 5 },
                { Name: 'Headless arrow', Level: 1, XP: 1 },
                { Name: 'Bronze arrow', Level: 1, XP: 1.33 },
                { Name: 'Bronze javelin', Level: 3, XP: 1 },
                { Name: 'Ogre arrow', Level: 5, XP: 1 },
                { Name: 'Shortbow (u)', Level: 5, XP: 5 },
                { Name: 'Shortbow', Level: 5, XP: 5 },
                { Name: 'Bronze bolt', Level: 9, XP: 0.5 },
                { Name: 'Wooden stock', Level: 9, XP: 6 },
                { Name: 'Bronze crossbow (u)', Level: 9, XP: 12 },
                { Name: 'Bronze crossbow', Level: 9, XP: 6 },
                { Name: 'Bronze dart', Level: 10, XP: 5 },
                { Name: 'Longbow', Level: 10, XP: 5 },
                { Name: 'Longbow (u)', Level: 10, XP: 5 },
                { Name: 'Opal bolts', Level: 11, XP: 5 },
                { Name: 'Iron arrow', Level: 15, XP: 5 },
                { Name: 'Iron javelin', Level: 17, XP: 5 },
                { Name: 'Oak shortbow (u)', Level: 20, XP: 16.5 },
                { Name: 'Oak shortbow', Level: 20, XP: 16.5 },
                { Name: 'Iron dart', Level: 22, XP: 3.8 },
                { Name: 'Oak stock', Level: 24, XP: 16 },
                { Name: 'Blurite crossbow (u)', Level: 24, XP: 32 },
                { Name: 'Blurite crossbow', Level: 24, XP: 16 },
                { Name: 'Oak longbow (u)', Level: 25, XP: 25 },
                { Name: 'Oak longbow', Level: 25, XP: 25 },
                { Name: 'Oak shield', Level: 27, XP: 50 },
                { Name: 'Steel arrow', Level: 30, XP: 5 },
                { Name: 'Kebbit bolts (x6)', Level: 32, XP: 6 },
                { Name: 'Steel javelin', Level: 32, XP: 5 },
                { Name: 'Willow shortbow (u)', Level: 35, XP: 33.3 },
                { Name: 'Willow shortbow', Level: 35, XP: 33.3 },
                { Name: 'Steel dart', Level: 37, XP: 7.5 },
                { Name: 'Iron bolts', Level: 39, XP: 1.5 },
                { Name: 'Willow stock', Level: 39, XP: 22 },
                { Name: 'Iron crossbow (u)', Level: 39, XP: 44 },
                { Name: 'Iron crossbow', Level: 39, XP: 22 },
                { Name: 'Willow longbow (u)', Level: 40, XP: 41.5 },
                { Name: 'Willow Longbow', Level: 40, XP: 41.5 },
                { Name: 'Pearl bolts', Level: 41, XP: 3.2 },
                { Name: 'Willow shield', Level: 42, XP: 83 },
                { Name: 'Long kebbit bolts (x6)', Level: 42, XP: 8 },
                { Name: 'Silver bolts', Level: 43, XP: 2.5 },
                { Name: 'Mithril arrow', Level: 45, XP: 7.5 },
                { Name: 'Steel bolts', Level: 46, XP: 3.5 },
                { Name: 'Teak stock', Level: 46, XP: 27 },
                { Name: 'Steel crossbow (u)', Level: 46, XP: 54 },
                { Name: 'Steel crossbow', Level: 46, XP: 27 },
                { Name: 'Mithril javelin', Level: 47, XP: 8 },
                { Name: 'Maple shortbow (u)', Level: 50, XP: 50 },
                { Name: 'Maple shortbow', Level: 50, XP: 50 },
                { Name: 'Barbed bolts', Level: 51, XP: 9.5 },
                { Name: 'Mithril dart', Level: 52, XP: 11.2 },
                { Name: 'Broad arrows', Level: 52, XP: 10 },
                { Name: 'Toxic blowpipe', Level: 53, XP: 120 },
                { Name: 'Mith crossbow', Level: 54, XP: 32 },
                { Name: 'Maple stock', Level: 54, XP: 32 },
                { Name: 'Mithril bolts', Level: 54, XP: 5 },
                { Name: 'Mithril crossbow (u)', Level: 54, XP: 64 },
                { Name: 'Maple longbow (u)', Level: 55, XP: 58.33 },
                { Name: 'Broad bolts', Level: 55, XP: 3 },
                { Name: 'Maple longbow', Level: 55, XP: 58 },
                { Name: 'Sapphire bolts', Level: 56, XP: 4.7 },
                { Name: 'Maple shield', Level: 57, XP: 116.5 },
                { Name: 'Emerald bolts', Level: 58, XP: 5.5 },
                { Name: 'Adamant arrow', Level: 60, XP: 10 },
                { Name: 'Adamant bolts', Level: 61, XP: 7 },
                { Name: 'Mahogany stock', Level: 61, XP: 41 },
                { Name: 'Adamant crossbow (u)', Level: 61, XP: 82 },
                { Name: 'Adamant crossbow', Level: 61, XP: 41 },
                { Name: 'Adamant javelin', Level: 62, XP: 10 },
                { Name: 'Ruby bolts', Level: 63, XP: 6.3 },
                { Name: 'Diamond bolts', Level: 65, XP: 7 },
                { Name: 'Yew shortbow', Level: 65, XP: 67.5 },
                { Name: 'Yew shortbow (u)', Level: 65, XP: 67.5 },
                { Name: 'Adamant dart', Level: 67, XP: 15 },
                { Name: 'Runite crossbow (u)', Level: 69, XP: 100 },
                { Name: 'Rune crossbow', Level: 69, XP: 50 },
                { Name: 'Yew stock', Level: 69, XP: 50 },
                { Name: 'Runite bolts', Level: 69, XP: 10 },
                { Name: 'Yew longbow', Level: 70, XP: 75 },
                { Name: 'Yew longbow (u)', Level: 70, XP: 75 },
                { Name: 'Dragonstone bolts', Level: 71, XP: 8.2 },
                { Name: 'Yew shield', Level: 72, XP: 150 },
                { Name: 'Onyx bolts', Level: 73, XP: 9.4 },
                { Name: 'Rune arrow', Level: 75, XP: 12.5 },
                { Name: 'Amethyst broad bolts', Level: 76, XP: 10.6 },
                { Name: 'Rune javelin ', Level: 77, XP: 12.4 },
                { Name: 'Magic shortbow', Level: 80, XP: 83.3 },
                { Name: 'Magic shortbow (u)', Level: 80, XP: 83.3 },
                { Name: 'Rune dart', Level: 81, XP: 18.8 },
                { Name: 'Amethyst arrow', Level: 82, XP: 13.5 },
                { Name: 'Amethyst javelin', Level: 84, XP: 13.5 },
                { Name: 'Magic longbow', Level: 85, XP: 91.5 },
                { Name: 'Magic longbow (u)', Level: 85, XP: 91.5 },
                { Name: 'Magic shield', Level: 87, XP: 183 },
                { Name: 'Dragon arrow', Level: 90, XP: 15 },
                { Name: 'Redwood shield', Level: 92, XP: 216 },
                { Name: 'Dragon javelin', Level: 92, XP: 15 },
                { Name: 'Dragon dart', Level: 95, XP: 25 },
                          
            ]
        };
    }
    
    getFletchingExperienceTable() {
        return this.experience;
    }

	
    
}
const fletchingXP = new FletchingExperience();
export default fletchingXP;