import React, { Component } from "react";
import { Text, Button  } from "native-base";
import { Image, View, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../../Styles/style'

class PageFooter extends Component {
  render() {
    return (
      <View style={styles.tabBar}>
      <TouchableOpacity style={styles.tabItem}
        onPress={() => this.props.navigation.navigate('Home')}>			
        <Image 
        style={styles.imageIcon}
        source={require('../../../assets/Teleport_to_House_icon.png')} />
        <Text style={styles.tabTitle}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}
        onPress={() => this.props.navigation.navigate('Quest')}>			
        <Image 
        style={styles.imageIcon}
        source={require('../../../assets/Quest_start_icon.png')} />
        <Text style={styles.tabTitle}>Quests</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}
        onPress={() => this.props.navigation.navigate('Skill')}>			
        <Image 
        style={styles.imageIcon}
        source={require('../../../assets/Skill_Icons/Stats_icon.png')} />
        <Text style={styles.tabTitle}>Skills</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}
        onPress={() => this.props.navigation.navigate('Exchange')}>			
        <Image 
        style={styles.imageIcon}
        source={require('../../../assets/Coins.png')} />
        <Text style={styles.tabTitle}>GE prices</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}
        onPress={() => this.props.navigation.navigate('WorldMap')}>			
        <Image 
        style={styles.imageIcon}
        source={require('../../../assets/wordMapIcon.png')} />
        <Text style={styles.tabTitle}>WorldMap</Text>
      </TouchableOpacity>
      </View>		
    );
  }
}

export default withNavigation(PageFooter);