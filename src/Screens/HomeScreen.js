import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Button,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class HomeScreen extends Component {
    static 	navigationOptions = {
        headerTitle:
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <Image source={require('../../assets/osrs.png')}
            style={{ maxHeight: 60, maxWidth: 130}} />
            <Text> Home Screen </Text>		
        </View>,
        
    };	
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Button 
                    style={styles.buttons}                
                    title={"Skill Screen"}  
                    onPress={() => this.props.navigation.navigate('Skill')} >             
                </Button>
                <Button 
                    style={styles.buttons}                
                    title={"Quest Screen"}  
                    onPress={() => this.props.navigation.navigate('Quest')} >             
                </Button>

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
const styles = StyleSheet.create({
	container: {
        flex: 1,
        flexDirection: 'column',
    	backgroundColor: '#625341',
    },
    buttons: {
        margin: 30,
    },  	
    tabBar: {
		height: 60,
		borderTopWidth: 0.5,
		flexDirection: 'row',
		justifyContent: 'space-around',
		position: 'absolute',
		left:0,
		bottom:0,
		right:0,
	},
	tabItem: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	tabTitle: {
		paddingTop: 4,
		fontSize: 11,
		color: '#FF0'
	},
	 
});