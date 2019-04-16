import React, {
    Component,
  } from 'react';
  
  import {
    Dimensions,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    PanResponder,
  } from 'react-native';
  import styles from '../../Styles/style'

  export class PictureZoom extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
      };
    }

    componentWillMount() {

    }
  
    render() {
        const { img } = this.state
  
        return (
            <View style={styles.container}>
            <Image 
            style={{ height: 300, width: 300 }}
            source={require('../../../assets/osrsWorldMap.png')} />

            </View>
        );
    }
  }
  
