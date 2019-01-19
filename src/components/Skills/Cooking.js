import React from 'react';

class CookingExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: {},
        };

        this.experience = {
            Tasks: [
                { Name: 'Shrimps', Level: 1, XP: 30 },
                { Name: 'Anchovies', Level: 1, XP: 30 },
                { Name: 'Cooked chicken', Level: 1, XP: 30 },
                { Name: 'Cooked meat', Level: 1, XP: 30 },
                { Name: 'Cooked rabbit', Level: 1, XP: 30 },
                { Name: 'Sardine', Level: 1, XP: 40 },
                { Name: 'Sinew', Level: 3, XP: 3 },
                { Name: 'Herring', Level: 5, XP: 50 },
                { Name: 'Fruit blast', Level: 6, XP: 50 },
                { Name: 'Baked potato', Level: 7, XP: 15 },
                { Name: 'Pineapple punch', Level: 8, XP: 70 },
                { Name: 'Spicy sauce', Level: 9, XP: 24 },
                { Name: 'Mackerel', Level: 10, XP: 60 },
                { Name: 'Redberry pie', Level: 10, XP: 78 },
                { Name: 'Toad crunchies', Level: 10, XP: 100 },
                { Name: 'Chilli con carne', Level: 11, XP: 55 },
                { Name: 'Roast bird meat', Level: 11, XP: 62.5 },
                { Name: 'Thin snail meat', Level: 12, XP: 70 },
                { Name: 'Scrambled egg', Level: 13, XP: 50 },
                { Name: 'Cider', Level: 14, XP: 182 },
                { Name: 'Worm crunchies', Level: 14, XP: 104 },
                { Name: 'Trout', Level: 15, XP: 70 },
                { Name: 'Roast rabbit', Level: 16, XP: 72.5 },
                { Name: 'Lean snail meat', Level: 17, XP: 80 },
                { Name: 'Cod', Level: 18, XP: 75 },
                { Name: 'Wizard blizzard', Level: 18, XP: 110 },
                { Name: 'DwarvenStout', Level: 19, XP: 215 },
                { Name: 'Short green guy', Level: 20, XP: 120 },
                { Name: 'Meat pie', Level: 20, XP: 110 },
                { Name: 'Pike', Level: 20, XP: 80 },
                { Name: 'Roast beast meat', Level: 21, XP: 82.5 },
                { Name: 'Fat snail meat', Level: 22, XP: 95 },
                { Name: 'Egg and tomato', Level: 23, XP: 50 },
                { Name: 'Asgarnian ale', Level: 24, XP: 248 },
                { Name: 'Salmon', Level: 25, XP: 90 },
                { Name: 'Stew', Level: 25, XP: 117 },
                { Name: 'Fruit batta', Level: 25, XP: 150 },
                { Name: 'Toad batta', Level: 26, XP: 152 },
                { Name: 'Worm batta', Level: 27, XP: 154 },
                { Name: 'Vegetable batta', Level: 28, XP: 156 },
                { Name: 'Cooked sweetcorn', Level: 28, XP: 104 },
                { Name: 'Cooked slimy eel', Level: 28, XP: 95 },
                { Name: 'Mud pie', Level: 29, XP: 128 },
                { Name: 'Tuna', Level: 30, XP: 100 },
                { Name: 'Apple pie', Level: 30, XP: 130 },
                { Name: 'Worm hole', Level: 30, XP: 170 },
                { Name: 'Cooked karambwan', Level: 30, XP: 190 },
                { Name: 'Drunk dragon', Level: 32, XP: 160 },
                { Name: 'Garden pie', Level: 34, XP: 138 },
                { Name: 'Jug of wine', Level: 35, XP: 200 },
                { Name: 'Plain pizza', Level: 35, XP: 143 },
                { Name: 'Rainbow fish', Level: 35, XP: 110 },
                { Name: 'Blurberry special', Level: 37, XP: 180 },
                { Name: 'Cave eel', Level: 38, XP: 115 },
                { Name: 'Dragon bitter', Level: 39, XP: 347 },
                { Name: 'Lobster', Level: 40, XP: 120 },
                { Name: 'Cake', Level: 40, XP: 180 },
                { Name: 'Chilli potato', Level: 41, XP: 165.5 },
                { Name: 'Chocolate bomb', Level: 42, XP: 190 },
                { Name: 'Bass ', Level: 43, XP: 130 },
                { Name: 'Moonlight mead', Level: 44, XP: 380 },
                { Name: 'Swordfish', Level: 45, XP: 140 },
                { Name: 'Meat pizza', Level: 45, XP: 169 },
                { Name: 'Fish pie', Level: 47, XP: 164 },
                { Name: 'Cooked oomlie wrap', Level: 50, XP: 30 },
                { Name: 'Chocolate cake', Level: 50, XP: 210 },
                { Name: 'Egg potato', Level: 51, XP: 195.5 },
                { Name: 'Anchovy pizza', Level: 55, XP: 182 },
                { Name: 'Ugthanki kebab', Level: 58, XP: 80 },
                { Name: 'Curry ', Level: 60, XP: 280 },
                { Name: 'Monkfish ', Level: 62, XP: 150 },
                { Name: 'Mushroom potato', Level: 64, XP: 270.5 },
                { Name: 'Pineapple pizza', Level: 65, XP: 188 },
                { Name: 'Tuna and corn', Level: 67, XP: 204 },
                { Name: 'Tuna potato', Level: 68, XP: 309.5 },
                { Name: 'Admiral pie', Level: 70, XP: 210 },
                { Name: 'Shark', Level: 80, XP: 210 },                
                { Name: 'Sea turtle', Level: 82, XP: 211.3 },
                { Name: 'Anglerfish', Level: 84, XP: 230 },
                { Name: 'Wild pie', Level: 85, XP: 240 },
                { Name: 'Dark crab', Level: 90, XP: 215 },
                { Name: 'Manta ray', Level: 91, XP: 216.3},
                { Name: 'Summer pie', Level: 95, XP: 260 },
            
                          
            ]
        };
    }
    
    getCookingExperienceTable() {
        return this.experience;
    }

	
    
}
const cookingXP = new CookingExperience();
export default cookingXP;