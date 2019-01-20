import React from'react';

class FarmingExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: {},
    };

    this.experience = {
      Tasks: [
        { Name:'Potato', Level: 1, XP: 134 },
        { Name:'Onion', Level: 5, XP: 156.5 },
        { Name:'Cabbage', Level: 7, XP: 171 },
        { Name:'Guam', Level: 9, XP: 86},
        { Name:'Tomato', Level: 12, XP: 208.5},
        { Name:'Marrentill', Level: 14, XP: 103.5},
        { Name:'Oak tree', Level: 1, XP: 471.3},
        { Name:'Tarromin', Level: 19, XP: 124},
        { Name:'Sweetcorn', Level: 20, XP: 283},
        { Name:'Harralander', Level: 26, XP: 165.5},
        { Name:'Apple tree', Level: 27, XP: 1272.5},
        { Name:'Willow tree', Level: 30, XP: 1481.5},
        { Name:'Strawberry', Level: 31, XP: 432},
        { Name:'Ranarr', Level: 32, XP: 209.5},
        { Name:'Banana tree', Level: 33, XP: 1841.5},
        { Name:'Toadflax', Level: 38, XP: 265},
        { Name:'Orange tree', Level: 39, XP: 2587.7},
        { Name:'Curry tree', Level: 42, XP: 3036.9},
        { Name:'Irit', Level: 44, XP: 334},
        { Name:'Maple tree', Level: 45, XP: 3448.4},
        { Name:'Watermelon', Level: 47, XP: 811.5},
        { Name:'Avantoe', Level: 50, XP: 423.5},
        { Name:'Pineapple tree', Level: 51, XP: 4791.7},
        { Name:'Kwuarm', Level: 56, XP: 537},
        { Name:'Papaya tree', Level: 57, XP: 6380.4},
        { Name:'Yew tree', Level: 60, XP: 7150.9},
        { Name:'Snapdragon', Level: 62, XP: 678.5},
        { Name:'Cadantine', Level: 67, XP: 826.5},
        { Name:'Palm tree', Level: 68, XP: 10509.6},
        { Name:'Lantadyme', Level: 73, XP: 1043.5},
        { Name:'Magic tree', Level: 77, XP: 13913.8},
        { Name:'Dwarf weed', Level: 79, XP: 1322.5},
        { Name:'Torstol', Level: 85, XP: 1546.5},      
             
      ]
    };
  }
  
  getFarmingExperienceTable() {
    return this.experience;
  }

	
  
}
const farmingXP = new FarmingExperience();
export default farmingXP;