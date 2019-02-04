import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";

export default class QuestScreen extends React.Component {
    static 	navigationOptions = {
        headerTitle:
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <Image source={require('../../../assets/osrs.png')}
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
                <Text>
                    Quest Screen!!
                </Text>
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
	 
});