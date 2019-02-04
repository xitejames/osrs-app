import React from 'react';

class ThievingExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: {},
        };

        this.experience = {
            Tasks: [
                { Name: 'Man/Woman', Level: 1, XP: 8 },
                { Name: 'Vegetable stall', Level: 2, XP: 10 },
                { Name: 'Cake stall', Level: 5, XP: 16 },
                { Name: 'Tea stall', Level: 5, XP: 16 },
                { Name: 'Crafting stall', Level: 5, XP: 16 },
                { Name: 'Monkey food stall', Level: 5, XP: 116 },
                { Name: 'Farmer', Level: 10, XP: 14.5 },
                { Name: 'Female H.A.M. Member', Level: 15, XP: 18.5 },
                { Name: 'Silk stall', Level: 20, XP: 24 },
                { Name: 'Male H.A.M. Member', Level: 20, XP: 22.5 },
                { Name: 'Wine stall', Level: 22, XP: 27 },
                { Name: 'Warrior Women/Al-Kharid Warrior', Level: 25, XP: 26 },
                { Name: 'Fruit stall', Level: 25, XP: 28.5 },
                { Name: 'Seed stall', Level: 27, XP: 10 },
                { Name: 'Rogue', Level: 32, XP: 35.5 },
                { Name: 'Fur stall', Level: 35, XP: 36 },
                { Name: 'Cave Goblin', Level: 36, XP: 40 },
                { Name: 'Master Farmer', Level: 38, XP: 43 },
                { Name: 'Guard', Level: 40, XP: 46.5 },
                { Name: 'Fish stall', Level: 42, XP: 42 },
                { Name: 'Bearded Pollnivnian Bandit', Level: 45, XP: 65 },
                { Name: 'Fremennik Citizen', Level: 45, XP: 65 },
                { Name: 'Crossbow stall', Level: 49, XP: 52 },
                { Name: 'Silver stall', Level: 50, XP: 54 },
                { Name: 'Desert Bandit', Level: 53, XP: 79.5 },
                { Name: 'Knight', Level: 55, XP: 84.3 },
                { Name: 'Pollnivnian Bandit', Level: 55, XP: 84.3 },
                { Name: 'Magic stall', Level: 65, XP: 100 },
                { Name: 'Scimitar stall', Level: 65, XP: 100 },
                { Name: 'Menaphite Thug', Level: 65, XP: 137.5 },
                { Name: 'Spices stall', Level: 65, XP: 81 },
                { Name: 'Yanille Watchman', Level: 65, XP: 137.5 },
                { Name: 'Paladin ', Level: 70, XP: 151.8 },
                { Name: 'Gnome ', Level: 75, XP: 198.5 },
                { Name: 'Gems stall', Level: 75, XP: 160 },
                { Name: 'Hero ', Level: 80, XP: 275 },
                { Name: 'Elf ', Level: 85, XP: 353 },
                          
            ]
        };
    }
    
    getThievingExperienceTable() {
        return this.experience;
    }

	
    
}
const thievingXP = new ThievingExperience();
export default thievingXP;