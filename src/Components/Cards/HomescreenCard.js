import React, { Component } from 'react';
import { Image, TouchableOpacity, Linking, FlatList } from 'react-native';
import { 
  Container, 
  View, 
  DeckSwiper, 
  Card, 
  CardItem, 
  Thumbnail, 
  Text, 
  Left, 
  Body
} from 'native-base';
import styles from '../../Styles/style';

export default class HomescreenCard extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <View >
          <FlatList
            data={this.props.articles}
            renderItem={({ item }) =>
            <TouchableOpacity
              onPress={()=>{
              Linking.openURL(item.link)
            }}>
              <Card style={{
                  elevation: 3,
                }}>
                <CardItem style={styles.card} >
                  <Left>
                    <Thumbnail source={require('../../../assets/icon.png')} />
                    <Body>
                      <Text
                      style={styles.text}
                      >{item.title}</Text>
                      <Text
                      style={styles.text}
                      >{item.time}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody style={styles.card}>
                  <Image 
                  style={{ height: 150, flex: 1 }} 
                  source={{uri:item.image}} />
                </CardItem>
                <CardItem style={styles.card}>
                  <Text
                  style={styles.text}
                  >{item.summary}</Text>
                </CardItem>
              </Card>
            </TouchableOpacity>
            }
            keyExtractor={item => item.title}
          />
        </View>
      </Container>
    );
  }
}