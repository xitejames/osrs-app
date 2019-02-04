import React from 'react';

class HunterExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: {},
        };

        this.experience = {
            Tasks: [
                { Name: 'Crimson swift', Level: 1, XP: 34 },
                { Name: 'Polar kebbit', Level: 1, XP: 30 },
                { Name: 'Common kebbit', Level: 3, XP: 36 },
                { Name: 'Bird house', Level: 5, XP: 280 },
                { Name: 'Golden warbler', Level: 5, XP: 47 },
                { Name: 'Feldip Weasel', Level: 7, XP: 48 },
                { Name: 'Copper longtail', Level: 9, XP: 61 },
                { Name: 'Cerulean twitch', Level: 11, XP: 64.5 },
                { Name: 'Desert devil', Level: 13, XP: 66 },
                { Name: 'Oak bird house', Level: 14, XP: 420 },
                { Name: 'Ruby harvest', Level: 15, XP: 24 },
                { Name: 'Tropical wagtail', Level: 19, XP: 95 },
                { Name: 'Wild kebbit', Level: 23, XP: 128 },
                { Name: 'Willow bird house', Level: 24, XP: 560 },
                { Name: 'Sapphire glacialis', Level: 25, XP: 34 },
                { Name: 'Ferret', Level: 27, XP: 115 },
                { Name: 'White rabbit', Level: 27, XP: 144 },
                { Name: 'Swamp lizard', Level: 29, XP: 152 },
                { Name: 'Spined larupia', Level: 31, XP: 180 },
                { Name: 'Barb-tailed kebbit', Level: 33, XP: 168 },
                { Name: 'Teak bird house', Level: 34, XP: 700 },
                { Name: 'Snowy knight', Level: 35, XP: 44 },
                { Name: 'Prickly kebbit', Level: 37, XP: 204 },
                { Name: 'Horned graahk', Level: 41, XP: 240 },
                { Name: 'Spotted kebbit', Level: 43, XP: 104 },
                { Name: 'Maple bird house ', Level: 44, XP: 820 },
                { Name: 'Black warlock', Level: 45, XP: 54 },
                { Name: 'Orange salamander', Level: 47, XP: 224 },
                { Name: 'Mahogany bird house', Level: 49, XP: 960 },
                { Name: 'Razor-backed kebbit', Level: 49, XP: 348 },
                { Name: 'Sabre-toothed kebbit', Level: 51, XP: 200 },
                { Name: 'Chinchompa', Level: 53, XP: 198.4 },
                { Name: 'Sabre-toothed kyatt', Level: 55, XP: 300 },
                { Name: 'Dark kebbit', Level: 57, XP: 132 },
                { Name: 'Yew bird house', Level: 59, XP: 1020 },
                { Name: 'Red salamander', Level: 59, XP: 272 },
                { Name: 'Maniacal monkey', Level: 60, XP: 1000 },
                { Name: 'Carnivorous chinchompa', Level: 63, XP: 265 },
                { Name: 'Black salamander', Level: 67, XP: 319.5 },
                { Name: 'Dashing kebbit', Level: 69, XP: 156 },
                { Name: 'Imp', Level: 71, XP: 450 },
                { Name: 'Black chinchompa', Level: 73, XP: 315 },
                { Name: 'Magic bird house', Level: 74, XP: 1140 },
                { Name: 'Redwood bird house', Level: 89, XP: 1200},          
                          
            ]
        };
    }
    
    getHunterExperienceTable() {
        return this.experience;
    }

	
    
}
const hunterXP = new HunterExperience();
export default hunterXP;