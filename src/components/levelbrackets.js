import React from 'react';
import { 
    Agility,
    Construction,
    Cooking,
    Crafting,
    Farming,
    Firemaking,
    Fishing,
    Fletching,
    Herblore,
    Hunter,
    Magic,
    Mining,
    Prayer,
    Runecrafting,
    Smithing,
    Thieving,
    Woodcutting,

} from './Skills'


class Levels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: {},
            currentSkillTasks: {},
            currentSkillName: '',
        };

        this.experience = {
            Tasks: [
                { Level: '1', XP: 0, Difference: 0 },
                { Level: '2', XP: 83, Difference: 83 },
                { Level: '3', XP: 174, Difference: 91 },
                { Level: '4', XP: 276, Difference: 102 },
                { Level: '5', XP: 388, Difference: 112 },
                { Level: '6', XP: 512, Difference: 124 },
                { Level: '7', XP: 650, Difference: 138 },
                { Level: '8', XP: 801, Difference: 151 },
                { Level: '9', XP: 969, Difference: 168 },
                { Level: '10', XP: 1154, Difference: 185 },
                { Level: '11', XP: 1358, Difference: 204 },
                { Level: '12', XP: 1584, Difference: 226 },
                { Level: '13', XP: 1833, Difference: 249 },
                { Level: '14', XP: 2107, Difference: 274 },
                { Level: '15', XP: 2411, Difference: 304 },
                { Level: '16', XP: 2746, Difference: 335 },
                { Level: '17', XP: 3115, Difference: 369 },
                { Level: '18', XP: 3523, Difference: 408 },
                { Level: '19', XP: 3973, Difference: 450 },
                { Level: '20', XP: 4470, Difference: 497 },
                { Level: '21', XP: 5018, Difference: 548 },
                { Level: '22', XP: 5624, Difference: 606 },
                { Level: '23', XP: 6291, Difference: 667 },
                { Level: '24', XP: 7028, Difference: 737 },
                { Level: '25', XP: 7842, Difference: 814 },
                { Level: '26', XP: 8740, Difference: 898 },
                { Level: '27', XP: 9730, Difference: 990 },
                { Level: '28', XP: 9730, Difference: 1094 },
                { Level: '29', XP: 12031, Difference: 1207 },
                { Level: '30', XP: 13363, Difference: 1332 },
                { Level: '31', XP: 14833, Difference: 1470 },
                { Level: '32', XP: 16456, Difference: 1623 },
                { Level: '33', XP: 18247, Difference: 1791 },
                { Level: '34', XP: 20224, Difference: 2182 },
                { Level: '35', XP: 22406, Difference: 2409 },
                { Level: '36', XP: 24815, Difference: 2658 },
                { Level: '37', XP: 27473, Difference: 2935 },
                { Level: '38', XP: 30408, Difference: 3240 },
                { Level: '39', XP: 33648, Difference: 3576 },
                { Level: '40', XP: 37224, Difference: 3947 },
                { Level: '41', XP: 41171, Difference: 4358 },
                { Level: '42', XP: 45529, Difference: 4810 },
                { Level: '43', XP: 50339, Difference: 5310 },
                { Level: '44', XP: 55649, Difference: 5863 },
                { Level: '45', XP: 61512, Difference: 6471 },
                { Level: '46', XP: 67983, Difference: 7144 },
                { Level: '47', XP: 75127, Difference: 7887 },
                { Level: '48', XP: 83014, Difference: 8707 },
                { Level: '49', XP: 91721, Difference: 9612 },
                { Level: '50', XP: 101333, Difference: 10612 },
                { Level: '51', XP: 111945, Difference: 11715 },
                { Level: '52', XP: 123660, Difference: 12934 },
                { Level: '53', XP: 136594, Difference: 14278 },
                { Level: '54', XP: 150872, Difference: 15764 },
                { Level: '55', XP: 166636, Difference: 17404 },
                { Level: '56', XP: 184040, Difference: 19214 },
                { Level: '57', XP: 203254, Difference: 21212 },
                { Level: '58', XP: 224466, Difference: 23420 },
                { Level: '59', XP: 247886, Difference: 25856 },
                { Level: '60', XP: 273742, Difference: 25856 },
                { Level: '61', XP: 302288, Difference: 28546 },
                { Level: '62', XP: 333804, Difference: 31516 },
                { Level: '63', XP: 368599, Difference: 34795 },
                { Level: '64', XP: 407015, Difference: 38416 },
                { Level: '65', XP: 449428, Difference: 42413 },
                { Level: '66', XP: 496254, Difference: 46826 },
                { Level: '67', XP: 547953, Difference: 51699 },
                { Level: '68', XP: 605032, Difference: 57079 },
                { Level: '69', XP: 668051, Difference: 63019 },
                { Level: '70', XP: 737627, Difference: 69576 },
                { Level: '71', XP: 814445, Difference: 76818 },
                { Level: '72', XP: 899257, Difference: 84812 },
                { Level: '73', XP: 992895, Difference: 93638 },
                { Level: '74', XP: 1096278, Difference: 103383 },
                { Level: '75', XP: 1210421, Difference: 114143 },
                { Level: '76', XP: 1336443, Difference: 126022 },
                { Level: '77', XP: 1475581, Difference: 139138 },
                { Level: '78', XP: 1629200, Difference: 153619 },
                { Level: '79', XP: 1798808, Difference: 169608 },
                { Level: '80', XP: 1986068, Difference: 187260 },
                { Level: '81', XP: 2192818, Difference: 206750 },
                { Level: '82', XP: 2421087, Difference: 228269 },
                { Level: '83', XP: 2673114, Difference: 252027 },
                { Level: '84', XP: 2951373, Difference: 278259 },
                { Level: '85', XP: 3258594, Difference: 307221 },
                { Level: '86', XP: 3597792, Difference: 339198 },
                { Level: '87', XP: 3972294, Difference: 374502 },
                { Level: '88', XP: 4385776, Difference: 413482 },
                { Level: '89', XP: 4842295, Difference: 456519 },
                { Level: '90', XP: 5346332, Difference: 504037 },
                { Level: '91', XP: 5902831, Difference: 556499 },
                { Level: '92', XP: 6517253, Difference: 614422 },
                { Level: '93', XP: 7195629, Difference: 678376 },
                { Level: '94', XP: 7944614, Difference: 748985 },
                { Level: '95', XP: 8771558, Difference: 826944 },
                { Level: '96', XP: 9684577, Difference: 913019 },
                { Level: '97', XP: 10692629, Difference: 1008052 },
                { Level: '98', XP: 11805606, Difference: 1112977 },
                { Level: '99', XP: 13034431, Difference: 1228825 },          
            ]
        };
    }
    


     findActionsToLevel(actionXP, currentXp, xpToGet){
        let actionsLeft = 0, actions = 0 , xpDifference = 0;
        xpDifference = xpToGet - currentXp;        
        actions = Math.ceil(xpDifference/actionXP);
        if(actions > 0)
        {
            actionsLeft = actions;
        }
        return actionsLeft;
    }

    actionsToLevel(actionXP, currentXp, levelToGet){
        let actionsLeft = 0,
        xpToGet = this.findOverallXpByLevel(levelToGet),
        xpDifference = 0;
        let experienceArray = this.experience.Tasks;
        experienceArray.forEach(element => {
            if(element.Level == levelToGet){
                xpToGet = element.XP;
            }
        });
        xpDifference = xpToGet - currentXp;
        actionsLeft = Math.ceil(xpDifference/actionXP);
        return(actionsLeft);
    }

    actionsToNextLevel(action, currentLevel){

    }

    findOverallLevelByXp(xp){
        let foundLevel = 0;
        let experienceArray = this.experience.Tasks;
        experienceArray.forEach(element => {
            if(element.XP <= xp){
                foundLevel = element.Level;
            }
        });
        return foundLevel;
    }
    findOverallXpByLevel(Level){
        let foundXp = 0;
        let experienceArray = this.experience.Tasks;
        experienceArray.forEach(element => {
            if(element.Level == Level){
                foundXp = element.XP;
            }
        });
        return foundXp + '';
    }

    findSkillLevelByName(actionName){
        let checkLevel = 0;
        let arrayToCheck = this.currentSkillTasks.Tasks;
        arrayToCheck.forEach(element => {
            if(element.Name == actionName){
                checkLevel = element.Level;
            }

        });
        return checkLevel;
    }
    
    findSkillXpByName(actionName){
        let checkXp = 0;
        let arrayToCheck = this.currentSkillTasks.Tasks;
        arrayToCheck.forEach(element => {
            if(element.Name == actionName){
                checkXp = element.XP;
            }
        });
        return checkXp;
    }


    setCurrentSkill(newSkill){
   
        switch (newSkill) {
 
            case "Agility":
              this.currentSkillName = 'Agility';
              this.currentSkillTasks = Agility.getAgilityExperienceTable();
              break;
            case "Construction":
              this.currentSkillName = 'Construction';
              this.currentSkillTasks = Construction.getConstructionExperienceTable();
              break;
            case "Cooking":
              this.currentSkillName = 'Cooking';
              this.currentSkillTasks = Cooking.getCookingExperienceTable();
              break;
            case "Crafting":
              this.currentSkillName = 'Crafting';
              this.currentSkillTasks = Crafting.getCraftingExperienceTable();
              break;
            case "Farming":
              this.currentSkillName = 'Farming';
              this.currentSkillTasks = Farming.getFarmingExperienceTable();
              break;
            case "Firemaking":
              this.currentSkillName = 'Firemaking';
              this.currentSkillTasks = Firemaking.getFiremakingExperienceTable();
              break;
            case "Fishing":
              this.currentSkillName = 'Fishing';
              this.currentSkillTasks = Fishing.getFishingExperienceTable();
              break; 
            case "Fletching":
              this.currentSkillName = 'Fletching';
              this.currentSkillTasks = Fletching.getFletchingExperienceTable();
              break;
            case "Herblore":
              this.currentSkillName = 'Herblore';
              this.currentSkillTasks = Herblore.getHerbloreExperienceTable();
              break;
            case "Hunter":
              this.currentSkillName = 'Hunter';
              this.currentSkillTasks = Hunter.getHunterExperienceTable();
              break;
            case "Magic":
              this.currentSkillName = 'Magic';
              this.currentSkillTasks = Magic.getMagicExperienceTable();
              break; 
            case "Mining":
              this.currentSkillName = 'Mining';
              this.currentSkillTasks = Mining.getMiningExperienceTable();
              break;
            case "Prayer":
              this.currentSkillName = 'Prayer';
              this.currentSkillTasks = Prayer.getPrayerExperienceTable();
            break;
              case "Runecrafting":
              this.currentSkillName = 'Runecrafting';
              this.currentSkillTasks = Runecrafting.getRunecraftingExperienceTable();
              break; 
            case "Smithing":
              this.currentSkillName = 'Smithing';
              this.currentSkillTasks = Smithing.getSmithingExperienceTable();
              break;
            case "Thieving":
              this.currentSkillName = 'Thieving';
              this.currentSkillTasks = Thieving.getThievingExperienceTable();
              break; 
            case "Woodcutting":
              this.currentSkillName = 'Woodcutting';
              this.currentSkillTasks = Woodcutting.getWoodcuttingExperienceTable();
              break; 




  






              
          }


        
    }
    getCurrentSkillTasks(){
        return this.currentSkillTasks.Tasks;
    }
    getCurrentSkillName(){
        return this.currentSkillName;
    }



}
const levels = new Levels();
export default levels;