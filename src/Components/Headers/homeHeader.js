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
  })
}
