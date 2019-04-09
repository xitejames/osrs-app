import React from 'react'
import { LineChart, YAxis, XAxis, Grid } from 'react-native-svg-charts'
import { View } from 'react-native'
 
export default class Chart extends React.Component {
  
    state = {
        ready: false,
        newPrices: [],
        newDate: [],
        contentInset: { top: 20, bottom: 20 }
    };
    //when component is initalised
    componentWillMount(){
        let newPrices = [], newDate = []
        this.props.gData.forEach(element => {
            newPrices.push(element.price) 
            newDate.push(element.date)
        });      
        this.setState({ newPrices: newPrices, newDate: newDate })
    }
    //when component values passed into it change
    componentWillReceiveProps() {
      let newPrices = [], newDate = []
        this.props.gData.forEach(element => {
            newPrices.push(element.price) 
            newDate.push(element.date)
        });      
        this.setState({ newPrices: newPrices, newDate: newDate })
    }

    priceRounded(type, price){
        let retVal = price
        let stringPrice = price.toString()
        let firstDig, secondDig
        switch(type){
            case 0:
                firstDig = stringPrice.substr(0,1)
                secondDig = stringPrice.substr(1,3)
                retVal = firstDig + "." + secondDig
            break;
            case 1:
                firstDig = stringPrice.substr(0,2)
                secondDig = stringPrice.substr(2,3)
                retVal = firstDig + "." + secondDig
            break;
            case 2:
                firstDig = stringPrice.substr(0,3)
                secondDig = stringPrice.substr(3,3)
                retVal = firstDig + "." + secondDig
            break;
            case 3:
                firstDig = stringPrice.substr(0,1)
                secondDig = stringPrice.substr(1,3)
                retVal = firstDig + "." + secondDig
            break;
            case 4:
                firstDig = stringPrice.substr(0,2)
                secondDig = stringPrice.substr(2,3)
                retVal = firstDig + "." + secondDig
            break;
            case 5:
                firstDig = stringPrice.substr(0,3)
                secondDig = stringPrice.substr(3,3)
                retVal = firstDig + "." + secondDig
            break;
            case 6:
                firstDig = stringPrice.substr(0,1)
                secondDig = stringPrice.substr(1,4)
                retVal = firstDig + "." + secondDig
            break;
        }
        return retVal
    }
  
    getCoinValue(price){
        let returnValue = '0 gp'
         switch(true){
            case (0 < price && price < 1000):
            returnValue = price + ' gp'
            break;
            case (1000 < price && price < 10000):
            returnValue = this.priceRounded(0, price) + 'k gp'
            break;
            case (10000 < price && price < 100000):
            returnValue = this.priceRounded(1, price) + 'k gp'
            break;2680000
            case (100000 < price && price < 1000000):
            returnValue = this.priceRounded(2, price) + 'k gp'
            break;
            case (1000000 < price && price < 10000000):
            returnValue = this.priceRounded(3, price) + 'm gp'
            break;
            case (1000000 < price && price < 100000000):
            returnValue = this.priceRounded(4, price) + 'm gp'
            break;
            case (100000000 < price && price < 1000000000):
            returnValue = this.priceRounded(5, price) + 'm gp'
            break;
            case (1000000000 < price):
            returnValue = this.priceRounded(6, price) + 'b gp'
            break;
        }
        return returnValue
    }

    render() {
      const { newPrices, contentInset, newDate } = this.state
      return (
        <View style={{ height: 200, flexDirection: 'row'}}>
          <YAxis
              data={ newPrices }
              contentInset={ contentInset }
              svg={{
                  fill: 'grey',
                  fontSize: 10,
              }}
              numberOfTicks={ 10 }
              formatLabel={ value => this.getCoinValue(value) }
          />
          <LineChart
            style={{ flex: 1, marginLeft: 16 }}
            data={ newPrices }
            svg={{ stroke: 'rgb(134, 65, 244)' }}
            contentInset={ contentInset }
          >
              <Grid/>
          </LineChart>

        </View>          
      );
    }
  }
