import React from 'react';

class TestExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: {},
        };

        this.experience = {
            Tasks: [
                { Name: 'Clay', Level: 1, XP: 5 },
                          
            ]
        };
    }
    
    getTestExperienceTable() {
        return this.experience;
    }

	
    
}
const testXP = new TestExperience();
export default testXP;