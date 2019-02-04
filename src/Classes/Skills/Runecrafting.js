import React from 'react';

class RunecraftingExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: {},
        };

        this.experience = {
            Tasks: [
                { Name: 'Air tiara', Level: 1, XP: 25 },
                { Name: 'Nature tiara', Level: 1, XP: 45 },
                { Name: 'Mind tiara', Level: 1, XP: 27.5 },
                { Name: 'Death tiara', Level: 1, XP: 50 },
                { Name: 'Law tiara', Level: 1, XP: 47.5 },
                { Name: 'Wrath tiara', Level: 1, XP: 52.5 },
                { Name: 'Chaos tiara', Level: 1, XP: 42.5 },
                { Name: 'Body tiara', Level: 1, XP: 37.5 },
                { Name: 'Fire tiara', Level: 1, XP: 35 },
                { Name: 'Earth tiara', Level: 1, XP: 32.5 },
                { Name: 'Water tiara', Level: 1, XP: 30 },
                { Name: 'Cosmic tiara', Level: 1, XP: 40 },
                { Name: 'Air rune', Level: 1, XP: 5 },
                { Name: 'Mind rune', Level: 2, XP: 5.5 },
                { Name: 'Water rune', Level: 5, XP: 6 },
                { Name: 'Smoke rune', Level: 5, XP: 9.5 },
                { Name: 'Mist rune', Level: 6, XP: 8.5 },
                { Name: 'Earth rune', Level: 9, XP: 6.5 },
                { Name: 'Dust rune', Level: 10, XP: 9 },
                { Name: 'Mud rune', Level: 13, XP: 9.5 },
                { Name: 'Fire rune', Level: 14, XP: 7 },
                { Name: 'Steam rune', Level: 19, XP: 10 },
                { Name: 'Body rune', Level: 20, XP: 7.5 },
                { Name: 'Lava rune', Level: 23, XP: 10.5 },
                { Name: 'Cosmic rune', Level: 27, XP: 8 },
                { Name: 'Chaos rune', Level: 35, XP: 8.5 },
                { Name: 'Astral rune', Level: 40, XP: 8.7 },
                { Name: 'Nature rune', Level: 44, XP: 9 },
                { Name: 'Law rune', Level: 54, XP: 9.5 },
                { Name: 'Death rune', Level: 65, XP: 10 },
                { Name: 'Blood rune', Level: 77, XP: 23.8 },
                { Name: 'Soul rune', Level: 90, XP: 29.7 },
                { Name: 'Wrath rune', Level: 95, XP: 8 },

                          
            ]
        };
    }
    
    getRunecraftingExperienceTable() {
        return this.experience;
    }

	
    
}
const tunecraftingXP = new RunecraftingExperience();
export default tunecraftingXP;