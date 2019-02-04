import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Button,
} from "react-native";

export default class HomeScreen extends React.Component {
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

    onPressMoveToSkills = () => {
        
    };


    render() {
        return (
            <View>
                <Button                 
                    title={"Skill Screen"}  
                    onPress={() => this.props.navigation.navigate('Skill')} >             
                </Button>
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
	navBar: {

	},
	body: {
		flex: 1
	},
	statBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
	},
	statItem: {
        margin: 10,
    },
    headItem: {
        marginLeft: 10,
        marginTop: 5,
        marginRight: 10,
    },
    textItem: {
        fontSize: 15,    
        color: '#FF0'      

    },
    inputText: {
        fontSize: 15,   
        backgroundColor: '#625200' 
    },
});