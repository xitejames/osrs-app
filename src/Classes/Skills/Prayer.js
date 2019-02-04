import React from 'react';

class PrayerExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: {},
        };

        this.experience = {
            Tasks: [
                { Name: 'Bones', Level: 1, XP: 4.5, Bone: 1 },                
                { Name: 'Wolf bones', Level: 1, XP: 4.5, Bone: 1 },  
                { Name: 'Burnt bones', Level: 1, XP: 4.5, Bone: 1 },  
                { Name: 'Monkey bones', Level: 1, XP: 5, Bone: 1 },  
                { Name: 'Bat bones', Level: 1, XP: 5.3, Bone: 1 },  
                { Name: 'Jorge bones', Level: 1, XP: 15, Bone: 1 },                
                { Name: 'Big bones', Level: 1, XP: 15, Bone: 1 },  
                { Name: 'Zogre bones', Level: 1, XP: 22.5, Bone: 1 },  
                { Name: 'Shaikahan bones', Level: 1, XP: 25, Bone: 1 },  
                { Name: 'Babydragon bones', Level: 1, XP: 30, Bone: 1 },  
                { Name: 'Ourg bones', Level: 1, XP: 140, Bone: 1 },                
                { Name: 'Wyvern bones', Level: 1, XP: 72, Bone: 1 },  
                { Name: 'Dragon bones', Level: 1, XP: 72, Bone: 1 },  
                { Name: 'Fayrg bones', Level: 1, XP: 84, Bone: 1 },  
                { Name: 'Lava dragon bones', Level: 1, XP: 85, Bone: 1 },  
                { Name: 'Raurg bones', Level: 1, XP: 96, Bone: 1 },                
                { Name: 'Dagannoth bones', Level: 1, XP: 125, Bone: 1 },  
                { Name: 'Superior dragon bones', Level: 70, XP: 150, Bone: 1 },  
                { Name: 'Ensouled elf head', Level: 1, XP: 754, Bone: 0 },  
                { Name: 'Ensouled minotaur head', Level: 1, XP: 364, Bone: 0 },  
                { Name: 'Ensouled scorpion head', Level: 1, XP: 454, Bone: 0 },  
                { Name: 'Ensouled bear head', Level: 1, XP: 480, Bone: 0 },  
                { Name: 'Ensouled unicorn head', Level: 1, XP: 494, Bone: 0 },  
                { Name: 'Ensouled dog head', Level: 1, XP: 520, Bone: 0 },  
                { Name: 'Ensouled chaos druid head', Level: 1, XP: 584, Bone: 0 },  
                { Name: 'Ensouled giant head', Level: 1, XP: 650, Bone: 0 },  
                { Name: 'Ensouled ogre head', Level: 1, XP: 716, Bone: 0 },  
                { Name: 'Ensouled troll head', Level: 1, XP: 780, Bone: 0 },  
                { Name: 'Ensouled monkey head', Level: 1, XP: 182, Bone: 0 },  
                { Name: 'Ensouled horror head', Level: 1, XP: 832, Bone: 0 },  
                { Name: 'Ensouled kalphite head', Level: 1, XP: 884, Bone: 0 },  
                { Name: 'Ensouled dagannoth head', Level: 1, XP: 936, Bone: 0 },  
                { Name: 'Ensouled bloodveld head', Level: 1, XP: 1040, Bone: 0 },  
                { Name: 'Ensouled tzhaar head', Level: 1, XP: 1104, Bone: 0 },  
                { Name: 'Ensouled demon head', Level: 1, XP: 1170, Bone: 0 },  
                { Name: 'Ensouled aviansie head', Level: 1, XP: 1234, Bone: 0 },  
                { Name: 'Ensouled abyssal head', Level: 1, XP: 1300, Bone: 0 },  
                { Name: 'Ensouled dragon head', Level: 1, XP: 1560, Bone: 0 },  
                { Name: 'Ensouled imp head', Level: 1, XP: 286, Bone: 0 },  
                { Name: 'Ensouled goblin head', Level: 1, XP: 130, Bone: 0 },  
 
            ]
        };
    }
    
    getPrayerExperienceTable() {
        return this.experience;
    }

	
    
}
const prayerXP = new PrayerExperience();
export default prayerXP;