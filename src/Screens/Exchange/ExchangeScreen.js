import React, { Component } from "react";
import {
    View,
    Image,
	TouchableOpacity,
	TextInput,
	ActivityIndicator,
	Picker,
	Dimensions
} from "react-native";
import {
	Container,
	Text,
	Content,
	Row,
	Header,
	Footer,
	Label,
	Item
  } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons';
import itemDB from '../../api/itemDB'
import Chart from '../../Components/Chart/Chart'
import styles from '../../Styles/style'
import { PageFooter } from '../../Components/Footer'
import { navigationOptions } from '../../Components/Headers/header'

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
		const newMonth ='6 Months'
		// console.log(graphData.slice(Math.max(length - 10, 1)))
		// const lastTen = graphData.slice(Math.max(length - 10, 1))
		this.setState({ changed: !this.state.changed, daysData: length, searching: false, currData: graphData, itemId: id, months: newMonth })
	  };

    render() {
		const { width, height } = Dimensions.get('window')
		const maxWidth = width / 3.5
		const maxHeight = height / 4.5
        return (
            <Container style={styles.container}>
				<Header
					transparent
					translucent={true}
					noShadow={true}
					iosBarStyle="light-content"
					>
					<View
					style={{
						position: 'absolute',
						width: maxWidth,
						height: maxHeight,
						right: 0,
						top: -34
					}}
					>
					</View>
				</Header>
				<Content>


					<Item stackedLabel={true} style={{ marginLeft: 0, marginTop: 20 }}>
						<Label style={styles.text} >
						Search Item
						</Label>
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
								<Icon name="search" size={30} />
							</TouchableOpacity>
						</Row>
					</Item>



					
					<Item stackedLabel={true} style={{ marginLeft: 0, marginTop: 20 }}>
						<Label style={styles.text} >
						Item Image
						</Label>
						<Image
						style={{width: 50, height: 50}}
						source={{uri: itemDB.getPic()}}
						/>
					</Item>
					<Item stackedLabel={true} style={{ marginLeft: 0, marginTop: 20 }}>
						<Label style={styles.text} >
						Item Name
						</Label>
						<Text style={styles.text}> {itemDB.getItemName()} </Text>	
					</Item>
					<Item stackedLabel={true} style={{ marginLeft: 0, marginTop: 20 }}>
						<Label style={styles.text} >
						Item Price
						</Label>
						<Text style={styles.text}> {itemDB.getItemPrice()} </Text>	
					</Item>

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
							<Picker.Item label="2 Months" value={60} />
							<Picker.Item label="3 Months" value={90} />
							<Picker.Item label="4 Months" value={120} />
							<Picker.Item label="5 Months" value={150} />
							<Picker.Item label="6 Months" value={180} />
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
