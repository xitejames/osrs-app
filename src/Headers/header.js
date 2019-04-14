import React from 'react';
import { StyleProvider, Button, Text, Icon } from 'native-base';
import { View } from 'react-native'

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
            style={{ color: '#000' }}
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
            style={{ fontFamily: 'Roboto_medium', color: '#000', fontSize: 18 }}
          >
            { routeName }
        </Text>
        </Button>
      </View>
    ),
  })
}
