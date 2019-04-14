import React, { Component } from "react";
import {
    View,
    Image,
	TouchableOpacity,
	TextInput,
	ActivityIndicator,
	Picker
} from "react-native";
import {
	Container,
	Text,
	Content,
	Row,
	Header,
	Footer,
	Button,
	Item
  } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons';
import itemDB from '../../api/itemDB'
import Chart from '../../Components/Chart/Chart'
import styles from '../../Styles/style'
import { PageFooter } from '../../Components/Footer'
import { navigationOptions } from '../../Headers/header'

export default class ExchangeScreen extends Component {
	static navigationOptions = navigationOptions

    constructor(props) {
        super(props);
        this.state = {
			searchItemName: 'Candle',
			itemId: 0,
			changed: false,
			searching: false,
			graphData: [],
			currData: [],
			months: '6 Months',
			daysData: 0,
			pickDate: false
        };
	}



	async currDataUpdate(days){
		this.setState({ searching: true, pickDate: false })
		const graphData = await itemDB.getGraphData(this.state.itemId)
		const newData = graphData.slice(Math.max(graphData.length - days, 1))
		let newMonth = ''
		console.log(days)
		switch(days){
			case 30:
			newMonth ='1 Month'
			break;
			case 60:
			newMonth ='2 Months'
			break;
			case 90:
			newMonth ='3 Months'
			break;
			case 120:
			newMonth ='4 Months'
			break;
			case 150:
			newMonth ='5 Months'
			break;
			case 180:
			newMonth ='6 Months'
			break;
		}
		this.setState({ currData: newData, daysData: days, searching: false, months: newMonth })
	}

	async searchItem(){
		this.setState({ searching: true })
		await itemDB.setItem(this.state.searchItemName) 
		const id = await itemDB.getItemID()
		const graphData = await itemDB.getGraphData(id)
		const length = graphData.length
		// console.log(graphData.slice(Math.max(length - 10, 1)))
		// const lastTen = graphData.slice(Math.max(length - 10, 1))
		this.setState({ changed: !this.state.changed, daysData: length, searching: false, currData: graphData, itemId: id})
	  };

    render() {
        return (
            <Container style={styles.container}>
				<Header/>
				<Content>
					<Row style={styles.navBar}>				
						<TextInput
							style={styles.inputBox}
							placeholderTextColor='black'
							underlineColorAndroid='black'
							onChangeText={(searchItemName) => {
								this.setState({ searchItemName });
							}}
							value={this.state.searchItemName}
							placeholder="Id or Name"
						/>
						<TouchableOpacity onPress={() => this.searchItem()}>
							<Icon name="search" size={60} />
						</TouchableOpacity>
					</Row>

					<Text style={styles.text}>Item Name: {itemDB.getItemName()}</Text>		
					<Text style={styles.text}>Item Id: {itemDB.getItemID()}</Text>		
					<Text style={styles.text}>Item Price: {itemDB.getItemPrice()}</Text>		
					<Text style={styles.text}>Item Image</Text>	
					<Image
					style={{width: 50, height: 50}}
					source={{uri: itemDB.getPic()}}
					/>

					{ this.state.searching && 
						<ActivityIndicator 
							style={{ paddingTop: 50 }} 
							size={"large"}	
						/>
					}

					{ !this.state.searching && 
					this.state.currData.length > 0 && 
					<View style={{ alignSelf: 'center' , paddingTop: 15, minWidth: '97%', }}>
	
						
						<View style={{ flexDirection: 'row' }} >
							<Text style={styles.text} >{itemDB.getItemName()} price over {this.state.months} </Text>	
							<TouchableOpacity onPress={() => this.setState({ pickDate: !this.state.pickDate })}>
								<Icon name="today" size={30} />
							</TouchableOpacity>	
						</View>
						
						
						{ this.state.pickDate &&
						<Picker
							selectedValue={this.state.PickerSelectedVal}
							mode="dropdown"
							onValueChange={(itemValue, itemIndex) => this.currDataUpdate(itemValue)} >
							<Picker.Item label="1 Month" value={30} />
							<Picker.Item label="2 Month" value={60} />
							<Picker.Item label="3 Month" value={90} />
							<Picker.Item label="4 Month" value={120} />
							<Picker.Item label="5 Month" value={150} />
							<Picker.Item label="6 Month" value={180} />
						</Picker> }
						<Chart gData={this.state.currData} />
					</View>
					}
					
				</Content>
				<Footer style={{ marginTop: 20 }}>
					<PageFooter nav={this.props.navigation}/>  
				</Footer>
            </Container>         
        );
    }      

}
