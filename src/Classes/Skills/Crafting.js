import React from 'react';

class CraftingExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: {},
        };

        this.experience = {
            Tasks: [
                { Name: 'Ball of wool', Level: 1, XP: 2.5 },
                { Name: 'Leather gloves', Level: 1, XP: 13.75 },
                { Name: 'Opal', Level: 1, XP: 15 },
                { Name: 'Molten glass', Level: 1, XP: 20 },
                { Name: 'Beer glass', Level: 1, XP: 17.5 },
                { Name: 'Empty candle lantern', Level: 4, XP: 19 },
                { Name: 'Gold ring', Level: 5, XP: 15 },
                { Name: 'Gold necklace', Level: 6, XP: 20 },
                { Name: 'Leather boots', Level: 7, XP: 16.25 },
                { Name: 'Gold bracelet', Level: 7, XP: 25 },
                { Name: 'Gold amulet (u)', Level: 8, XP: 30 },
                { Name: 'Leather cowl', Level: 9, XP: 18.5 },
                { Name: 'Bow string', Level: 10, XP: 15 },
                { Name: 'Crossbow string', Level: 10, XP: 15 },
                { Name: 'Leather vambraces', Level: 11, XP: 22 },
                { Name: 'Empty oil lamp', Level: 12, XP: 25 },
                { Name: 'Jade', Level: 13, XP: 20 },
                { Name: 'Leather body', Level: 14, XP: 25 },
                { Name: 'Red topaz', Level: 16, XP: 25 },
                { Name: 'Unstrung symbol', Level: 16, XP: 50 },
                { Name: 'Unstrung emblem', Level: 17, XP: 50 },
                { Name: 'Leather chaps', Level: 18, XP: 27 },
                { Name: 'Magic string', Level: 19, XP: 30 },
                { Name: 'Sapphire ring', Level: 20, XP: 40 },
                { Name: 'Sapphire', Level: 20, XP: 50 },
                { Name: 'Empty sack', Level: 21, XP: 38 },
                { Name: 'Sapphire necklace', Level: 22, XP: 55 },
                { Name: 'Sapphire bracelet', Level: 23, XP: 60 },
                { Name: 'Tiara', Level: 23, XP: 52.5 },
                { Name: 'Sapphire amulet (u)', Level: 24, XP: 65 },
                { Name: 'Emerald ring', Level: 27, XP: 55 },
                { Name: 'Emerald', Level: 27, XP: 67.5 },
                { Name: 'Hardleather body', Level: 28, XP: 35 },
                { Name: 'Emerald necklace', Level: 29, XP: 60 },
                { Name: 'Emerald bracelet', Level: 30, XP: 65 },
                { Name: 'Rope', Level: 30, XP: 25 },
                { Name: 'Emerald amulet (u)', Level: 31, XP: 70 },
                { Name: 'Spiky vambraces', Level: 32, XP: 6 },
                { Name: 'Vial', Level: 33, XP: 35 },
                { Name: 'Ruby ring', Level: 34, XP: 70 },
                { Name: 'Ruby', Level: 34, XP: 85 },
                { Name: 'Basket', Level: 36, XP: 56 },
                { Name: 'Coif', Level: 38, XP: 37 },
                { Name: 'Ruby necklace', Level: 40, XP: 75 },               
                { Name: 'Ruby bracelet', Level: 42, XP: 80 },
                { Name: 'Fishbowl', Level: 42, XP: 42.5 },
                { Name: 'Diamond', Level: 43, XP: 107.5 },
                { Name: 'Diamond ring', Level: 43, XP: 85 },
                { Name: 'Unpowered orb', Level: 46, XP: 52.5 },
                { Name: 'Lantern lens', Level: 49, XP: 55 },
                { Name: 'Ruby amulet (u)', Level: 50, XP: 85 },
                { Name: 'Water battlestaff', Level: 54, XP: 100 },
                { Name: 'Dragonstone ring', Level: 55, XP: 100 },
                { Name: 'Dragonstone', Level: 55, XP: 137.5 },
                { Name: 'Diamond necklace', Level: 56, XP: 90 },
                { Name: 'Green dhide vamb', Level: 57, XP: 62 },
                { Name: 'Diamond bracelet', Level: 58, XP: 95 },
                { Name: 'Earth battlestaff', Level: 58, XP: 112.5 },
                { Name: 'Green dhide chaps', Level: 60, XP: 124 },
                { Name: 'Fire battlestaff', Level: 62, XP: 125 },
                { Name: 'Green dhide body', Level: 63, XP: 186 },
                { Name: 'Blue dhide vamb', Level: 66, XP: 70 },
                { Name: 'Air battlestaff', Level: 66, XP: 137.5 },
                { Name: 'Onyx ring', Level: 67, XP: 115 },
                { Name: 'Onyx', Level: 67, XP: 167.5 },
                { Name: 'Blue dhide chaps', Level: 68, XP: 140 },
                { Name: 'Diamond amulet (u)', Level: 70, XP: 100 },
                { Name: 'Blue dhide body', Level: 71, XP: 201 },
                { Name: 'Dragon necklace', Level: 72, XP: 105 },
                { Name: 'Red dhide vamb', Level: 73, XP: 78 },
                { Name: 'Dragonstone bracelet', Level: 74, XP: 110 },
                { Name: 'Red dhide chaps', Level: 75, XP: 156 },
                { Name: 'Red dhide body', Level: 77, XP: 234 },
                { Name: 'Black dhide vamb', Level: 79, XP: 86 },
                { Name: 'Dragonstone amulet (u)', Level: 80, XP: 150 },
                { Name: 'Onyx necklace', Level: 82, XP: 120 },
                { Name: 'Black dhide chaps', Level: 82, XP: 172 },
                { Name: 'Amethyst bolt tips', Level: 83, XP: 60 },
                { Name: 'Black dhide body', Level: 84, XP: 258 },
                { Name: 'Onyx bracelet', Level: 84, XP: 125 },
                { Name: 'Amethyst arrowtips', Level: 85, XP: 60 },
                { Name: 'Amethyst javelin heads', Level: 87, XP: 60 },
                { Name: 'Empty light orb', Level: 87, XP: 70 },
                { Name: 'Light orb', Level: 87, XP: 104 },
                { Name: 'Zenyte ring', Level: 89, XP: 105 },
                { Name: 'Zenyte', Level: 89, XP: 200 },
                { Name: 'Onyx amulet (u)', Level: 90, XP: 165 },                
                { Name: 'Zenyte necklace', Level: 92, XP: 165 },
                { Name: 'Zenyte bracelet', Level: 95, XP: 180 },
                { Name: 'Zenyte amulet (u)', Level: 98, XP: 200 },

               
                          
            ]
        };
    }
    
    getCraftingExperienceTable() {
        return this.experience;
    }

	
    
}
const craftingXP = new CraftingExperience();
export default craftingXP;