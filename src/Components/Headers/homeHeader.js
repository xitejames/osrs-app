import React from 'react';
import { Button, Text, Icon } from 'native-base';
import { View, TouchableOpacity, Image } from 'react-native'
import styles from '../../Styles/style'

export const homeNavigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state
  return ({
    headerTransparent: true,
    headerBackgroundTransitionPreset: 'fade',
    headerTitle: (
      <View>
        <Button onPress={() => navigation.navigate('Home')} transparent
          accessible={true}
          accessibilityLabel="routeName"
          accessibilityHint={"Navigate to the routeName screen"}
          accessibilityRole="button"
          accessibilityTraits="button"
        >
          <Text
            style={styles.title}
          >
            { routeName }
        </Text>
        </Button>
      </View>
    ),
    headerRight: (
      <View>
      <TouchableOpacity style={{ alignItems: 'center',	justifyContent: 'center', paddingRight:15 }}
        onPress={() => navigation.navigate('WorldMap')}>			
        <Image 
        style={styles.imageIcon}
        source={require('../../../assets/Options.png')} />
      </TouchableOpacity>
      </View>
    ),
  })
}
