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
            style={{ fontFamily: 'Roboto_medium', color: '#000', fontSize: 18 }}
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
        style={{ width: 40, height: 40 }}
        source={require('../../../assets/wordMapIcon.png')} />
      </TouchableOpacity>
      </View>
    ),
  })
}
