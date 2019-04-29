import React from 'react';
import { Button, Text, Icon } from 'native-base';
import { View, TouchableOpacity, Image } from 'react-native'
import styles from '../../Styles/style'

export const navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state
  return ({
    headerTransparent: true,
    headerBackgroundTransitionPreset: 'fade',
    headerLeft: (
    <View>
        <Button
        onPress={() => navigation.goBack()}
        transparent
        accessible
        accessibilityRole="button"
        accessibilityLabel="Go back"
        accessibilityHint="Double tap to go back to the previous screen."
        >
        <Icon
            type="Feather"
            name="chevron-left"
            style={{ color: '#FFFF00' }}
        />
        </Button>
    </View>
    ),
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
        <Button onPress={() => navigation.navigate('Search')} transparent
          accessible={true}
          accessibilityLabel="routeName"
          accessibilityHint={"Navigate to the routeName screen"}
          accessibilityRole="button"
          accessibilityTraits="button"
        >
        <Image 
        resizeMode={'contain'}
        style={styles.imageIcon}
        source={require('../../../assets/Images/Search.png')} />
        </Button>
      </View>
    ),
  })
}
