import React from'react';
import * as table from '../../items.json'
import * as ExchangeData from '../../config.json'

class ItemDB extends React.Component {
    constructor(props) {
        super(props);
        this.props = {
            newItem: '',
            newItemID: 0,
            currentItem: {},
            currPic: 'http://services.runescape.com/m=itemdb_oldschool/1549278053419_obj_sprite.gif?id=2',
            currPrice: '',
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
            this.props.currPrice = body.item.current.price + 'gp'
		}).catch(function(err) {
			console.log(err)
		});
    };

    getDateFromAPI( milliseconds ) {
        let seconds

        let startDate = new Date('1970-01-01')
        startDate.setDate(startDate.getDate());

        return startDate
    }

    getGraphData = async (currItem) => {
        let hsUrl = ExchangeData.ge.graph
        let days, price , pastDays = []
        await fetch(`${hsUrl}${currItem}${'.json'}`).then((response) => response.json()).then((body) => {          
            this.props.dailyPrice = body.daily
            this.props.averagePrice = body.average
            
            for (var key in body.daily) {
                newDate = this.getDateFromAPI(key)
                price = body.daily[key]
                pastDays.push({price: price, date:newDate})
            }
		}).catch(function(err) {
			console.log(err)
        });
        return pastDays
    };

	
    
}
const itemDB = new ItemDB();
export default itemDB;