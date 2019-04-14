'use strict';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
		flex: 1,
		paddingTop: 5,
		paddingHorizontal: 10,
        flexDirection: 'column',
		backgroundColor: '#FFF',
		
	},
    statBar: {
		height: 110,
		backgroundColor: '#fff',
        flexDirection: 'row',
    },
    statItem: {
        alignItems: 'center',
        width: 80
    },
    statText: {
        fontSize: 11,
        color: '#000'
    },
	text:{
		fontFamily: 'Roboto_medium',
		fontSize: 16
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
		backgroundColor: '#FFF',
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
		color: '#000'
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