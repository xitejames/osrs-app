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
    
    findSkillLevel(num){
        return this.stats.playerStats[num].Level;
    }
    findSkillExperience(num){
        return this.stats.playerStats[num].XP;
    }
    findSkillRank(num){
        return this.stats.playerStats[num].Rank; 
    }

	
    
}
const currUser = new CurrentUser();
export default currUser;