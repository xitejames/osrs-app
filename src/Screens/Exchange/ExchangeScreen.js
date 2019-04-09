import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
	TouchableOpacity,
	TextInput,
	Button,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import itemDB from '../../api/itemDB'
import Chart from '../../Components/Chart/Chart'
import styles from '../../Styles/style'

export default class ExchangeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
			searchItemName: 'Candle',
			changed: false,
			searching: true,
			graphData: []
        };
    }

	async searchItem(){
		this.setState({ searching: true })
		await itemDB.setItem(this.state.searchItemName) 
		const id = await itemDB.getItemID()
		const graphData = await itemDB.getGraphData(id)
		const length = graphData.length-1
		// console.log(graphData.slice(Math.max(length - 10, 1)))
		const lastTen = graphData.slice(Math.max(length - 10, 1))
		this.setState({ changed: !this.state.changed, graphData: lastTen, searching: false})
	  };

    render() {
        return (
            <View style={styles.container}>
				<View style={styles.navBar}>				
					<TextInput
						style={{ maxWidth: 150}}
						placeholderTextColor='black'
    				underlineColorAndroid='black'
						onChangeText={(searchItemName) => {
							this.setState({ searchItemName });
						}}
						value={this.state.searchItemName}
						placeholder="Id or Name"
						style={{ minWidth: 250 }}
					/>
					<TouchableOpacity onPress={() => this.searchItem()}>
						<Icon name="search" size={60} />
					</TouchableOpacity>
				</View>

				<Text>Item Name: {itemDB.getItemName()}</Text>		
				<Text>Item Id: {itemDB.getItemID()}</Text>		
				<Text>Item Price: {itemDB.getItemPrice()}</Text>		
				<Text>Item Image</Text>	
				<Image
				style={{width: 50, height: 50}}
				source={{uri: itemDB.getPic()}}
				/>
				{/* { this.state.graphData.length > 0 && console.log('this.state.graphData') }
				{ this.state.graphData.length > 0 && console.log(this.state.graphData) } */}
				{ !this.state.searching && 
				   this.state.graphData.length > 0 && 
				   <Chart gData={this.state.graphData} />}
				
                <View style={styles.tabBar}>
					<TouchableOpacity style={styles.tabItem}
						onPress={() => this.props.navigation.navigate('Home')}>			
						<Icon name="home" size={30} />
						<Text style={styles.tabTitle}>Home</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.tabItem}
						onPress={() => this.props.navigation.navigate('Quest')}>			
						<Icon name="book" size={30} />
						<Text style={styles.tabTitle}>Quests</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.tabItem}
						onPress={() => this.props.navigation.navigate('Skill')}>			
						<Icon name="show-chart" size={30} />
						<Text style={styles.tabTitle}>Skills</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.tabItem}
						onPress={() => this.props.navigation.navigate('Exchange')}>			
						<Icon name="shop" size={30} />
						<Text style={styles.tabTitle}>GE prices</Text>
					</TouchableOpacity>
				</View>		
            </View>         
        );
    }      

}
