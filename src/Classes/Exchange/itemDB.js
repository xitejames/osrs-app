import React from'react';
import * as table from '../../../items.json'
import * as ExchangeData from '../../../config.json'

class ItemDB extends React.Component {
    constructor(props) {
        super(props);
        this.props = {
            newItem: 'CannonBall',
            newItemID: 2,
            currentItem: {},
            currPic: 'http://services.runescape.com/m=itemdb_oldschool/1549278053419_obj_sprite.gif?id=2',
            currPrice: '200',
            dailyPrice: {},
            averagePrice: {},
        };        
    }

    getItemID(){
        return this.props.newItemID
    }
    getItemName(){
        return this.props.newItem
    }

    setPic(newPicData){
        this.props.currPic = newPicData
    }

    getCurrentItem(){
        return this.props.currentItem
    }

    getItemPrice(){
        return this.props.currPrice 
    }

    getPic(){
        return this.props.currPic
    }
    
    async setItem(item) {   
        let found = false
        if(isNaN(item)){
            
            for(var k in table) {
                let check1 = table[k].name + '', check2 = item+ ''

                if(check1.toLowerCase() == check2.toLowerCase() ){
                    await this.searchItem(table[k].id)
                    found = true
                }

            }
        }else if(!isNaN(item)){
            for(var k in table) {
                if(table[k].id == item){
                    await this.searchItem(table[k].id)
                    found = true
                }
            }
        }
        if(!found)
        console.log("NO ITEM FOUND")
    }

    getPic(){
       return this.props.currPic
    }

    searchItem = async (currItem) => {
		let hsUrl = ExchangeData.ge.information
		return fetch(`${hsUrl}${currItem}`).then((response) => response.json()).then((body) => {          
            this.props.currentItem = body
            this.props.currPic = body.item.icon
            this.props.newItem = body.item.name
            this.props.newItemID = body.item.id 
            this.props.currPrice = body.item.current.price
            this.getGraph(body.item.id)

		}).catch(function(err) {
			console.log(err)
		});
    };

    getGraph = async (currItem) => {
        let hsUrl = ExchangeData.ge.graph
        
        
        return fetch(`${hsUrl}${currItem}${'.json'}`).then((response) => response.json()).then((body) => {          
           
        this.props.dailyPrice = body.daily
        this.props.averagePrice = body.average
        

        for (var key in body.daily) {
            console.log("Key: " + key);
            console.log("Value: " + body.daily[key]);
        }

    
        console.log()


        for (var i = 0; i < body.daily.length; i++){    
            console.log(this.props.dailyPrice[i])        
        }


		}).catch(function(err) {
			console.log(err)
		});
    };

	
    
}
const itemDB = new ItemDB();
export default itemDB;