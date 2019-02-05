import React from'react';
import * as table from '../../../items.json'
import * as ExchangeData from '../../../config.json'

class ItemDB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: 'start',
            newItemID: 0,
            currentItem: {},
            currPic: '',
            currPrice:'',
        };        
    }

    getItemID(){
        return this.state.newItemID
    }
    getItemName(){
        return this.state.newItem
    }

    setPic(newPicData){
        this.state.currPic = newPicData
    }

    getPic(){
        return this.state.currPic
    }
    
    setItem(item) {   

        if(isNaN(item)){
            for(var k in table) {
                if(table[k].name == item){
                    this.state.newItem = table[k].name
                    this.state.newItemID = table[k].id
                }

            }
        }else if(!isNaN(item)){
            for(var k in table) {
                if(table[k].id == item){
                    this.state.newItem = table[k].name
                    this.state.newItemID = table[k].id
                }

      
            }
        } else {
            console.log("Not a valid item ingame ")
        }
    }

    getPic(){
       return this.state.currPic
    }

    searchItem = async (currItem) => {
		let hsUrl = ExchangeData.ge.information
		return fetch(`${hsUrl}${currItem}`).then((response) => response.json()).then((body) => {
          
            this.state.currentItem = body
            this.state.currPic = body.item.icon
            this.state.currPrice = body.item.current.price

		}).catch(function(err) {
			console.log(err)
		});
	};
	
    
}
const itemDB = new ItemDB();
export default itemDB;