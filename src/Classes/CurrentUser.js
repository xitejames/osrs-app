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
            }
            i++
        });

        return num
    }

    resetCurrent(){    
        let template = {
            playerStats: [
                { Name: 'Overall', Rank: '0', Level: '0', XP: '0' },
                { Name: 'Attack', Rank: '0', Level: '0', XP: '0' },
                { Name: 'Defence', Rank: '0', Level: '0', XP: '0' },
                { Name: 'Strength', Rank: '0', Level: '0', XP: '0' },
                { Name: 'Hitpoints', Rank: '0', Level: '0', XP: '0' },
                { Name: 'Ranged', Rank: '0', Level: '0', XP: '0' },
                { Name: 'Prayer', Rank: '0', Level: '0', XP: '0' },
                { Name: 'Magic', Rank: '0', Level: '0', XP: '0' },
                { Name: 'Cooking', Rank: '0', Level: '0', XP: '0' },
                { Name: 'Woodcutting', Rank: '0', Level: '0', XP: '0' },
                { Name: 'Fletching', Rank: '0', Level: '0', XP: '0' },
                { Name: 'Fishing', Rank: '0', Level: '0', XP: '0' },
                { Name: 'Firemaking', Rank: '0', Level: '0', XP: '0' },
                { Name: 'Crafting', Rank: '0', Level: '0', XP: '0' },
                { Name: 'Smithing', Rank: '0', Level: '0', XP: '0' },
                { Name: 'Mining', Rank: '0', Level: '0', XP: '0' },
                { Name: 'Herblore', Rank: '0', Level: '0', XP: '0' },
                { Name: 'Agility', Rank: '0', Level: '0', XP: '0' },
                { Name: 'Thieving', Rank: '0', Level: '0', XP: '0' },
                { Name: 'Slayer', Rank: '0', Level: '0', XP: '0' },
                { Name: 'Farming', Rank: '0', Level: '0', XP: '0' },
                { Name: 'Runecrafting', Rank: '0', Level: '0', XP: '0' },
                { Name: 'Hunter', Rank: '0', Level: '0', XP: '0' },
                { Name: 'Construction', Rank: '0', Level: '0', XP: '0' },
                { Name: 'idk', catch1: '0', catch2: '0', catch3: '0', catch4: '0' },
                { Name: 'Clue Scrolls(all)', Rank: '0', Score: '0' },
                { Name: 'Clue Scrolls(easy)', Rank: '0', Score: '0' },
                { Name: 'Clue Scrolls(medium)', Rank: '0', Score: '0' },
                { Name: 'Clue Scrolls(hard)', Rank: '0', Score: '0' },
                { Name: 'Clue Scrolls(elite)', Rank: '0', Score: '0' },
                { Name: 'Clue Scrolls(Master)', Rank: '0', Score: '0' },
                { Name: 'LMS Rank', Rank: '0', Score: '0' }
            ]
        };
        return template;
    };
	
    
}
const currUser = new CurrentUser();
export default currUser;