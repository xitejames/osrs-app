import React from 'react'
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'
import { View } from 'react-native'
 
export default class Chart extends React.Component {
  
    state = {
        ready: false,
        newData: [],
        contentInset: { top: 20, bottom: 20 }
    };
  
    componentWillMount(){
        let newData = []
        this.props.gData.forEach(element => {
            console.log(element.price)
            newData.push(element.price) 
        });      
        this.setState({ newData: newData })        
    }

    componentWillReceiveProps() {
        let newData = []
        this.props.gData.forEach(element => {
            console.log(element.price)
            newData.push(element.price) 
        });      
        this.setState({ newData: newData })

    }
  
    render() {
        const { newData, contentInset } = this.state
      return (
            <View style={{ height: 200, flexDirection: 'row' }}>
                <YAxis
                    data={ newData }
                    contentInset={ contentInset }
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    numberOfTicks={ 10 }
                    formatLabel={ value => `${value}GP` }
                />
                <LineChart
                    style={{ flex: 1, marginLeft: 16 }}
                    data={ newData }
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                    contentInset={ contentInset }
                >
                    <Grid/>
                </LineChart>
            </View>
      );
    }
  }
