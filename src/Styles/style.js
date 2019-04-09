'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({

    container: {
		flex: 1,
		paddingHorizontal: 20,
        flexDirection: 'column',
    	backgroundColor: '#FFF',
    },
    buttonStyle: {
		height: 60,
		position: 'absolute',
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