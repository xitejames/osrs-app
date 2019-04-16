'use strict';

import { StyleSheet, Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window')
const maxWidth = width / 3.5
const maxHeight = height / 4.5

export default StyleSheet.create({


    container: {
		flex: 1,
		paddingTop: 5,
		backgroundColor: '#D3D3D3',
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
		color: '#9400d3', 
		fontSize: 22
	},
	h1Text:{
		fontSize: 18,
		textDecorationLine: 'underline',
		fontFamily: 'Roboto_medium',
		color: '#9400d3',
	},
	imageIcon:{
		width: 30, 
		height: 30 
	},
    statBar: {
		height: 110,
		backgroundColor: '#D3D3D3',
        flexDirection: 'row',
    },
    statItem: {
        alignItems: 'center',
        width: 80
    },
    statText: {
        fontSize: 11,
        color: '#9400d3'
	},
	card:{
		backgroundColor: '#D3D3D3'
	},
	text:{
		fontFamily: 'Roboto_medium',
		fontSize: 16,
		color: '#9400d3',
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
		backgroundColor: '#D3D3D3',
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
		color: '#9400d3'
	},
	navBar: {
		paddingTop: 25,
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