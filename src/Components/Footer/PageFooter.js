import React, { Component } from "react";
import { Text, Button  } from "native-base";
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

class PageFooter extends Component {
  render() {
    return (
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
    );
  }
}


const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
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
	 
});

export default withNavigation(PageFooter);