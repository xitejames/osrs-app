import React from 'react';

class CurrentUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stats: {},
            username: ''
        };
	}

    setStats(NewData){
        this.stats = NewData;
    }

    getStats(){
        return this.stats.playerStats.toString();
    }
    
    findSkillLevel(sName){
        num = this.findSkillNameNum(sName)
        return this.stats.playerStats[num].Level;
    }
    findSkillExperience(sName){
        num = this.findSkillNameNum(sName)
        return this.stats.playerStats[num].XP;
    }
    findSkillRank(sName){
        num = this.findSkillNameNum(sName)
        return this.stats.playerStats[num].Rank; 
    }

    findSkillNameNum(sName){
        num = "0";
        i=0;

        let arrayToCheck = this.stats.playerStats;        
        arrayToCheck.forEach(element => {        
            if(element.Name == sName){
                num = i;
                console.log(num)                
            }
            i++
        });

        return num
    }

    resetCurrent(){    
        let template = {
            playerStats: [
                { Name: 'Overall', Rank: '', Level: '', XP: '' },
                { Name: 'Attack', Rank: '', Level: '', XP: '' },
                { Name: 'Defence', Rank: '', Level: '', XP: '' },
                { Name: 'Strength', Rank: '', Level: '', XP: '' },
                { Name: 'Hitpoints', Rank: '', Level: '', XP: '' },
                { Name: 'Ranged', Rank: '', Level: '', XP: '' },
                { Name: 'prayer', Rank: '', Level: '', XP: '' },
                { Name: 'Magic', Rank: '', Level: '', XP: '' },
                { Name: 'Cooking', Rank: '', Level: '', XP: '' },
                { Name: 'Woodcutting', Rank: '', Level: '', XP: '' },
                { Name: 'Fletching', Rank: '', Level: '', XP: '' },
                { Name: 'Fishing', Rank: '', Level: '', XP: '' },
                { Name: 'Firemaking', Rank: '', Level: '', XP: '' },
                { Name: 'Crafting', Rank: '', Level: '', XP: '' },
                { Name: 'Smithing', Rank: '', Level: '', XP: '' },
                { Name: 'Mining', Rank: '', Level: '', XP: '' },
                { Name: 'Herblore', Rank: '', Level: '', XP: '' },
                { Name: 'Agility', Rank: '', Level: '', XP: '' },
                { Name: 'Theiving', Rank: '', Level: '', XP: '' },
                { Name: 'Slayer', Rank: '', Level: '', XP: '' },
                { Name: 'Farming', Rank: '', Level: '', XP: '' },
                { Name: 'RuneCraft', Rank: '', Level: '', XP: '' },
                { Name: 'Hunter', Rank: '', Level: '', XP: '' },
                { Name: 'Construction', Rank: '', Level: '', XP: '' },
                { Name: 'idk', catch1: '', catch2: '', catch3: '', catch4: '' },
                { Name: 'Clue Scrolls(all)', Rank: '', Score: '' },
                { Name: 'Clue Scrolls(easy)', Rank: '', Score: '' },
                { Name: 'Clue Scrolls(medium)', Rank: '', Score: '' },
                { Name: 'Clue Scrolls(hard)', Rank: '', Score: '' },
                { Name: 'Clue Scrolls(elite)', Rank: '', Score: '' },
                { Name: 'Clue Scrolls(Master)', Rank: '', Score: '' },
                { Name: 'LMS Rank', Rank: '', Score: '' }
            ]
        };
        return template;
    };
	
    
}
const currUser = new CurrentUser();
export default currUser;