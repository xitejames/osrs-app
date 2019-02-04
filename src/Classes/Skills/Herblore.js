import React from 'react';

class HerbloreExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: {},
        };

        this.experience = {
            Tasks: [
                { Name: 'Attack potion', Level: 3, XP: 25 },
                { Name: 'Guam leaf', Level: 3, XP: 2.5 },
                { Name: 'Marrentill', Level: 5, XP: 3.8 },
                { Name: 'Antipoison', Level: 5, XP: 37.5 },
                { Name: 'Relicyms balm', Level: 8, XP: 40 },
                { Name: 'Tarromin', Level: 11, XP: 5 },
                { Name: 'Strength potion', Level: 12, XP: 50 },
                { Name: 'Serum 207', Level: 15, XP: 50 },
                { Name: 'Harralander', Level: 20, XP: 6.3 },
                { Name: 'Restore potion', Level: 22, XP: 62.5 },
                { Name: 'Ranarr weed', Level: 25, XP: 7.5 },
                { Name: 'Energy potion', Level: 26, XP: 67.5 },
                { Name: 'Toadflax', Level: 30, XP: 8 },
                { Name: 'Defence potion', Level: 30, XP: 75 },
                { Name: 'Agility potion', Level: 34, XP: 80 },
                { Name: 'Combat potion', Level: 36, XP: 84 },
                { Name: 'Prayer potion', Level: 38, XP: 87.5 },
                { Name: 'Irit leaf', Level: 40, XP: 8.8 },
                { Name: 'Super attack', Level: 45, XP: 100 },
                { Name: 'Superantipoison', Level: 48, XP: 106.3 },
                { Name: 'Avantoe', Level: 48, XP: 10 },
                { Name: 'Fishing potion', Level: 50, XP: 112.5 },
                { Name: 'Super energy', Level: 52, XP: 117.5 },
                { Name: 'Hunter potion', Level: 53, XP: 120 },
                { Name: 'Kwuarm', Level: 54, XP: 11.3 },
                { Name: 'Super strength', Level: 55, XP: 125 },
                { Name: 'Snapdragon', Level: 59, XP: 11.8 },
                { Name: 'Weapon poison', Level: 60, XP: 137.5 },
                { Name: 'Super restore', Level: 63, XP: 142.5 },
                { Name: 'Cadantine', Level: 65, XP: 12.5 },
                { Name: 'Sanfew serum', Level: 65, XP: 160 },
                { Name: 'Super defence', Level: 66, XP: 150 },
                { Name: 'Lantadyme', Level: 67, XP: 13.1 },
                { Name: 'Antidote+', Level: 68, XP: 155 },
                { Name: 'Antifire potion', Level: 69, XP: 157.5 },
                { Name: 'Dwarf weed', Level: 70, XP: 13.8 },
                { Name: 'Ranging potion', Level: 72, XP: 162.5 },
                { Name: 'Weapon poison(+)', Level: 73, XP: 165 },
                { Name: 'Torstol', Level: 75, XP: 15 },
                { Name: 'Magic potion', Level: 76, XP: 172.5 },
                { Name: 'Stamina potion', Level: 77, XP: 76.5 },
                { Name: 'Zamorak brew', Level: 78, XP: 175 },
                { Name: 'Antidote++', Level: 79, XP: 177.5 },
                { Name: 'Saradomin brew', Level: 81, XP: 180 },
                { Name: 'Weapon poison(++)', Level: 82, XP: 190 },
                { Name: 'Extended antifire', Level: 84, XP: 82.5 },
                { Name: 'Anti-venom', Level: 87, XP: 90 },
                { Name: 'Super combat potion', Level: 90, XP: 150 },
                { Name: 'Anti-venom+', Level: 94, XP: 125 },               
                          
            ]
        };
    }
    
    getHerbloreExperienceTable() {
        return this.experience;
    }

	
    
}
const herbloreXP = new HerbloreExperience();
export default herbloreXP;