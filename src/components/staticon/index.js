import Component from 'react';
import { View, TouchableOpacity, } from 'react-native';


export default class StatIcon extends Component {
    render(){
        return (
            <View>
                <TouchableOpacity>
                <Image source={require('../../assets/Skill_Icons/Attack.png')} style={{ maxHeight: 50, maxWidth: 50 }} />
                <Text>Attack</Text>
                <Text>Level:</Text>
                <Text>Rank:</Text>
                <Text>XP:</Text>
                </TouchableOpacity>  
            </View>  
        );
    }
}
