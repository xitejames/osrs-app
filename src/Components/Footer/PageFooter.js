import React, { Component } from "react";
import { Text, Button  } from "native-base";
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../../Styles/style'

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

export default withNavigation(PageFooter);