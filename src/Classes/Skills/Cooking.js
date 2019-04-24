import React from 'react';

class CookingExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: {},
        };

        this.experience = {
            Tasks: [
                { Pic: require('../../../assets/Images/item_Icons/cooking/Raw_shrimps.png'), Name: 'Shrimps', Level: 1, XP: 30 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Raw_anchovies.png'), Name: 'Anchovies', Level: 1, XP: 30 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Cooked_chicken.png'), Name: 'Cooked chicken', Level: 1, XP: 30 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Cooked_meat.png'), Name: 'Cooked meat', Level: 1, XP: 30 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Cooked_rabbit.png'), Name: 'Cooked rabbit', Level: 1, XP: 30 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Raw_sardine.png'), Name: 'Sardine', Level: 1, XP: 40 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Raw_herring.png'), Name: 'Herring', Level: 5, XP: 50 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Baked_potato.png'), Name: 'Baked potato', Level: 7, XP: 15 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Raw_mackerel.png'), Name: 'Mackerel', Level: 10, XP: 60 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Pie.png'), Name: 'Redberry pie', Level: 10, XP: 78 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Raw_trout.png'), Name: 'Trout', Level: 15, XP: 70 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Raw_cod.png'), Name: 'Cod', Level: 18, XP: 75 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Pie.png'), Name: 'Meat pie', Level: 20, XP: 110 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Raw_pike.png'), Name: 'Pike', Level: 20, XP: 80 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Raw_salmon.png'), Name: 'Salmon', Level: 25, XP: 90 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Stew.png'), Name: 'Stew', Level: 25, XP: 117 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Raw_tuna.png'), Name: 'Tuna', Level: 30, XP: 100 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Pie.png'), Name: 'Apple pie', Level: 30, XP: 130 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Raw_karambwan.png'), Name: 'Cooked karambwan', Level: 30, XP: 190 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Garden_pie.png'), Name: 'Garden pie', Level: 34, XP: 138 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Jug_of_wine.png'), Name: 'Jug of wine', Level: 35, XP: 200 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Plain_pizza.png'), Name: 'Plain pizza', Level: 35, XP: 143 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Raw_rainbow_fish.png'), Name: 'Rainbow fish', Level: 35, XP: 110 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Raw_cave_eel.png'), Name: 'Cave eel', Level: 38, XP: 115 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Chilli_potato.png'), Name: 'Potato with butter', Level: 39, XP: 40 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Raw_lobster.png'), Name: 'Lobster', Level: 40, XP: 120 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Cake.png'), Name: 'Cake', Level: 40, XP: 180 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Chilli_potato.png'), Name: 'Chilli potato', Level: 41, XP: 165.5 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Raw_bass.png'), Name: 'Bass ', Level: 43, XP: 130 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Raw_swordfish.png'), Name: 'Swordfish', Level: 45, XP: 140 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Meat_pizza.png'), Name: 'Meat pizza', Level: 45, XP: 169 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Fish_pie.png'), Name: 'Fish pie', Level: 47, XP: 164 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Potato_with_cheese.png'), Name: 'Potato with cheese', Level: 47, XP:40 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Egg_potato.png'), Name: 'Egg potato', Level: 51, XP: 195.5 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Botanical_pie.png'), Name: 'Botanical pie', Level: 52, XP: 180 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Anchovy_pizza.png'), Name: 'Anchovy pizza', Level: 55, XP: 182 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Mushroom_pie.png'), Name: 'Mushroom pie', Level: 60, XP: 200 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Raw_monkfish.png'), Name: 'Monkfish ', Level: 62, XP: 150 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Pineapple_pizza.png'), Name: 'Pineapple pizza', Level: 65, XP: 188 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Tuna_potato.png'), Name: 'Tuna potato', Level: 68, XP: 309.5 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Admiral_pie.png'), Name: 'Admiral pie', Level: 70, XP: 210 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Raw_shark.png'), Name: 'Shark', Level: 80, XP: 210 },                
                { Pic: require('../../../assets/Images/item_Icons/cooking/Raw_sea_turtle.png'), Name: 'Sea turtle', Level: 82, XP: 211.3 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Raw_anglerfish.png'), Name: 'Anglerfish', Level: 84, XP: 230 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Wild_pie.png'), Name: 'Wild pie', Level: 85, XP: 240 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Raw_dark_crab.png'), Name: 'Dark crab', Level: 90, XP: 215 },
                { Pic: require('../../../assets/Images/item_Icons/cooking/Raw_manta_ray.png'), Name: 'Manta ray', Level: 91, XP: 216.3},
                { Pic: require('../../../assets/Images/item_Icons/cooking/Summer_pie.png'), Name: 'Summer pie', Level: 95, XP: 260 },
            
                          
            ]
        };
    }
    
    getCookingExperienceTable() {
        return this.experience;
    }

	
    
}
const cookingXP = new CookingExperience();
export default cookingXP;