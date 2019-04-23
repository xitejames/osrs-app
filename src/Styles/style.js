'use strict';

import { StyleSheet, Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window')
const maxWidth = width / 3.5
const maxHeight = height / 4.5

export default StyleSheet.create({


    container: {
		flex: 1,
		paddingTop: 5,
		backgroundColor: '#2b390e',
	},
	content: {
		paddingTop: 5,
		paddingHorizontal: 10,
        flexDirection: 'column',
	},
	header:{
		position: 'absolute',
		width: maxWidth,
		height: maxHeight,
		right: 0,
		top: -34
	},
	title:{
		fontFamily: 'Roboto_medium', 
		color: '#FFFF00', 
		fontSize: 22
	},
	searchInputContainer:{
		flex: 1,
		alignItems: 'center',
		width: '100%',
		flexDirection: 'row',
		paddingLeft: 5,
		elevation: 5
	},
	searchInput:{
		width: '100%',
		fontFamily: 'Roboto_medium',
		fontSize: 16,
		color: '#FFFF00'
	},
	h1Text:{
		fontSize: 18,
		textDecorationLine: 'underline',
		fontFamily: 'Roboto_medium',
		color: '#FFFF00',
	},
	imageIcon:{
		width: 30, 
		height: 30 
	},
    statBar: {
		height: 110,
		backgroundColor: '#2b390e',
		flexDirection: 'row'
	},
	textHeader: {
		fontFamily: 'Roboto_medium',
		fontSize: 20,
		color: '#FFFF00',
		paddingBottom: 20,
		textDecorationLine: 'underline'
	},
    statItem: {
		alignItems: 'center',
		paddingTop: 5,
		paddingBottom: 5,
        width: 80
    },
    statText: {
        fontSize: 11,
        color: '#FFFF00'
	},
	card:{
		backgroundColor: '#2b390e'
	},
	text:{
		fontFamily: 'Roboto_medium',
		fontSize: 16,
		color: '#FFFF00',
	}, 
	tableHeaderText:{
		fontFamily: 'Roboto_medium',
		fontSize: 18,
		color: '#FFFF00',

	}, 
	tableText:{
		fontFamily: 'Roboto_medium',
		fontSize: 15,
		color: '#FFFF00',
	}, 
	outputText:{
		fontFamily: 'Roboto_medium',
		fontSize: 16,
		color: '#FFFF00',
	}, 
	inputBox:{
		width: '100%',
		maxWidth: '70%'
	},
	baseIcon:{
		maxHeight: 57, 
		maxWidth: 57
	},
    buttonStyle: {
		height: 60,
		position: 'absolute',
    },  	
    tabBar: {
		backgroundColor: '#2b390e',
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
		color: '#FFFF00'
	},
	navBar: {
		height: 100,
		elevation: 3,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	navRight: {
		flexDirection: 'row'
	},

});