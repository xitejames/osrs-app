import cio from 'cheerio-without-node-native';

const f2purl = "https://oldschool.runescape.wiki/w/Quests/Free-to-play"
const p2purl = "https://oldschool.runescape.wiki/w/Quests/Members"
const allQuest = "https://oldschool.runescape.wiki/w/Quests/List"

class Quests {

    async findF2pQuests(){
        let url = f2purl
        let array = []
        let i = 0

        await fetch(`${url}`).then((response) => response.text()).then((body) => {    
            const $ = cio.load(body)
            const f2p = $("tbody").eq(2).text()
            // console.log('f2p: ' + f2p)
            let questTableData = f2p.split("\n")
            //REMOVES BLANK / NULL / UNDEF DATA FROM ARRAY
            questTableData = questTableData.filter(function(x){
                return (x !== (undefined || null || ''));
            });
            //REMOVES START OF MY ARRAY THAT I DO NOT NEED
            questTableData.splice(0, 6)
            //PARSES DATA FROM ARRAY TO CREATE QUEST OBJECT (JSON)
            for (i = 0; i < 21; i++) { 
                const obj = {
                    'Id': questTableData[0], 
                    'Name': questTableData[1], 
                    'Difficulty': questTableData[2], 
                    'Length': questTableData[3], 
                    'QP': questTableData[4],
                    'Series': questTableData[5]
                    }
                // console.log(obj)
                questTableData.splice(0, 6)
                array.push(obj)
              }

        }).catch(function(err) {
            console.log(err)
        });
        return array
    };   
    
    async findP2pQuests(){
        let url = p2purl
        let array = []
        let i

        await fetch(`${url}`).then((response) => response.text()).then((body) => {    
            const $ = cio.load(body)
            const p2p = $("tbody").eq(2).text()
            // console.log('p2p: ' + p2p)
            let questTableData = p2p.split("\n")
            //REMOVES BLANK / NULL / UNDEF DATA FROM ARRAY
            questTableData = questTableData.filter(function(x){
                return (x !== (undefined || null || ''));
            });
            //REMOVES START OF MY ARRAY THAT I DO NOT NEED
            questTableData.splice(0, 6)
            //PARSES DATA FROM ARRAY TO CREATE QUEST OBJECT (JSON)
            for (i = 0; i < 93; i++) { 
                const obj = {
                    'Id': questTableData[0], 
                    'Name': questTableData[1], 
                    'Difficulty': questTableData[2], 
                    'Length': questTableData[3], 
                    'QP': questTableData[4],
                    }
                // console.log(obj)
                questTableData.splice(0, 6)
                array.push(obj)
              }
              i++
              if(i === 94){
                const obj = {
                    'Id': 0.1, 
                    'Name': questTableData[0], 
                    'Difficulty': questTableData[1], 
                    'Length': questTableData[2], 
                    'QP': 0,
                }
                // console.log(obj)
                questTableData.splice(0, 4)
                array.push(obj)
              }
              for (i = 0; i < 27; i++) { 
                const obj = {
                    'Id': questTableData[0], 
                    'Name': questTableData[1], 
                    'Difficulty': questTableData[2], 
                    'Length': questTableData[3], 
                    'QP': questTableData[4],
                    }
                // console.log(obj)
                questTableData.splice(0, 6)
                array.push(obj)
              }
              
        }).catch(function(err) {
            console.log(err)
        });
        return array
    };   

	
    
}
export default new Quests();
