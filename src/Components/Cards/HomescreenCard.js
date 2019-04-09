import React, { Component } from 'react';
import { Image, TouchableOpacity, Linking } from 'react-native';
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

export default class HomescreenCard extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <View >
          <DeckSwiper
            dataSource={this.props.articles}
            renderItem={item =>
            <TouchableOpacity
              onPress={()=>{
              Linking.openURL(item.link)
            }}>
              <Card style={{
                  elevation: 3 
                }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={require('../../../assets/icon.png')} />
                    <Body>
                      <Text>{item.title}</Text>
                      <Text>{item.time}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image 
                  style={{ height: 150, flex: 1 }} 
                  source={{uri:item.image}} />
                </CardItem>
                <CardItem>
                  <Text>{item.summary}</Text>
                </CardItem>
              </Card>
            </TouchableOpacity>
            }
          />
        </View>
      </Container>
    );
  }
}